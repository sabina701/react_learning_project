import React from "react";

const WelcomeMessage = ({ OnGetPostClick }) => {
  return (
    <center className="mt-5 ms-5">
      <h1>There are no posts</h1>
      <button className="btn btn-primary" onClick={OnGetPostClick}>
        Get data from server
      </button>
    </center>
  );
};

export default WelcomeMessage;
