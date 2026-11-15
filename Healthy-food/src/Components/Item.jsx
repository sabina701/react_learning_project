import React from "react";
import styles from "./Item.module.css";

const Item = ({ item, bought, handleBuyButton }) => {
  return (
    <ul className="list-group">
      <li class={`list-group-item ${styles["list"]} ${bought && "active"}`}>
        {item}

        <button
          type="button"
          className={`btn btn-success ${styles["btn-item"]}`}
          onClick={handleBuyButton}
        >
          {" "}
          Buy
        </button>
      </li>
    </ul>
  );
};

export default Item;
