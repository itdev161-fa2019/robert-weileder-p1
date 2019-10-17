/*jshint esversion: 8 */
import mongoose from 'mongoose';
import { stringify } from 'querystring';

const GameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    platform: {
        type: String,
        required: true
    },
    developer: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    esrb: {
        type: String,
        required: true
    }
});

const Game = mongoose.model('game', GameSchema);

export default Game;
