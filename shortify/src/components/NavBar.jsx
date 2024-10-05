import React from "react";
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
          >
            Shortify
          </Typography>

          <Button onClick={handleLoginClick} variant="outlined" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
