import "./App.css";
import React from "react";
import Header from "./components/Header";
import CartItems from "./components/CartItems";
import CartTotal from "./components/CartTotal";
function App() {
  return (
    <div className="App">
      <Header title="Amazon Cart"></Header>
      <div className="App_main">
        <CartItems></CartItems>
        <CartTotal></CartTotal>
      </div>
    </div>
  );
}

export default App;
