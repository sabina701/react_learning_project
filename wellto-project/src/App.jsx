import React from "react";
import FoodItem from "./components/FoodItem";
import Item from "./components/Item";
import FoodInput from "./components/FoodInput";
import { useState } from "react";
const App = () => {
  let [allItem, setAllItem] = useState(["paneer", "sabzi", "Green vegetables"]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItem = e.target.value;
      e.target.value = "";
      let resultitem = [...allItem, newFoodItem];
      setAllItem(resultitem);
    }
  };
  return (
    <div>
      <FoodInput handleKeyDown={handleKeyDown} />
      <FoodItem allItem={allItem} />
      <Item />
    </div>
  );
};

export default App;
