const crypto = require('crypto'); 
const Url = require('../models/url');

const createShortenedUrl = async (req, res) => {
    try {
        let { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json({ message: "Original URL is required!" });
        }
        // const existingUrl = await Url.findOne({ originalUrl });
        // if (existingUrl) {
        //     return res.status(200).json({
        //         message: "URL was already shortened!",
        //         data: { shortUrl: existingUrl.shortenedUrl }
        //     });
        // }


        // Allow duplicate long URLs (each submission should create a new short URL)
        //resolve by appending timestamp to original url
        const uniqueUrl = `${originalUrl}?timestamp=${Date.now()}`;

        const shortenedUrl = crypto.randomBytes(3).toString('hex');

        const newUrl = new Url({
            originalUrl: uniqueUrl, 
            shortenedUrl,
            clicks: 0,
            createdAt: Date.now()
        });
        await newUrl.save();

        return res.status(201).json({
            message: "Shortened URL created successfully!",
            data: { shortUrl: newUrl.shortenedUrl }
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};



const redirectUrl = async (req, res) => {
    try {
      const { shortenedUrl } = req.params;
  
      if (!shortenedUrl) {
        return res.status(400).json({ error: "Bad Request: shortenedUrl is required" });
      }
  
      const url = await Url.findOne({ shortenedUrl });
  
      if (!url) {
        return res.status(404).json({ error: "Not Found: URL does not exist!" });
      }
  
      url.clicks += 1; 
      await url.save();
  
      return res.redirect(url.originalUrl);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  };


const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find();

        if (!urls || urls.length === 0) {
            return res.status(404).json("Not Found: No URLs found.");
        }

        return res.status(200).json({
            message: "OK: URLs retrieved successfully!",
            data: urls
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error.");
    }
};

module.exports = { createShortenedUrl, redirectUrl, getAllUrls };
