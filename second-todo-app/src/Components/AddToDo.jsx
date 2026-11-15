import React, { useContext, useRef, useState } from "react";
import styles from "./AddToDo.module.css";
import { TodoItemsContext } from "../store/todo-items-store";
const AddToDo = () => {
  const todoElement = useRef();
  const todoDueDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddButtonClicked = (e) => {
    e.preventDefault();
    const todoName = todoElement.current.value;
    const todoDate = todoDueDateElement.current.value;

    todoElement.current.value = "";
    todoDueDateElement.current.value = "";
    addNewItem(todoName, todoDate);
  };
  return (
    <div className="container text-center">
      <form className="row" onSubmit={handleAddButtonClicked}>
        <div class="col-4">
          <input type="text" ref={todoElement} placeholder="Enter Todo Here" />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDueDateElement} />
        </div>
        <div className={`col-2`}>
          <button className={`btn btn-success  ${styles["kgAdd"]}  `}>
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddToDo;
