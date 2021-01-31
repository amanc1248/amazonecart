import React from "react";
import "./CartItem.css";
function CartItem({ title, stock, image, price, quantity }) {
  return (
    <div className="cartItem">
      <div className="cartItem-Image">
        <img
          src={process.env.PUBLIC_URL + "/items/" + image}
          alt="cartproduct"
        />
      </div>
      <div className="cartItem-info">
        <div className="info-title">
          <h2>{title}</h2>
        </div>
        <div className="info-stock">{stock}</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select name="" id="" className="item-quantity-stock">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="item-action-divider">|</div>
          <div className="item-delete">
            <button>Delete</button>
          </div>
        </div>
      </div>
      <div className="cartItem-price">${price}</div>
    </div>
  );
}

export default CartItem;
