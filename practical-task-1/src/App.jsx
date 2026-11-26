// import React, { useCallback, useState } from "react";
// import TodoItem from "./components/TodoItem";

// const App = () => {
//   const [todos, setTodos] = useState([
//     { id: "1", title: "learning react course" },
//     { id: "2", title: "learning php course" },
//     { id: "3", title: "my success" },
//   ]);
//   const handleDelete = useCallback((id) => {
//     setTodos((prevtodo) => {
//       return prevtodo.filter((item) => item.id !== id);
//     });
//   }, []);
//   return (
//     <div>
//       {todos.map((item) => (
//         <TodoItem key={item.id} item={item} handleDelete={handleDelete} />
//       ))}
//     </div>
//   );
// };

// export default App;

/*=================================*/

import React, { useCallback, useState } from "react";

const App = () => {
  const [count, setCount] = useState(10);
  const handleIncrease = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);
  const handleDecrease = useCallback(() => {
    setCount((prevCount) => {
      if (prevCount <= 0) {
        return 0;
      }
      return prevCount - 1;
    });
  }, []);
  return (
    <div>
      <h1>count:{count}</h1>
      <button className="btn btn-primary" onClick={handleIncrease}>
        Increase
      </button>
      <button className="btn btn-info" onClick={handleDecrease}>
        Decrease
      </button>
    </div>
  );
};

export default App;
