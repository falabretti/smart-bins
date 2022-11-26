import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from 'react';
import Header from "./Header";
import SensorCard from "./SensorCard";
import { getLatestRecords, SensorRecord } from "../services/client";

function App() {

  const [records, setRecords] = useState<SensorRecord[]>([]);

  function loadRecords() {
    getLatestRecords()
      .then(res => setRecords(res.data))
      .catch(error => console.log(error));
  }

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <>
      <CssBaseline />
      <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Header />
        <Box sx={{ padding: 4, backgroundColor: "#F0F2F5", flexGrow: 1 }}>
          <Grid container spacing={2}>
            {records.map((record, key) => (
              <Grid item xs={12} md={4} lg={3} key={key}>
                <SensorCard record={record} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  );
}

export default App;
