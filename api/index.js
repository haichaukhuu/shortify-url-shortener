const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectMongoDB = require("./config/db");
const urlRoutes = require('./routes/url_routes');
const cors = require('cors');

dotenv.config();
const app = express();

// Middlewares
app.use(express.json());
// app.use(cors());
app.use(cors({
  origin: 'https://shortify-url-shortener.vercel.app', 
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type'],
}));
connectMongoDB();

// API Routes
app.use("/api/urls", urlRoutes); 

app.listen(process.env.PORT || 3000, () => {
  console.log(`App is running on port: ${process.env.PORT || 3000}`);
});
