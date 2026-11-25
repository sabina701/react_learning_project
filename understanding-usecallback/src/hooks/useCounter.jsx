import React, { useCallback, useState } from "react";

const useCounter = () => {
  const [likes, setLikes] = useState(0);
  const handleIncrease = useCallback(() => {
    setLikes((prev) => {
      if (prev >= 10) {
        return prev;
      }
      return prev + 1;
    });
  }, []);
  const handleDecrease = useCallback(() => {
    setLikes((prev) => {
      if (prev <= 0) {
        return 0;
      }
      return prev - 1;
    });
  }, []);
  return { likes, handleIncrease, handleDecrease };
};

export default useCounter;
