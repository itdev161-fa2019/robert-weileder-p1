/*jshint esversion: 8 */
import express from 'express';
import connectDatabase from './config/db';
import { check, validationResult } from 'express-validator';

// Initialize express application
const app = express();

// Connect database
connectDatabase();

// Configure middleware
app.use(express.json({ extended: false }));

// API endpoints
/**
 * @route GET /
 * @desc Test endpoint
 */
app.get('/', (req, res) =>
    res.send('http get request sent to root api endpoint')
);

/**
 * @route POST api/games
 * @desc Add game
 */
app.post(
    '/api/games',
    [
        check('title', 'Please enter the game title')
            .not()
            .isEmpty(),
        check('platform', 'Please enter the game platform')
            .not()
            .isEmpty(),
        check('developer', 'Please enter the game developer')
            .not()
            .isEmpty(),
        check('genre', 'Please enter the game genre')
            .not()
            .isEmpty(),
        check('esrb', 'Please enter the game ESRB rating')
            .not()
            .isEmpty(),
    ],
    (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    } else {
        return res.send(req.body);
    }
}
);

// Connection listener
app.listen(3000, () => console.log('Express server running on port 3000'));