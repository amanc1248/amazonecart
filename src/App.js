import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
import data from "./Data";
function App() {
  const [cartItems, setCartItems] = useState(data);

  return (
    <div className="App">
      <Header title="Amazon Cart"></Header>
      <div className="App_main">
        <CartItems items={cartItems}></CartItems>
        <CartTotal items={cartItems}></CartTotal>
      </div>
    </div>
  );
}

export default App;
