import React from "react";
import { Container } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";
import NavBar from "../components/NavBar";

function HomePage () {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <NavBar />
      <ShortenerForm />
    </Container>
  );
};

export default HomePage;
