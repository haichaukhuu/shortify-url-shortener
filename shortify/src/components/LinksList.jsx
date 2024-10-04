import React from "react";
import { Box } from "@mui/material";
import LinkCard from "./LinkCard";

function LinksList({ results }) {
  const sortedResults = results && results.length > 0
    ? [...results].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (
    <Box
      sx={{
        background: 'white',
        marginTop: "80px",
        width: "50vw",
        height: "calc(100vh - 85px)",
        overflowY: sortedResults.length > 0 ? "scroll" : "hidden", 
      }}
    >
      {sortedResults.length > 0 ? (
        sortedResults.map((result, index) => (
          <LinkCard
            key={index}
            shortUrl={result.shortUrl}
            longUrl={result.longUrl}
            createdAt={result.createdAt}
          />
        ))
      ) : (
        <Box>
        </Box>
      )}
    </Box>
  );
}

export default LinksList;
