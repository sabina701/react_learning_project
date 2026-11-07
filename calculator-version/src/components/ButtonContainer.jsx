import React from "react";
import styles from "./ButtonContainer.module.css";
const ButtonContainer = () => {
  const buttons = [
    "c",
    "1",
    "2",
    "*",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "*",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={`${styles["btn-container"]}`}>
      {buttons.map((item) => (
        <button className={`${styles["child-btns"]}`}>{item}</button>
      ))}
    </div>
  );
};

export default ButtonContainer;
