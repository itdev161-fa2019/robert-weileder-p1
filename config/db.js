/*jshint esversion: 8 */
import mongoose from 'mongoose';
import config from 'config';

// Get the connection string
const db = config.get('mongoURI');

// Connect to MongoDB
const connectDatabase = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true
        });
        console.log('Connected to MongoDB');
    } catch (error) {
        console.error(error.message);

        // Exit with failure code
        process.exit(1);
    }
};

export default connectDatabase;
