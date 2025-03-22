import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderForm from "./components/OrderForm";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/siparis-formu">
            <OrderForm />
          </Route>
          <Route path="/order-confirmation">
            <OrderConfirmation />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
