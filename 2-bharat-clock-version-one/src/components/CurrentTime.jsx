import React from "react";

const CurrentTime = () => {
  let time = new Date();
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
