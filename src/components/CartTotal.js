import React from "react";
import "./CartTotal.css";
function CartTotal() {
  return (
    <div className="cartTotal">
      <h3>
        Subtotal(5 items)
        <span className="cart-total-price">$234.00</span>
      </h3>
      <button>Proceed To Checkout</button>
    </div>
  );
}

export default CartTotal;
