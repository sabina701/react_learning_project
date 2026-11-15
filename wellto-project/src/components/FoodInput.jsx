import React from "react";

const FoodInput = ({ handleKeyDown }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Enter food items here"
        style={{ width: "700px", "text-align": "center" }}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};

export default FoodInput;
