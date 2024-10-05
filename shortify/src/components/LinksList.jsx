import React from "react";
import { Box, Container, useMediaQuery } from "@mui/material";
import LinkCard from "./LinkCard";

function LinksList({ results }) {
  const isSmallScreen = useMediaQuery("(max-width:800px)");

  const sortedResults = results && results.length > 0
    ? [...results].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    : [];

  return (

    <Container
      sx={{
        width: "50vw",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
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
    </Container>
  );
}

export default LinksList;
