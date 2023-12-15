const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || 8080;

const app = express();

app.use('/', require('./app/routes/main'));

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
