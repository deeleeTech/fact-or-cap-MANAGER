import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


export default function Navigation() {
  return (
    <Box sx={{ height: '50px', backgroundColor: 'red' }}>
      <Grid container>
        <Grid item xs={12}>
            navigation
        </Grid>
      </Grid>
    </Box>
  );
}