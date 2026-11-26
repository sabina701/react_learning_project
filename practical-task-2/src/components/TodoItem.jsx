import React from "react";

const TodoItem = React.memo(({ item, handleDelete, handleToggle }) => {
  console.log("TodoItem rendered:", item.title);
  return (
    <div>
      <div key={item.id} className="d-flex ms-3 mt-3">
        <p>{item.title}</p>
        <p className="ms-3">{item.completed ? "Completed" : "Pending"}</p>
        <button
          className="btn btn-danger ms-4"
          onClick={() => handleDelete(item.id)}
        >
          Delete
        </button>
        <button
          className="btn btn-warning ms-4"
          onClick={() => handleToggle(item.id)}
        >
          Toggle Status
        </button>
      </div>
    </div>
  );
});

export default TodoItem;
