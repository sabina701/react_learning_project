import React, { useState } from "react";
import TodoItem from "./components/TodoItem";
import { useCallback } from "react";

const App = () => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Practice useCallback", completed: false },
    { id: 3, title: "Build a portfolio", completed: true },
  ]);

  const [newTodo, setNewTodo] = useState("");

  // Update input value
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };

  // Add new todo
  const handleAdd = () => {
    if (newTodo.trim() === "") return;

    const newTodoObject = {
      id: Date.now(),
      title: newTodo,
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodoObject]);

    setNewTodo("");
  };
  const handleDelete = useCallback((id) => {
    setTodos((prev) => prev.filter((item) => item.id !== id));
  }, []);
  const handleToggle = useCallback((id) => {
    setTodos((prevItem) =>
      prevItem.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      ),
    );
  }, []);

  const [filter, setFilter] = useState("Active");
  const filteredTodos = todos.filter((todo) => {
    if (filter === "Active") {
      return todo.completed === false;
    }

    if (filter === "Completed") {
      return todo.completed === true;
    }

    return true;
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your todo"
        value={newTodo}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>Add</button>

      {filteredTodos.map((item) => (
        <TodoItem
          item={item}
          key={item.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
        />
      ))}

      <button onClick={() => setFilter("All")}>All</button>
      <button onClick={() => setFilter("Active")}>Active</button>
      <button onClick={() => setFilter("Completed")}>Completed</button>
    </div>
  );
};

export default App;
