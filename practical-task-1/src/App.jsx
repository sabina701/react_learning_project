import React from "react";
import TodoItem from "./components/TodoItem";

const App = () => {
  const todoItems = [
    {
      id: 1,
      title: "Learning React Code",
    },
    {
      id: 2,
      title: "visiting to venice city",
    },
    {
      id: 3,
      title: "visiting to the Scotland",
    },
  ];

  const handleDelete = (id) => {
    todoItems.filter((item) => {
      return item.id !== id;
    });
  };
  return (
    <div>
      <h2>TodoItems App</h2>
      {todoItems.map((item) => (
        <TodoItem item={item} key={item.id} handleDelete={handleDelete} />
      ))}
    </div>
  );
};

export default App;
