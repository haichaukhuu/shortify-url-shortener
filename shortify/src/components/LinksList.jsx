import React from "react";
import { Box } from "@mui/material";
import LinkCard from "./LinkCard";

function LinksList({ results }) {
  const hasResults = results && results.length > 0;

  return (
    <Box
      sx={{
        background: 'white',
        marginTop: "80px",
        width: "50vw",
        height: "calc(100vh - 85px)",
        overflowY: hasResults ? "scroll" : "hidden", 
      }}
    >
      {hasResults ? (
        results.map((result, index) => (
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
