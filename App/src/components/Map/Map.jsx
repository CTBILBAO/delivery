import React, { useState } from "react";

import { Map, TileLayer } from "react-leaflet";

import RoutingMachine from "./RoutingMachine";
import styles from "./Map.module.scss";

const CustomMap = ({ userLocation, coords }) => {
  const [lmap, setLMap] = useState(null);
  const [userMarker, setUserMarker] = useState(null);

  const storeCoords = [coords.lat, coords.lng];

  const saveMap = (value) => {
    setLMap(value);
  };

  const addMarker = (e) => {
    console.log('onclick coordinates => ', e.latlng);
    setUserMarker(e.latlng);
    setLMap(null);
  };

  return (
    <Map center={storeCoords} zoom={14} className={styles.map} ref={saveMap} onclick={addMarker}>
      <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {userMarker && (
        <RoutingMachine
          map={lmap}
          coords={coords}
          userLocation={userMarker}
        />
      )}
    </Map>
  );
};

export default CustomMap;
