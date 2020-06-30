import React, { useState } from "react";

import { Map, TileLayer } from "react-leaflet";

import RoutingMachine from "./RoutingMachine";
import styles from "./Map.module.scss";

const CustomMap = ({ userLocation, store, coords }) => {
  const [lmap, setLMap] = useState(null);
  const storeCoords = [coords.lat, coords.lng];

  const saveMap = (value) => {
    setLMap(value);
  };

  return (
    <Map center={storeCoords} zoom={14} className={styles.map} ref={saveMap}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {lmap && (
        <RoutingMachine
          map={lmap}
          coords={coords}
          userLocation={userLocation}
        />
      )}
    </Map>
  );
};

export default CustomMap;
