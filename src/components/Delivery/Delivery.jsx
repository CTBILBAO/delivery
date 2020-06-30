import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { DataContext } from "../../context/DataContext";
import { LocationContext } from "../../context/UserLocation";
import Map from "../Map";

import styles from "./Delivery.module.scss";
import { Typography } from "@material-ui/core";

const Delivery = () => {
  const { data } = useContext(DataContext);
  const { userLocation } = useContext(LocationContext);

  if (!data || !userLocation) return <Redirect to="/" />;

  return (
    <>
    <div className={styles.top}></div>
    <div className={styles.delivery}>
      <Typography>{data.store}</Typography>
      <Typography>{data.person}</Typography>
      {data && (
        <Map
          userLocation={userLocation}
          store={data.store}
          coords={data.storeLocation}
        />
      )}
    </div>
    </>
  );
};

export default Delivery;
