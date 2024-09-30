import React from "react";
import { Container, Box, Typography, TextField, Button } from "@mui/material";

function App() {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
      <Box
        sx={{
          border: "1px solid #1976D2",
          borderRadius: "8px",
          p: 4,
          display: "inline-block",
          textAlign: "center",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          sx={{ mb: 2, color: "#1976D2", fontWeight: "bold" }}
        >
          Url shortener
        </Typography>

        <TextField
          fullWidth
          variant="outlined"
          placeholder="Enter long link..."
          sx={{
            mb: 2,
            backgroundColor: "#E0E0E0",
            borderRadius: "20px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "20px",
            },
          }}
        />

        <Button
          variant="contained"
          sx={{
            backgroundColor: "#1976D2",
            color: "#fff",
            borderRadius: "20px",
            padding: "8px 24px",
            textTransform: "none",
          }}
        >
          create
        </Button>
      </Box>
    </Container>
  );
}

export default App;
