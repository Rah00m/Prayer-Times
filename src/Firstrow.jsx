import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
export default function Firstrow({ nameCity ,today ,nextPrayeridx ,remainingTime}) {
  const prayersArray=[
    {
      key: "Fajr",
      name: "الفجر",
    },
    {
      key: "Dhuhr",
      name: "الظهر",
    },
    {
      key: "Asr",
      name: "العصر",
    },
    {
      key: "Sunset",
      name: "المغرب",
    },
    {
      key: "Isha",
      name: "العشاء",}
    ];
  return (
    <Box sx={{ margin: "20px auto", width: "80%" }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={6} sm={12} textAlign="center">
          <h2> {today }</h2>
          <h1>{nameCity}</h1>
        </Grid>
        <Grid item md={6} sm={12} textAlign="center">
        <h2>متبقي حتى صلاة {prayersArray[nextPrayeridx]?.name}</h2>
        <h1>{remainingTime}</h1>
        </Grid>
      </Grid>
    </Box>
  );
}
