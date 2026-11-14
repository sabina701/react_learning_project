import React from "react";
import Item from "./Item";

const TodoItem = ({ todoItems, onDeleteItem }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <Item
          name={item.name}
          dueDate={item.dueDate}
          onDeleteItem={onDeleteItem}
        />
      ))}
    </div>
  );
};

export default TodoItem;
