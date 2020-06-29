import React from "react";
import { Route } from "react-router-dom";

import { UserLocationProvider } from "../context/UserLocation";
import Main from "../components/Main";
import SalesForm from "../components/SalesForm";
import Delivery from "../components/Delivery";

const AppRoutes = () => (
  <UserLocationProvider>
    <Route exact path="/producto/:id">
      <SalesForm />
    </Route>
    <Route exact path="/delivery">
      <Delivery />
    </Route>
    <Route exact path="/">
      <Main />
    </Route>
  </UserLocationProvider>
);

export default AppRoutes;
