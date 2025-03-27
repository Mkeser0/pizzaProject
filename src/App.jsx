import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./components/HomePage";
import OrderConfirmation from "./components/OrderConfirmation";
import OrderForm from "./components/OrderForm";

const initialForm = {
  size: "",
  note: "",
  dough: "",
  adSoyad: "",
  name: "",
};

function App() {
  const [selectedMalzeme, setSelectedMalzeme] = useState([]);
  const [form, setForm] = useState(initialForm);
  const [totalPrice, setTotalPrice] = useState(75);

  function handleFormChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage handleFormChange={handleFormChange} />
          </Route>
          <Route path="/siparis-formu">
            <OrderForm
              setSelectedMalzeme={setSelectedMalzeme}
              selectedMalzeme={selectedMalzeme}
              form={form}
              setForm={setForm}
              totalPrice={totalPrice}
              setTotalPrice={setTotalPrice}
              handleFormChange={handleFormChange}
            />
          </Route>
          <Route path="/order-confirmation">
            <OrderConfirmation
              form={form}
              totalPrice={totalPrice}
              selectedMalzeme={selectedMalzeme}
            />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
