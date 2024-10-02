import React, { useState } from "react";
import { Box, Typography, TextField, Button, Alert } from "@mui/material";
import axios from "axios"; 

function ShortenerForm() {
  const [longUrl, setLongUrl] = useState(""); 
  const [shortUrl, setShortUrl] = useState(""); 
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!longUrl) {
      setError("Please enter a valid URL.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/api/create", {
        originalUrl: longUrl, 
      });

      setShortUrl(`http://localhost:3000/api/${response.data.data.shortUrl}`);
      setError(""); 
    } catch (error) {
      setError("Failed to create short URL. Please try again.");
      console.error(error);
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        border: "1px solid #1976D2",
        borderRadius: "8px",
        marginTop: "72px",
        p: 4,
        display: "inline-block",
        textAlign: "center",
        width: "40vw"
      }}
    >
      <Typography
        variant="h4"
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

      <Button
        variant="contained"
        type="submit"
        sx={{
          backgroundColor: "#1976D2",
          color: "#fff",
          borderRadius: "20px",
          padding: "8px 24px",
          textTransform: "none",
        }}
      >
        Create
      </Button>

      {error && (
        <Alert severity="error" sx={{ mt: 2 }}>
          {error}
        </Alert>
      )}

      {/* DISPLAY SHORT URL */}
      {shortUrl && (
        <Typography
          variant="h6"
          component="p"
          sx={{ mt: 2, color: "#1976D2", fontWeight: "bold" }}
        >
          Shortened URL:{" "}
          <a href={shortUrl} target="_blank" rel="noopener noreferrer">
            {shortUrl}
          </a>
        </Typography>
      )}
    </Box>
  );
}

export default ShortenerForm;
