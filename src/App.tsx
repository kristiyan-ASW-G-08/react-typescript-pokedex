import React, { Component } from 'react';
import logo from './logo.svg';
import Theme from './Theme'
import Router from './components/Router/Router';
import Grid from './styled/Grid'
import './App.css';
const  App  = () => {
    return (
      <Theme>
        <Grid>
      <Router />
      </Grid>
      </Theme>
    );

}

export default App;
