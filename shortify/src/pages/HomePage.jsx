import React, { useState } from "react";
import { Container, Grid2, useMediaQuery } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";
import NavBar from "../components/NavBar";
import LinksList from "../components/LinksList";

function HomePage() {
  const [results, setResults] = useState([]);
  
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  const addLink = (shortUrl, longUrl, createdAt) => {
    setResults((prevResults) => [
      ...prevResults,
      { shortUrl, longUrl, createdAt },
    ]);
  };

  return (
    
      <Grid2
        container
        spacing={2}
        sx={{
          paddingTop: '80px',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          alignItem: isSmallScreen ? 'center' : 'flex-start',  
          justifyContent: 'space-around',  
        }}
      >
        <Grid2 item xs={12} md={6}>
          <ShortenerForm addLink={addLink} />
        </Grid2>

        <Grid2 item xs={12} md={6}>
          <LinksList results={results} />
        </Grid2>
      </Grid2>
  );
}

export default HomePage;