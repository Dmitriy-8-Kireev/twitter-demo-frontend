import React, { Component } from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import EveryInteract from "./EveryInteract";

export default function App() {
  return (
    <BrowserRouter>
      <div>
        <Redirect from="/" to="/EveryInteract" />
        <Route path="/EveryInteract" exact component={EveryInteract} />
      </div>
    </BrowserRouter>
  );
}
