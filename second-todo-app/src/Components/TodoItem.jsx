import React, { useContext } from "react";
import Item from "./Item";
import { TodoItemsContext } from "../store/todo-items-store";
const TodoItem = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    <div>
      {todoItems.map((item) => (
        <Item name={item.name} dueDate={item.dueDate} />
      ))}
    </div>
  );
};

export default TodoItem;
