import React from "react";
import { Box, useMediaQuery } from "@mui/material";
import LinkCard from "./LinkCard";

function LinksList({ results }) {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const sortedResults = results && results.length > 0
    ? [...results].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (

    <Box
      sx={{
        background: 'white',
        width: "50vw",
        height: "calc(100vh - 85px)",
        display: 'flex',

        flexDirection: 'column',
        alignItems: 'center'
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
