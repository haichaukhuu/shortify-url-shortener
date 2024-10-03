import React, { useState } from "react"
import { Box } from "@mui/material";
import LinkCard from "./LinkCard"; // Import the LinkCard component

function LinksList({ results }) {

  return (
    <Box
      sx={{
        background: 'white',
        marginTop: "80px",
        // padding: "20px",
        overflowY: "scroll",
        width: "50vw",
        height: "calc(100vh - 85px)",
      }}
    >

{results && results.length > 0 ? (
        results.map((result, index) => (
          <LinkCard
            key={index} 
            shortUrl={result.shortUrl} 
            longUrl={result.longUrl} 
            createdAt={result.createdAt} 
          />
        ))
      ) : (
        <Box
        sx={{
          marginTop: "72px",
          // padding: "20px",
          overflowY: "scroll",
          width: "50vw",
          height: "calc(100vh - 85px)",
        }}
      >
          No links available.
        </Box>
      )}

      {results && results.length > 0 ? (
        results.map((result, index) => (
          <LinkCard
            key={index} 
            shortUrl={result.shortUrl} 
            longUrl={result.longUrl} 
            createdAt={result.createdAt} 
          />
        ))
      ) : (
        <Box
        sx={{
          marginTop: "72px",
          // padding: "20px",
          overflowY: "scroll",
          width: "50vw",
          height: "calc(100vh - 72px)",
        }}
      >
          No links available.
        </Box>
      )}
    </Box>
  );
}

export default LinksList;
