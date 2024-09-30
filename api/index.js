const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectMongoDB = require("./config/db");

const app = express();

// middlewares
dotenv.config();
app.use(express.json());

app.listen(process.env.PORT || 3000, () => { 
  connectMongoDB();

  console.log("App is running on port ", process.env.PORT,"...");
});