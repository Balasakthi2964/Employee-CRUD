const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

    id: Number,
    name: String,
    email: String,
    dep: String,
    salary: Number,
    date: String,
    active: String
})

module.exports = mongoose.model('Model', userSchema)