import React from 'react';
import { Card, Typography, Box, Grid, useTheme } from "@mui/material";
import SensorsIcon from '@mui/icons-material/Sensors';
import { SensorRecord } from "../services/client";

type SensorCardProps = {
  record: SensorRecord,
  onClick?: (sensorId: string) => void
}

function SensorCard(props: SensorCardProps) {

  const theme = useTheme();
  const { onClick } = props;
  const { sensor_id, location, volume } = props.record;

  var alertColorStart = theme.palette.success.light;
  var alertColorEnd = theme.palette.success.main;

  if (volume >= 0.7) {
    alertColorStart = theme.palette.error.light;
    alertColorEnd = theme.palette.error.main;
  } else if (volume >= 0.5) {
    alertColorStart = theme.palette.warning.light;
    alertColorEnd = theme.palette.warning.main;
  }

  return (
    <Card sx={onClick && { cursor: "pointer" }} onClick={onClick && (() => onClick(sensor_id))}>
      <Box sx={{ padding: 2, borderRadius: '0.75rem' }}>
        <Grid container>
          <Grid item xs={4}>
            <Box sx={{
              width: '4rem',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: `linear-gradient(228deg, ${alertColorStart}, ${alertColorEnd})`,
              borderRadius: '0.3rem'
            }}>
              <SensorsIcon sx={{ color: "white", fontSize: '2.5rem' }} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ marginLeft: 2, textAlign: "right", overflow: "hidden", whiteSpace: "nowrap" }}>
              <Typography variant="subtitle1">
                Sensor {sensor_id}, {location}
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                {Math.trunc(volume * 100)}%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default SensorCard;
