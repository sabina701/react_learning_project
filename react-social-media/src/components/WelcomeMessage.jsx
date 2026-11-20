import React from "react";

const WelcomeMessage = ({ onGetPostClick }) => {
  return (
    <div>
      <h1>There are no posts</h1>
      <button className="btn btn-success" onClick={onGetPostClick}>
        get data from server
      </button>
    </div>
  );
};

export default WelcomeMessage;
