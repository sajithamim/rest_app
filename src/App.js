import React from 'react';
import './App.css';
import Restaurants from "./components/Restaurants";
import Details from "./components/Details";
import { Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route name="details" path="/details/:id" component={Details} />
      </Switch>
    </>
  );
}

export default App;
