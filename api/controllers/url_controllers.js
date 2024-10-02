const Url = require('../models/Url'); 

const createShortenedUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json("Bad Request: Original URL is required!");
        }

        const isExistedUrl = await Url.findOne({ originalUrl });
        if (isExistedUrl) {
            return res.status(400).json("Bad Request: URL was already shortened!");
        }

        // Creates a 6-character random string
        const shortenedUrl = Math.random().toString(36).substring(2, 6); 

        const newUrl = await Url.create({
            originalUrl: originalUrl,     
            shortenedUrl: shortenedUrl, 
            clicks: 0,       
            createdAt: Date.now() 
        });

        return res.status(201).json({
            message: "Created: Shortened URL created successfully!",
            data: {
                originalUrl: newUrl.originalUrl,
                shortUrl: newUrl.shortUrl
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error.");
    }
};


const getAllUrls = async (req, res) => {
    try {
        const urls = await Url.find();

        if (!urls || urls.length === 0) {
            return res.status(404).json("Not Found: No URLs found.");
        }

        return res.status(200).json({
            message: "OK: Shortened URL created successfully!",
            data: {urls}
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error.");
    }
};

module.exports = createShortenedUrl;
