import { Box, AppBar, Toolbar, Typography } from "@mui/material";
import React from 'react';

function Header() {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h4" component="h1" width="100%" align="center">
            Smart Bins
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
