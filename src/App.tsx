import React from "react";
import Theme from "Theme";
import Router from "components/Router/Router";
import Grid from "styled/Grid";
import "./App.css";
const App = () => {
  return (
    <Theme>
      <Grid>
        <Router />
      </Grid>
    </Theme>
  );
};

export default App;
