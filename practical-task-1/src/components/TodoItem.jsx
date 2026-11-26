import React from "react";

const TodoItem = React.memo(({ item, handleDelete }) => {
  console.log("todo rendered");
  return (
    <div>
      <p>{item.title}</p>
      <div className="btn btn-danger" onClick={() => handleDelete(item.id)}>
        Delete
      </div>
    </div>
  );
});

export default TodoItem;
