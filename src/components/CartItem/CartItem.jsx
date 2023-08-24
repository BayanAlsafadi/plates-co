import React from "react";

const CartItem = ({ item, addItem, removeItem }) => {
  return (
    <tr>
      <td>
        <img src={item.src} />
      </td>
      <td>
        <p>{item.name}</p>
      </td>
      <td>
        <p>${item.price}</p>
      </td>
      <td>
        <div>
          <button
            className="remove-btn action-button"
            onClick={() => {
              removeItem(item.code);
            }}
            disabled={!item.quantity}
          >
            -
          </button>
          <span>{item.quantity}</span>
          <button
            className="add-btn action-button"
            onClick={() => {
              addItem(item.code);
            }}
          >
            +
          </button>
        </div>
      </td>
      <td>
        <p>${item.total}</p>
      </td>
    </tr>
  );
};

export default CartItem;
