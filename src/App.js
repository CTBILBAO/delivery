import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { DataProvider } from './context/DataContext';
import AppRoutes from "./routes";

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
      <AppBar position="static" className={styles.AppBar}>
        <Toolbar>
          <Grid container justify="center" alignItems="center">
            <Typography variant="h6">
              <Link to="/">
                <img src="logo.png" className={styles.logo} alt="logo" />
              </Link>
            </Typography>
          </Grid>
          <Button className={styles.login}>Login</Button>
        </Toolbar>
      </AppBar>
      <AppRoutes />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
