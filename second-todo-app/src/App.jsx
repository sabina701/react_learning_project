import React, { useReducer, useState } from "react";
import Heading from "./Components/Heading";
import AddToDo from "./Components/AddToDo";
import TodoItem from "./Components/TodoItem";
import "./App.css";
import Container from "./Components/Container";
import WelcomeMessage from "./Components/WelcomeMessage";
import TodoItemContextProvider from "./store/todo-items-store";

const App = () => {
  return (
    <TodoItemContextProvider>
      <Container>
        <div className="container">
          <Heading />
          <AddToDo />
          <WelcomeMessage />
          <TodoItem />
        </div>
      </Container>
    </TodoItemContextProvider>
  );
};

export default App;
