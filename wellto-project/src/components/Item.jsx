import React from "react";

const Item = ({ item, bought, handleClick }) => {
  return (
    <div>
      <ul class="list-group">
        <li className={`list-group-item ${bought && "active"}`}>
          {item}
          <button
            className="text-success"
            style={{ float: "right" }}
            onClick={handleClick}
          >
            Buy
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Item;
