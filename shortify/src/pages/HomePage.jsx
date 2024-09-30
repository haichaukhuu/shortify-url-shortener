// src/components/HomePage.jsx
import React from "react";
import { Container } from "@mui/material";
import ShortenerForm from "../components/ShortenerForm";

function HomePage () {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <ShortenerForm />
    </Container>
  );
};

export default HomePage;
