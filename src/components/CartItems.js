import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items }) {
  console.log(items);
  const cartItemsList = items.map((item) => {
    console.log(item.image);

    // here the naz has used index as a key that is a bad practice. Inform this in slack
    return (
      <CartItem
        key={item.toString()}
        title={item.title}
        image={item.image}
        price={item.price}
        stock={item.stock}
      ></CartItem>
    );
  });
  return (
    <div className="cartItems">
      <h1>Shopping Cart</h1>
      <hr />
      {cartItemsList}
    </div>
  );
}

export default CartItems;
