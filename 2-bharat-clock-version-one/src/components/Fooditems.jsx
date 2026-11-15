import React from "react";
import Item from "./Item";

const Fooditems = ({ arrayfooditem }) => {
  return (
    <ul className="list-group">
      {arrayfooditem.length === 0 && "I am Still hungry"}
      {arrayfooditem.map((item) => (
        <Item key={item} foodItem={item} />
      ))}
    </ul>
  );
};

export default Fooditems;
