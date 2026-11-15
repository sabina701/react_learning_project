import React from "react";
import styles from "./Foodinput.module.css";

const FoodInput = ({ handleOnKeyDown }) => {
  //   console.log("FoodInput component rendered");
  //   const handleInputChange = (event) => {
  //     console.log("Input changed:", event.target.value);
  //   };

  return (
    <input
      type="text"
      placeholder="Enter food items here"
      className={styles["food-input"]}
      onKeyDown={handleOnKeyDown}
    />
  );
};

export default FoodInput;
