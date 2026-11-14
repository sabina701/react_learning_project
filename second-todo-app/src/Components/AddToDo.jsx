import React, { useState } from "react";
import styles from "./AddToDo.module.css";
const AddToDo = ({ onNewItem }) => {
  const [todoName, setTodoName] = useState();
  const [todoDate, setTodoDate] = useState();
  const handleTodoName = (e) => {
    setTodoName(e.target.value);
  };
  const handleTodoDate = (e) => {
    setTodoDate(e.target.value);
  };
  return (
    <div className="container text-center">
      <div className="row">
        <div class="col-4">
          <input
            type="text"
            placeholder="Enter Todo Here"
            onChange={handleTodoName}
          />
        </div>
        <div className="col-4">
          <input type="date" onChange={handleTodoDate} />
        </div>
        <div className={`col-2`}>
          <button
            type="button"
            className={`btn btn-success  ${styles["kgAdd"]}  `}
            onClick={() => onNewItem(todoName, todoDate)}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddToDo;
