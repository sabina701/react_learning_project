import React from "react";

const Loading = () => {
  return (
    <div className="text-center loading">
      <div
        className="spinner-border"
        role="status"
        style={{ height: "5rem", width: "5rem" }}
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
