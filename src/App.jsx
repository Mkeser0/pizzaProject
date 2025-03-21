import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

import Anasayfa from "./components/Anasayfa";
import SiparisOnayi from "./components/SiparisOnayi";
import SiparisFormu from "./components/Siparisformu";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <Anasayfa />
          </Route>
          <Route path="/siparisformu">
            <SiparisFormu />
          </Route>
          <Route path="/siparisonayi">
            <SiparisOnayi />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
