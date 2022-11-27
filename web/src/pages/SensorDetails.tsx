import { Box, Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography, useTheme } from "@mui/material";
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import { getSensorRecords, SensorRecord } from "../services/client";

type LocationState = {
  sensorId: string;
}

function SensorDetails(props: any) {

  const { state } = useLocation();
  const { sensorId } = state as LocationState;
  const [records, setRecords] = useState<SensorRecord[]>([]);
  const theme = useTheme();
  const navigate = useNavigate();

  function loadRecords() {
    getSensorRecords(sensorId)
      .then(res => setRecords(res.data))
      .catch(error => console.log(error));
  }

  function returnHome() {
    navigate("/");
  }

  useEffect(() => {
    loadRecords();
  }, []);

  return (
    <>
      <Button variant="contained" sx={{ mb: 2 }} onClick={returnHome}>Back</Button>
      <TableContainer component={Paper}>
        <Toolbar sx={{ [theme.breakpoints.up('xs')]: { pl: 2 } }}>
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 700 }}>Sensor {sensorId} History</Typography>
            <Typography variant="subtitle2">Last 100 events</Typography>
          </Box>
        </Toolbar>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }}>Sensor Id</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">Location</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">Timestamp</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">Volume</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {records.map((record, key) => (
              <TableRow key={key}>
                <TableCell>{record.sensor_id}</TableCell>
                <TableCell align="center">{record.location}</TableCell>
                <TableCell align="center">{new Date(record.timestamp).toLocaleString()}</TableCell>
                <TableCell align="center">{Math.trunc(record.volume * 100)}%</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default SensorDetails;
