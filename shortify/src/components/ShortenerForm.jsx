import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import axios from "axios";

function ShortenerForm({ addLink }) {
  const [longUrl, setLongUrl] = useState("");
  const [customCode, setCustomCode] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [error, setError] = useState("");
  const [copySuccess, setCopySuccess] = useState("");

  const apiBaseUrl = "https://shortify-backend-yywu.onrender.com"; // Change to your backend URL

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!longUrl) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      const response = await axios.post(`${apiBaseUrl}/api/urls/create`, {
        originalUrl: longUrl,
        customCode: customCode || null
      });

      const newShortUrl = `${apiBaseUrl}/api/urls/${response.data.data.shortUrl}`;
      setShortUrl(newShortUrl);
      setError("");
      setCopySuccess("");

      addLink(newShortUrl, longUrl, new Date().toISOString());
    } catch (error) {
      setError("Failed to create short URL. Please try again.");
      console.error(error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(shortUrl)
      .then(() => {
        setCopySuccess("URL copied to clipboard!");
      })
      .catch(() => {
        setCopySuccess("Failed to copy URL.");
      });
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #1976D2",
        borderRadius: "8px",
        p: 4,
        display: "inline-block",
        textAlign: "center",
        width: "400px"
      }}
    >
      <Typography
        variant="h5"
        component="h1"
        sx={{ mb: 2, color: "#1976D2", fontWeight: "bold" }}
      >
        URL Shortener
      </Typography>

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Enter long link..."
        value={longUrl}
        onChange={(e) => setLongUrl(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: "#E0E0E0",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        }}
      />

      <TextField
        fullWidth
        variant="outlined"
        placeholder="Custom short code (optional)..."
        value={customCode}
        onChange={(e) => setCustomCode(e.target.value)}
        sx={{
          mb: 2,
          backgroundColor: "#E0E0E0",
          borderRadius: "20px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
          },
        }}
      />

      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#1976D2",
          color: "#fff",
          borderRadius: "20px",
          padding: "8px 24px",
        }}
      >
        Create
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {shortUrl && (
        <Box sx={{ mt: 2 }}>
          <Typography
            variant="h6"
            component="p"
            sx={{ color: "#1976D2", fontWeight: "bold" }}
          >
            Shortened URL:{" "}
            <a href={shortUrl} target="_blank" rel="noopener noreferrer">
              {shortUrl}
            </a>
          </Typography>

          <Button
            variant="outlined"
            onClick={handleCopy}
            sx={{ mt: 1, textTransform: "none" }}
          >
            Copy to Clipboard
          </Button>

          {copySuccess && (
            <Typography
              variant="body2"
              sx={{ mt: 1, color: "#4caf50" }}
            >
              {copySuccess}
            </Typography>
          )}
        </Box>
      )}
    </Box>
  );
}

export default ShortenerForm;
