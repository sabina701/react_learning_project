import React from "react";
import styles from "./item.module.css";

const Item = ({ foodItem }) => {
  return (
    <div className={`${styles.kgItem}`}>
      <li key={foodItem} className={styles["kgSpan"]}>
        {foodItem}
      </li>
    </div>
  );
};

export default Item;
