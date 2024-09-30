const Url = require('../models/Url'); // Import the Url model

const createShortenedUrl = async (req, res, next) => {
    try {
        // Extract original URL from request body
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

module.exports = createShortenedUrl;
