const Url = require('../models/url');

const createShortenedUrl = async (req, res) => {
    try {
        const { originalUrl } = req.body;

        if (!originalUrl) {
            return res.status(400).json("Bad Request: Original URL is required!");
        }

        // 6-character random string
        const shortenedUrl = Math.random().toString(36).substring(2, 8);

        const newUrl = await Url.create({
            originalUrl: originalUrl,     
            shortenedUrl: shortenedUrl, 
            clicks: 0,
        });

        const baseUrl = `${req.protocol}://${req.get('host')}`;

        return res.status(201).json({
            message: "Created: Shortened URL created successfully!",
            data: {
                originalUrl: newUrl.originalUrl,
                shortUrl: `${baseUrl}/${newUrl.shortenedUrl}`
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).json("Internal Server Error.");
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
  
      return res.status(200).redirect(url.originalUrl);
    } catch (error) {
      if (error instanceof mongoose.Error) {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error: Database error" });
      } else {
        console.error(error);
        return res.status(500).json({ error: "Internal Server Error" });
      }
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
