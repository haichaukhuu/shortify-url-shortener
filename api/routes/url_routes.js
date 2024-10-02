const express = require('express');
const router = express.Router();
const { createShortenedUrl, redirectUrl, getAllUrls } = require("../controllers/url_controllers");

router.post("/create", createShortenedUrl);
router.get('/:shortenedUrl', redirectUrl);
router.get("/get", getAllUrls);

module.exports = router;
