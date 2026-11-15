import React, { useState } from "react";
import Heading from "./Components/Heading";
import AddToDo from "./Components/AddToDo";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import Container from "./Components/Container";
import WelcomeMessage from "./Components/WelcomeMessage";
import { TodoItemsContext } from "./store/todo-items-store";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const addNewItem = (todoName, DueDate) => {
    let newItems = [...todoItems, { name: todoName, dueDate: DueDate }];
    setTodoItems(newItems);
  };

  const deleteItem = (todoName) => {
    const newTodoDeleteItem = todoItems.filter(
      (itemName) => itemName.name != todoName,
    );

    setTodoItems(newTodoDeleteItem);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <Container>
        <div className="container">
          <Heading />
          <AddToDo />
          <WelcomeMessage />
          <TodoItem />
        </div>
      </Container>
    </TodoItemsContext.Provider>
  );
};

export default App;
