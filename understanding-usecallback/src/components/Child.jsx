import React from "react";

const Child = React.memo(({ handleIncrease, handleDecrease, handleReset }) => {
  return (
    <div>
      <button className="btn btn-primary" onClick={handleIncrease}>
        Increase button
      </button>
      <button className="btn btn-danger" onClick={handleDecrease}>
        Decrease button
      </button>
      <button className="btn btn-warning" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
});

export default Child;
