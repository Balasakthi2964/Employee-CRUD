const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/CRUD_db')
    .then(()=> console.log("Database Connected..."))
    .catch((error)=> console.log("Error: ", error))