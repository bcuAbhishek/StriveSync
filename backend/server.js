import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectdb.js';

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});
