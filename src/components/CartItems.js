import React from "react";
import CartItem from "./CartItem";
import "./CartItems.css";

function CartItems({ items, setCartItems }) {
  // For changing cart quantity👇👇👇
  const changeCartQuantity = (e, index) => {
    // When we select a quantity on item, we pass it in here
    console.log(e.target.value);
    // Pass in the index
    const newItems = [...items];
    newItems[index].quantity = e.target.value;
    setCartItems(newItems);
    // Using the index we need to change the quantity to the selected from the selected option
    // Update the items state
  };

  // For generating cart items👇👇👇
  const cartItemsList = items.map((item, index) => {
    // here the naz has used index as a key that is a bad practice. Inform this in slack
    return (
      <CartItem
        changeCartQuantity={changeCartQuantity}
        index={index}
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
