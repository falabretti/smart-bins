import { Grid } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SensorCard from "../components/SensorCard";
import { SensorRecord, getLatestRecords } from "../services/client";

function Home() {

  const [records, setRecords] = useState<SensorRecord[]>([]);
  const navigate = useNavigate();

  function loadRecords() {
    getLatestRecords()
      .then(res => setRecords(res.data))
      .catch(error => console.log(error));
  }

  function handleRedirect(sensorId: string) {
    navigate("/sensor", { state: { sensorId } });
  }

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <Grid container spacing={2}>
      {records.map((record, key) => (
        <Grid item xs={12} md={4} lg={3} key={key}>
          <SensorCard record={record} onClick={handleRedirect}/>
        </Grid>
      ))}
    </Grid>
  );

}

export default Home;
