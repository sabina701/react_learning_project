import React from "react";
import styles from "./Item.module.css";

const Item = ({ name, dueDate, onDeleteItem }) => {
  return (
    <div className="container ">
      <div className={`row  ${styles["kg-margin"]} ${styles["kg-items"]}`}>
        <div className="col-4">{name}</div>
        <div className="col-4">{dueDate}</div>
        <div className="col-2">
          {" "}
          <button
            type="button"
            className={`btn btn-danger ${styles["kg-btn"]}`}
            onClick={() => onDeleteItem(name)}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
