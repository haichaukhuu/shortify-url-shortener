import React from "react";
import {Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import NavBar from "./components/NavBar";

function App() {

  return (
    <Container maxWidth={false} maxHeight={false}
      sx={{ 
        width: '100vw',
        minHeight: '100vh',
        backgroundColor: 'white' ,
        justifyContent: 'center'
      }}
    >
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </Container>
  );
}

export default App;