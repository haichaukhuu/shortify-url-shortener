import React from "react";
import { Container, Grid2 } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";
import NavBar from "../components/NavBar";
import LinksList from "../components/LinksList";

function HomePage () {
  return (
    <Container maxWidth={false}>
        <NavBar />
        <Grid2 container spacing={2} sx={{ height: 'calc(100vh - 72px)' }}>
            <Grid2 item xs={12} sm={6}>
                <ShortenerForm />
            </Grid2>

            <Grid2 item xs={12} sm={6}>
                <LinksList />
            </Grid2>
        </Grid2>
    </Container>
  );
};

export default HomePage;
