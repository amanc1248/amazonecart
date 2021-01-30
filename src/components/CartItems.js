import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems() {
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <CartItem></CartItem>
    </div>
  );
}

export default CartItems;
