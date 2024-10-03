import * as React from "react";
// import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
// import { useState } from "react";
// import axios from "axios";


export default function NavBar() {

    return (
      <Box sx={{ flexGrow: 1, width: "100%" }}>
        <AppBar position="fixed">
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography
              variant="h4"
              noWrap
              component="div"
              sx={{ display: { xs: "none", sm: "block" }, fontWeight: "bold" }}
            >
              Shortify
            </Typography>
  
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  