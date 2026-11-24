import { useCallback, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(10);

  const increase = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []);

  const decrease = useCallback(() => {
    setCount((prevCount) => prevCount - 1);
  }, []);

  const reset = useCallback(() => {
    setCount(10);
  }, []);

  return {
    count,
    increase,
    decrease,
    reset,
  };
};

export default useCounter;
