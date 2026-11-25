import React from "react";
import useLike from "../hooks/useLike";

const PostOne = () => {
  const { count, handleLike, handleUnLike } = useLike();
  return (
    <div>
      <h2>count:{count}</h2>
      <button onClick={handleLike}>like</button>
      <button onClick={handleUnLike}>unlike</button>
    </div>
  );
};

export default PostOne;
