import React, { act, useState } from "react";
import Item from "./Item";

const Items = ({ items }) => {
  let [activeItems, setActiveItems] = useState([]);

  const handleBuyButton = (e, item) => {
    let BuyActiveItem = [...activeItems, item];
    setActiveItems(BuyActiveItem);
  };
  return (
    <div>
      {items.map((item) => (
        <Item
          key={item}
          bought={activeItems.includes(item)}
          item={item}
          handleBuyButton={(e) => handleBuyButton(e, item)}
        />
      ))}
    </div>
  );
};

export default Items;
