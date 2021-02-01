import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart"></Header>
      <div className="App_main row no-gutters">
        <div className="col-lg-8 col-12">
          <CartItems items={cartItems} setCartItems={setCartItems}></CartItems>
        </div>

        <div className="col-lg-4 col-12">
          <CartTotal items={cartItems}></CartTotal>
        </div>
      </div>
    </div>
  );
}

export default App;
