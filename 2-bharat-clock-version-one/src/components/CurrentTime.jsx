import React, { useEffect, useState } from "react";

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    console.log("timing has started");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
      console.log("interval has ended");
    };
  }, []);

  return (
    <div>
      <p>
        This is the current time:{" "}
        <span>
          {time.toLocaleDateString()} - {time.toLocaleTimeString()}
        </span>
      </p>
    </div>
  );
};

export default CurrentTime;
