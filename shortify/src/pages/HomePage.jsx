import React from "react";
import { Container, Grid2 } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";
import NavBar from "../components/NavBar";
import LinksList from "../components/LinksList";

function HomePage () {
  const results = [
    { shortUrl: "https://shortify/abc123", longUrl: "https://longURLexample.com", createdAt: "2024-10-03" },
    { shortUrl: "https://shortify/abc123", longUrl: "https://longURLexample.com", createdAt: "2024-10-03" },
    { shortUrl: "https://shortify/abc123", longUrl: "https://longURLexample.com", createdAt: "2024-10-03" },
    { shortUrl: "https://shortify/abc123", longUrl: "https://longURLexample.com", createdAt: "2024-10-03" },
    { shortUrl: "https://shortify/abc123", longUrl: "https://longURLexample.com", createdAt: "2024-10-03" },
  ];
  
  
  
  return (
    <Container maxWidth={false}  sx={{ background: 'white', width: '100vw'}}>
        <NavBar />
        <Grid2 container spacing={2} sx={{ background: 'white', height: 'calc(100vh)', width: '100%' }}>
            <Grid2 item xs={12} sm={6}>
                <ShortenerForm />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
                <LinksList results={results} />

            </Grid2>
        </Grid2>
    </Container>
  );
};

export default HomePage;
