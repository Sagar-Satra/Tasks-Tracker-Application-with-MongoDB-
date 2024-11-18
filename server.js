import express from 'express';
import dotenv from 'dotenv';
import initApp from './app/app.js';

dotenv.config();

const app = express();
initApp(app);
const PORT = process.env.PORT;

// Starting the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});