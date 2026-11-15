import React from "react";

const ErrorMessage = ({ items }) => {
  return <div>{items.length === 0 && "I am hungry"}</div>;
};

export default ErrorMessage;
