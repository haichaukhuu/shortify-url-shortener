const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectMongoDB = require("./config/db");
const urlRoutes = require('./routes/url_routes');
const cors = require('cors');

dotenv.config();
const app = express();

// Middlewares
app.use(cors({
  origin: 'https://shortify-n5pm.onrender.com', 
  methods: ['GET', 'POST', 'PUT', 'DELETE'], 
  credentials: true,
}));
app.use(express.json());
connectMongoDB();

// API Routes
app.use("/api/urls", urlRoutes); 

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port: ${process.env.PORT || 3000}`);
});
