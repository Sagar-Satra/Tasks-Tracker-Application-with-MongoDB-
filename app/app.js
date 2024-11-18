import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import initRoutes from './routers/index.js';

const init = (app) => {
    app.use(cors());                    // Cross origin resource sharing middleware
    app.use(express.json());            // Middleware to parse JSON payloads
    app.use(express.urlencoded({ extended: true }));      // Middleware to handle URL-encoded data
    
    // Connect to MongoDB using Mongoose
    mongoose.connect(process.env.MONGO_CONNECTION).then(() => {
        console.log('Connected to MongoDB');
    }).catch((error) => {
        console.error('Error connecting to MongoDB:', error.message);
    });
    initRoutes(app);                     // Initialize application routes using initRoutes function
};

export default init;
