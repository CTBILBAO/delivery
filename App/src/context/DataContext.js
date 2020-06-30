import React, { useState } from "react";

const DataContext = React.createContext();
const { Provider, Consumer } = DataContext;

const DataProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const changeData = (value) => {
    setData(value);
  };

  const deleteData = () => {
    setData(null);
  };

  return (
    <Provider value={{ data, changeData, deleteData }}>{children}</Provider>
  );
};

export { DataProvider, Consumer as DataConsumer, DataContext };
