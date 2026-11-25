import React, { useCallback, useState } from "react";

const useLike = () => {
  const [count, setCount] = useState(0);
  const handleLike = useCallback(() => {
    setCount((prev) => {
      if (prev >= 10) {
        return prev;
      }
      return prev + 1;
    });
  }, []);
  const handleUnLike = useCallback(() => {
    setCount((prev) => {
      if (prev <= 0) {
        return prev;
      }
      return prev - 1;
    });
  }, []);
  return { count, handleLike, handleUnLike };
};

export default useLike;
