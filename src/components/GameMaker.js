import React, { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'
//team arrays
import { NBAteams } from '../teamData/NBAteams';
import { NFLteams } from '../teamData/NFLteams';
import { TextField } from '@mui/material';

export default function GameMaker() {

  const customStyle = {
    'container': {
      padding: '10px',
      fontSize: '20px',
      height: '100%'
    },
    'headerStyle' : {
      paddingBottom: '20px'
    },
    'vsStyle' : {
      fontSize: '24px',
      fontWeight: '700',
      paddingTop: '15px'
    }
  }

  const [ sport, setSport ] = useState('NBA');
  const [ sportsTeams, setSportsTeams ] = useState(NBAteams)

  const [ gameID, setGameID ] = useState('');
  const [ homeTeamID, setHomeTeamID ] = useState('');
  const [ awayTeamID, setAwayTeamID ] = useState('');
  const [ homeTeamName, setHomeTeamName ] = useState('');
  const [ awayTeamName, setAwayTeamName ] = useState('');
  const gameStatus = 'upcoming'
  const [ gameStartDate, setGameStartDate ] = useState('')
  const [ gameStartTime, setGameStartTime ] = useState('');

  function getTeamID(teamFullName){
    let stager;
    let stagerID;
    if(sport == 'NBA') stager = NBAteams;
    if(sport == 'NFL') stager = NFLteams;
    stager.map((eachTeam)=>{
      if(eachTeam.teamName == teamFullName){
        stagerID = eachTeam.teamId;
      }
    })
    return stagerID;
  }

  const handleHomeChange = (event) => {
    setHomeTeamName(event.target.value);
    let homeID = getTeamID(event.target.value);
    setHomeTeamID(homeID);
  }
  const handleAwayChange = (event) => {
    setAwayTeamName(event.target.value);
    let awayID = getTeamID(event.target.value);
    setAwayTeamID(awayID)
  }
  const handleStartDateChange = (event) => {
    let dateStager = event.target.value;
    setGameStartDate(dateStager);
  }
  const handleStartTimeChange = (event) => {
    let timeStager = event.target.value;
    setGameStartTime(timeStager);
  }


  return (
    <Box sx={customStyle.container}>
      <Grid container>
        <Grid item xs={12} sx={customStyle.headerStyle}>fact or cap GAMEMAKER</Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={4}>
            <Select fullWidth labelId="away-team-select" id="away-team-select" value={awayTeamName} label="Away Team" onChange={handleAwayChange}>
              {sportsTeams.map((eachTeam)=>{
                return(
                  <MenuItem value={eachTeam.teamName}>{eachTeam.teamName}</MenuItem>
                )
              })}
            </Select>
        </Grid>
        <Grid item xs={2} sx={customStyle.vsStyle}>VS</Grid>
        <Grid item xs={4}>
            <Select fullWidth labelId="home-team-select" id="home-team-select" value={homeTeamName} label="Home Team" onChange={handleHomeChange}>
              {sportsTeams.map((eachTeam)=>{
                return(
                  <MenuItem value={eachTeam.teamName}>{eachTeam.teamName}</MenuItem>
                )
              })}
            </Select>
        </Grid>
        <Grid item xs={1}></Grid>

        <Grid item xs={12} sx={{ height: '20px' }}></Grid>

        <Grid item xs={1}></Grid>
        <Grid item xs={3}>
            <TextField fullWidth id="game-date" label="Game Date" variant="outlined" value={gameStartDate} onChange={handleStartDateChange}/>
        </Grid>
        <Grid item xs={1} sx={{ paddingTop: '15px' }}>(mm-dd-yy)</Grid>
        <Grid item xs={2}></Grid>
        <Grid item xs={3}>
            <TextField fullWidth id="game-time" label="Game Time" variant="outlined" value={gameStartTime} onChange={handleStartTimeChange}/>
        </Grid>
        <Grid item xs={1} sx={{ paddingTop: '15px' }}>(hh:mm)</Grid>
        <Grid item xs={1}></Grid>


      </Grid>
    </Box>
  );
}