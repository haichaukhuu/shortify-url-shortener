const mongoose = require("mongoose");

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  shortenedUrl: {
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
  },
});

module.exports = mongoose.model("URL", urlSchema);
