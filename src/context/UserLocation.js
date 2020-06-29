import React, { useState } from "react";

const LocationContext = React.createContext();
const { Provider, Consumer } = LocationContext;

const UserLocationProvider = ({ children }) => {
  const [userLocation, setUserLocation] = useState(null);
  const changeData = (value) => {
    setUserLocation(value);
  };

  const deleteData = () => {
    setUserLocation(null);
  };

  return (
    <Provider value={{ userLocation, changeData, deleteData }}>
      {children}
    </Provider>
  );
};

export { UserLocationProvider, Consumer as DataConsumer, LocationContext };
