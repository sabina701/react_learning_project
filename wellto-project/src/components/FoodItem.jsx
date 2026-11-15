import React from "react";
import { useState } from "react";
import Item from "./Item";

const FoodItem = ({ allItem }) => {
  let [activeItems, setActiveItems] = useState([]);
  const handleClick = (e, item) => {
    let newItem = [...activeItems, item];
    setActiveItems(newItem);
  };
  return (
    <>
      {allItem.map((item) => (
        <Item
          key={item}
          item={item}
          bought={activeItems.includes(item)}
          handleClick={(e) => handleClick(e, item)}
        />
      ))}
    </>
  );
};

export default FoodItem;
