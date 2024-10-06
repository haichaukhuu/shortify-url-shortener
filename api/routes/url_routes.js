const express = require('express');
const router = express.Router();
const Url = require('../models/url.js');

const { createShortenedUrl, redirectUrl, getAllUrls } = require("../controllers/url_controller");

router.post("/create", createShortenedUrl);
router.get('/:shortenedUrl', redirectUrl);
router.get("/get", getAllUrls);

module.exports = router;