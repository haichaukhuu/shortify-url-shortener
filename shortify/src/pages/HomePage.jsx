import React from "react";
import { Container, Grid2 } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";
import NavBar from "../components/NavBar";
import LinksList from "../components/LinksList";

function HomePage () {
  return (
    <Container maxWidth={false} maxHeight={false}>
        <NavBar />
        <Grid2 container spacing={2}>
            <Grid2 item xs={12} sm={3}>
            <ShortenerForm />
            </Grid2>
            

            <Grid2 item xs={12} sm={9}>
                <LinksList />
            </Grid2>
        </Grid2>
    </Container>
  );
};

export default HomePage;
