import Navbar from './NavBar/NavBar';
import React from 'react';
import './App.css';
import Place from './Place/Place';
import { Grid } from '@material-ui/core';
import places from './Assets/Places.json';
function App() {
  const myPlaces = places;
  return (
    <div className='App'>

      <Navbar></Navbar>
      <Grid 
      container 
      direction="row"
      spacing={10}>
      {myPlaces.map(value => (
          <Grid key={value.index} item xs={12} sm={6} md={4} >
            <Place placeDetails={value}></Place>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default App;
