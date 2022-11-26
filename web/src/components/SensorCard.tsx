import React from 'react';
import { Card, CardContent, Typography, CardActions, Button, Box, Grid, useTheme } from "@mui/material";
import SensorsIcon from '@mui/icons-material/Sensors';


function SensorCard() {

  const theme = useTheme();


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
                Sensor ID, Location
              </Typography>
              <Typography variant="h5" fontWeight={700}>
                70%
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Card>
  );
}

export default SensorCard;
