import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import React from 'react';
import Header from "./Header";
import SensorCard from "./SensorCard";

function App() {
  return (
    <>
      <CssBaseline />
      <Header />
      <Box sx={{ padding: 4 }}>
        <Grid container spacing={2}>
          <Grid item sm={12} md={4}>
            <SensorCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <SensorCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <SensorCard />
          </Grid>
          <Grid item sm={12} md={4}>
            <SensorCard />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default App;
