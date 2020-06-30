import React, { useContext, useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

import { LocationContext } from "../../context/UserLocation";
import MediaCard from "../Card";
import products from "../../data";

import styles from "./Main.module.scss";
import { useState } from "react";

const getByCategory = (category) => {
  return products.filter((item) => item.category === category);
};

const CardsView = ({ category }) => {
  if (category === 0)
    return products.map((item) => (
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

  const filteredProducts = getByCategory(category);

  return filteredProducts.map((item) => (
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
};

const Categories = ({ category, handleChange }) => (
  <div>
    <FormControl variant="filled" className={styles.select}>
      <InputLabel id="demo-simple-select-filled-label">Categoria</InputLabel>
      <Select
        labelId="demo-simple-select-filled-label"
        id="demo-simple-select-filled"
        value={category}
        onChange={handleChange}
      >
        <MenuItem value={0}>
          <em>Todos</em>
        </MenuItem>
        <MenuItem value={2}>Productos Adultos</MenuItem>
        <MenuItem value={3}>Productos Niños</MenuItem>
        <MenuItem value={1}>Los Más Vendidos</MenuItem>
      </Select>
    </FormControl>
  </div>
);

const Main = () => {
  const { changeData } = useContext(LocationContext);
  const [category, setCategory] = useState(0);

  const handleChange = ({ target: { value } }) => {
    setCategory(value);
  };

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
      <Grid container spacing={3}>
        <Grid container item xs={12} md={6} sm={6}>
          <Typography variant="h4" className={styles.title}>
            Lista de Productos
          </Typography>
        </Grid>
        <Grid
          container
          item
          xs={12}
          md={6}
          sm={6}
          alignItems="center"
          justify="flex-end"
        >
          <Categories category={category} handleChange={handleChange} />
        </Grid>
      </Grid>
      <Typography variant="body1" className={styles.paragraph}>
        Por favor seleccione el producto que desea adquirir:
      </Typography>
      <Grid spacing={5} container direction="row" justify="center">
        <CardsView category={category} />
      </Grid>
    </div>
  );
};

export default Main;
