import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

export default function Firstrow({ nameCity }) {
  return (
    <Box sx={{ margin: "20px auto", width: "80%" }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item md={6} sm={12} textAlign="center">
          <h2>التاريخ والوقت</h2>
          <h1>{nameCity}</h1>
        </Grid>
        <Grid item md={6} sm={12} textAlign="center">
          <h2>متبقي حتى الصلاة</h2>
          <h1>الوقت</h1>
        </Grid>
      </Grid>
    </Box>
  );
}
