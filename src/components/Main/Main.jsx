import React, { useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

import { LocationContext } from "../../context/UserLocation";
import MediaCard from "../Card";
import cardsParams from "../../data";

import styles from "./Main.module.scss";

const CardsView = () =>
  cardsParams.map((item) => (
    <Grid item xs={4} md={4} key={item.id}>
      <MediaCard
        id={item.id}
        title={item.title}
        description={item.description}
        path={item.path}
        price={item.price}
        store={item.store}
      />
    </Grid>
  ));

const Main = () => {
  const { changeData } = useContext(LocationContext);

  useEffect(() => {
    window.navigator.geolocation.getCurrentPosition(({ coords }) => {
      const location = {
        userLatitude: coords.latitude,
        userLongitude: coords.longitude,
      };
      changeData(location);
    });
  }, []);

  return (
    <div className={styles.container}>
      <Typography variant="h4" className={styles.title}>
        Bienvenido a tiendas virtuales "Forever"
      </Typography>
      <Typography variant="body1" className={styles.paragraph}>
        Por favor seleccione el producto que desea adquirir:
      </Typography>
      <Grid spacing={5} container direction="row" justify="center">
        <CardsView />
      </Grid>
    </div>
  );
};

export default Main;
