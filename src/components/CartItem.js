import React from "react";
import "./CartItem.css";
function CartItem({
  title,
  stock,
  image,
  price,
  quantity,
  changeCartQuantity,
  index
}) {
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
            <select
              name=""
              id=""
              value={quantity}
              className="item-quantity-stock"
              onChange={(e) => {
                changeCartQuantity(e,index);
              }}
            >
              <option value="1">Qty: 1</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
              <option value="5">Qty: 5</option>
              <option value="2">Qty: 2</option>
              <option value="3">Qty: 3</option>
              <option value="4">Qty: 4</option>
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
