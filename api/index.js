const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const connectMongoDB = require("./config/db");
const urlRoutes = require('./routes/url_routes');
const cors = require('cors');

const app = express();

// middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

// ROUTES
app.use("/api", urlRoutes);

app.listen(process.env.PORT || 3000, () => { 
  connectMongoDB();

  console.log("App is running on port:", process.env.PORT);
});