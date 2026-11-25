import React from "react";

const TodoItem = ({ item, handleDelete }) => {
  return (
    <div>
      <h2>{item.title}</h2>
      <button
        className="btn btn-danger"
        onClick={() => {
          handleDelete(item.id);
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
