import React, { useState } from "react";
import { Typography, Box, Button } from "@mui/material";

function LinkCard({ shortUrl, longUrl, createdAt }) {

  const formattedDate = new Date(createdAt).toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return (

    <Box
      sx={{
        border: "1px solid #ddd",
        padding: "16px",
        borderRadius: "8px",
        marginBottom: "16px",
        width: "100%",
        backgroundColor: "#f9f9f9",
      }}
    >

      <Typography
        variant="body1"
        sx={{ color: "blue", fontWeight: "bold"}}
      >
        Original URL
      </Typography>
      
      <Typography
        variant="body1"
        sx={{ color: "blue"}}
      > 
        <a href={longUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "blue", textDecoration: "underline" }}>
          {longUrl}
        </a>
      </Typography>


      <Typography
        variant="body1"
        sx={{ color: "blue", fontWeight: "bold"}}
      >
        Shortened URL
      </Typography>
      
      <Typography
        variant="body1"
        sx={{ color: "blue"}}
      > 
        <a href={shortUrl} target="_blank" rel="noopener noreferrer" sx={{ color: "blue", textDecoration: "underline" }}>
          {shortUrl}
        </a>
      </Typography>


      <Typography variant="body2" sx={{ marginTop: "4px", color: "grey" }}>
        Created On: {formattedDate}
      </Typography>

      {/* Buttons */}
      <Box>
        {/* Btn to copy shortened URL */}
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigator.clipboard.writeText(longUrl)}
          sx={{ marginTop: "16px" , marginRight: "8px" }}
        >
          Copy Original URL
        </Button>


        <Button
          variant="contained"
          color="primary"
          onClick={() => navigator.clipboard.writeText(shortUrl)}
          sx={{ marginTop: "16px" , marginRight: "8px" }}
        >
          Copy Shortened URL
        </Button>
      </Box>


    </Box>
  );
}

export default LinkCard;
