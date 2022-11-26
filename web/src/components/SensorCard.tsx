import React from 'react';
import { Card, Typography, Box, Grid, useTheme } from "@mui/material";
import SensorsIcon from '@mui/icons-material/Sensors';
import { SensorRecord } from "../services/client";

type SensorCardProps = {
  record: SensorRecord
}

function SensorCard(props: SensorCardProps) {

  const theme = useTheme();
  const { sensor_id, location, volume } = props.record;


  return (
    <Card>
      <Box sx={{ padding: 2, borderRadius: '0.75rem' }}>
        <Grid container>
          <Grid item xs={4}>
            <Box sx={{
              width: '4rem',
              height: '4rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: theme.palette.primary.light,
              background: `linear-gradient(228deg, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
              borderRadius: '0.3rem'
            }}>
              <SensorsIcon sx={{ color: "white", fontSize: '2.5rem' }} />
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box sx={{ marginLeft: 2, textAlign: "right" }}>
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
