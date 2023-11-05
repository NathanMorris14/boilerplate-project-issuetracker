const mongoose = require('mongoose');

const uri = process.env.DB_URL;

const db = mongoose.connect(uri);

module.exports = db;