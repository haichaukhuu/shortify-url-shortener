const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true,
    trim: true,
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  clicks: {
    type: Number,
    default: 0, // Tracks short URL click count
  },
  createdAt: {
    type: Date,
    default: Date.now, // when the URL was shortened
    // expires: 2592000,  // delete documents after 30 days (seconds)
  },
});


module.exports=mongoose.model("URL", urlSchema)
