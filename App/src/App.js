import React from "react";
import { BrowserRouter, Link } from "react-router-dom";

import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";

import { DataProvider } from "./context/DataContext";
import AppRoutes from "./routes";

import styles from "./App.module.scss";

function App() {
  return (
    <BrowserRouter>
      <DataProvider>
        <AppBar position="static" className={styles.AppBar}>
          <Toolbar>
            <Grid container alignItems="center" justify='center'>
              <Link to="/">
                <img src="logo.png" className={styles.logo} alt="logo" />
              </Link>
            </Grid>
            <div className={styles.menus}>
              <Link to="/products">
                <Button className={styles.login}>Productos</Button>
              </Link>
              <Button className={styles.login}>Login</Button>
            </div>
          </Toolbar>
        </AppBar>
        <AppRoutes />
      </DataProvider>
    </BrowserRouter>
  );
}

export default App;
