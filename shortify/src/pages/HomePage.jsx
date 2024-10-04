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
    <Container maxWidth={false} 
      sx={{ 
        width: '100vw',
        minHeight: '100vh',
        background: 'white' ,
        justifyContent: 'center'
      }}
    >
      <NavBar />
      
      <Grid2
        container
        spacing={2}
        sx={{
          background: 'white',
          display: 'flex',
          flexDirection: isSmallScreen ? 'column' : 'row',
          justifyContent: isSmallScreen ? 'center' : 'space-around',  
          alignItems: isSmallScreen ? 'center' : 'flex-start',  
          paddingTop: '75px',
        }}
      >
        <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <ShortenerForm addLink={addLink} />
        </Grid2>

        <Grid2 item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <LinksList results={results} />
        </Grid2>
      </Grid2>
    </Container>
  );
}

export default HomePage;
