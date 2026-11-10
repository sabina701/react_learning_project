import React from "react";
import Item from "./Item";

const Items = () => {
  const items = [
    "Sabzi",
    "Green Vegetables",
    "Roti",
    "Salad",
    "Milk",
    "paneer",
  ];
  return (
    <div>
      {items.map((item) => (
        <Item key={item} item={item} />
      ))}
    </div>
  );
};

export default Items;
