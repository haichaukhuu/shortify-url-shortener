const express = require('express');
const router = express.Router();
const { createShortenedUrl, getAllUrls } = require("../controllers/url_controllers");

router.post("/create", createShortenedUrl);

router.get("/get", getAllUrls);

module.exports = router;
