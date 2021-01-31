import React from "react";
import "./CartTotal.css";
import data from "../Data";

function CartTotal({ items }) {
  // Here while calculating the total price why Naz has not converted the price which is in string into the integer
  var theTotalPrice = 0;
  const itemPrice = items.map((item) => {
    return (theTotalPrice += parseInt(item.price) * parseInt(item.quantity));
  });
  console.log(itemPrice);
  return (
    <div className="cartTotal">
      <h3>
        Subtotal({items.length} items)
        <span className="cart-total-price">${theTotalPrice}</span>
      </h3>
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default CartTotal;
