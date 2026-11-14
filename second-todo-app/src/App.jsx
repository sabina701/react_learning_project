import React, { useState } from "react";
import Heading from "./Components/Heading";
import AddToDo from "./Components/AddToDo";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import Container from "./Components/Container";
import WelcomeMessage from "./Components/WelcomeMessage";

const App = () => {
  const [todoItems, setTodoItems] = useState([]);
  const handleNewItem = (todoName, DueDate) => {
    let newItems = [...todoItems, { name: todoName, dueDate: DueDate }];
    setTodoItems(newItems);
  };

  const handleDeleteItem = (todoName) => {
    const newTodoDeleteItem = todoItems.filter(
      (itemName) => itemName.name != todoName,
    );

    setTodoItems(newTodoDeleteItem);
  };

  return (
    <Container>
      <div className="container">
        <Heading />
        <AddToDo onNewItem={handleNewItem} />
        {todoItems.length <= 0 && <WelcomeMessage />}
        <TodoItem todoItems={todoItems} onDeleteItem={handleDeleteItem} />
      </div>
    </Container>
  );
};

export default App;
