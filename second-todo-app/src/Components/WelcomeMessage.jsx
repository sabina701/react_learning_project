import React, { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

const WelcomeMessage = () => {
  const { todoItems } = useContext(TodoItemsContext);
  return (
    <div>
      {todoItems.length <= 0 && (
        <p
          style={{ textAlign: "center", fontSize: "30px", fontWeight: "bold" }}
        >
          Enjoy your day:)
        </p>
      )}
    </div>
  );
};

export default WelcomeMessage;
