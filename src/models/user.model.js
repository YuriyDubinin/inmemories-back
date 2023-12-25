const mongoose = require('mongoose');

const User = new mongoose.Schema({
    key: {type: String, required: true},
    photos: {type: Array, required: true},
    videos: {type: Array, required: false},
});

module.exports = mongoose.model('User', User);
