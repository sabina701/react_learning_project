import React, { useCallback, useState } from "react";

const useLike = () => {
  const [likes, setLikes] = useState(0);
  const handleLike = useCallback(() => {
    setLikes((prev) => {
      if (prev >= 10) {
        return prev;
      }
      return prev + 1;
    });
  }, []);
  const handleunlike = useCallback(() => {
    setLikes((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }, []);
  return { likes, handleLike, handleunlike };
};

export default useLike;
