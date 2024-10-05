import React, { useEffect, useState } from "react";
import { AppBar, Box, Toolbar, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
      // Assuming the token contains the user email or you can fetch it from API
      const userEmailFromToken = localStorage.getItem('userEmail'); // Get email from local storage
      setUserEmail(userEmailFromToken);
    }
  }, []);

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail'); // Remove user email on logout
    setIsLoggedIn(false);
    setUserEmail(''); // Reset user email
    navigate('/');
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold", cursor: "pointer" }}
            onClick={() => navigate('/')}
          >
            Shortify
          </Typography>

          {/* {isLoggedIn ? (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body1" sx={{ marginRight: 2 }}>
                {userEmail}
              </Typography>
              <Button onClick={handleLogout} variant="outlined" color="inherit">
                Logout
              </Button>
            </Box>
          ) : (
            <Button onClick={handleLoginClick} variant="outlined" color="inherit">
              Login
            </Button>
          )} */}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
