import { Grid } from "@mui/material";
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import SensorCard from "../components/SensorCard";
import { SensorRecord, getLatestRecords, SERVER_URL } from "../services/client";
import { io } from "socket.io-client";

const socket = io(SERVER_URL)

function Home() {

  const [records, setRecords] = useState<SensorRecord[]>([]);
  const navigate = useNavigate();
  const recordsRef = useRef(records);

  function loadRecords() {
    getLatestRecords()
      .then(res => updateRecords(res.data))
      .catch(error => console.log(error));
  }

  function handleRedirect(sensorId: string) {
    navigate("/sensor", { state: { sensorId } });
  }

  function updateRecords(records: SensorRecord[]) {
    records.sort((a, b) => +a.sensor_id - +b.sensor_id);
    recordsRef.current = records;
    setRecords(recordsRef.current);
  }

  function updateRecord(record: SensorRecord) {
    const currentRecord = recordsRef.current.find((entry) =>
      entry.sensor_id === record.sensor_id);
      
    if (!currentRecord) {
      updateRecords([...recordsRef.current, record]);
      return;
    }

    const newRecords = recordsRef.current.map((entry) =>
      entry.sensor_id === record.sensor_id ? record : entry);
    updateRecords(newRecords);
  }

  useEffect(() => {
    loadRecords();
  }, []);

  useEffect(() => {
    socket.on('message', (record: SensorRecord) => {
      updateRecord(record);
    })

    return () => {
      socket.off('message');
    }
  }, []);

  return (
    <Grid container spacing={2}>
      {recordsRef.current.map((record) => (
        <Grid item xs={12} md={4} lg={3} key={record.sensor_id}>
          <SensorCard record={record} onClick={handleRedirect} />
        </Grid>
      ))}
    </Grid>
  );

}

export default Home;
