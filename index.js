const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

const corsOptions = {
    origin: process.env.ORIGIN,
};

app.use('/', cors(corsOptions), require('./app/routers/user.router'));

async function start() {
    try {
        await mongoose.connect(process.env.DB_URL);
        app.listen(PORT, () => {
            console.log(`Server successfully started on PORT: ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
}

start();
