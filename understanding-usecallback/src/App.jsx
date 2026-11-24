import React from "react";
import useCounter from "./hooks/useCounter";
import useLike from "./hooks/useLike";

const App = () => {
  const { likes, handleLike, handleunlike } = useLike();

  return (
    <div>
      <h1>Count: {likes}</h1>

      <button onClick={handleLike}>Increase</button>

      <button onClick={handleunlike}>Decrease</button>
    </div>
  );
};

export default App;
