import React, { useContext } from "react";
import { Redirect } from "react-router-dom";

import { DataContext } from "../../context/DataContext";
import { LocationContext } from "../../context/UserLocation";
import Map from "../Map";

import Table from "@material-ui/core/Table";
import TableBody from '@material-ui/core/TableBody'
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

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
        <Typography variant="h4" className={styles.tableTitle}>
          Servicio de Delivery:
        </Typography>
        <TableContainer component={Paper} className={styles.tableContainer}>
          <Table>
            <TableBody>
            <TableRow>
              <TableCell>
                <strong>Destinatario:</strong>
              </TableCell>
              <TableCell>{data.person2 ? data.person2 : data.person}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Tienda:</strong>
              </TableCell>
              <TableCell>{data.store}</TableCell>
              <TableCell>
                <strong>Producto:</strong>
              </TableCell>
              <TableCell>{data.product}</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <strong>Responsable Entrega:</strong>
              </TableCell>
              <TableCell>Peter Parker</TableCell>
              <TableCell>
                <strong>Telefonos Referencia:</strong>
              </TableCell>
              <TableCell>77485691 / 4321477</TableCell>
            </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
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
