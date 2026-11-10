import React from "react";
import styles from "./Item.module.css";

const Item = ({ item }) => {
  //   console.log(item);
  return (
    <ul class="list-group">
      <li class={`list-group-item ${styles["list"]}`}>
        {item}

        <button
          type="button"
          className={`btn btn-success ${styles["btn-item"]}`}
          onClick={() => {
            console.log(`${item} was bought`);
          }}
        >
          Buy
        </button>
      </li>
    </ul>
  );
};

export default Item;
