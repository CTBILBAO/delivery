import React from "react";

import { SimpleSlider, About, Contact } from "./HomeComponents";
import { Typography } from "@material-ui/core";

import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">
        Bienvenidos a "Regalos Forever and Ever"
      </Typography>
      <Typography variant="body1">
        Regalos y mucho más, solo debe seleccionar el regalo ideal y nosotros
        nos encargamos de hacercelo llegar
      </Typography>
      <SimpleSlider />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
