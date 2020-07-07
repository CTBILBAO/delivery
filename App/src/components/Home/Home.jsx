import React from "react";

import { SimpleSlider, Services, About, Contact } from "./HomeComponents";
import { Typography } from "@material-ui/core";

import styles from "./Home.module.scss";

const Home = () => {
  return (
    <div className={styles.container}>
      <Typography variant="h4">
        Bienvenidos a "Regalos Forever and Ever"
      </Typography>
      <Typography variant="body1">
        En Regalos Forever And Ever garantizamos que cada compra que realices
        sera un proceso seguro y sencillo, de principio a fin. Navega en nuestro
        Sitio Web selecciona el producto ideal y nosotros nos encargamos de
        hacerlo llegar.
      </Typography>
      <SimpleSlider />
      <About />
      <Services />
      <Contact />
    </div>
  );
};

export default Home;
