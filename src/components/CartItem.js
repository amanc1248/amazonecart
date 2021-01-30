import React from "react";
import "./CartItem.css";
function CartItem() {
  return (
    <div className="cartItem">
      <div className="cartItem-Image">
        <img
          src="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg"
          alt="amazonIpadPro"
        />
      </div>
      <div className="cartItem-info">
        <div className="info-title">
          <h2>Apple Ipad Pro</h2>
        </div>
        <div className="info-stock">In Stock</div>
        <div className="item-actions">
          <div className="item-quantity">
            <select name="" id="">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="item-delete">
            <button>Delete</button>
          </div>
        </div>
      </div>
      <div className="cartItem-price">$769.00</div>
    </div>
  );
}

export default CartItem;
