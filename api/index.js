const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')


const app = express()

// DATABASE
const connectMongoDB = async() => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
          
        console.log("Database is successfully connected!")
    }
    catch(error){
        console.log(error)
    }
}

// middlewares
dotenv.config()
app.use(express.json());

app.listen(process.env.PORT || 3000, () => { 
    connectMongoDB()

    console.log("App is running on port ", process.env.PORT,"...")
})