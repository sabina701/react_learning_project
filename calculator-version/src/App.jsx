import React, { useState } from "react";
import Display from "./components/display";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";

const App = () => {
  let [calVal, setCalVal] = useState([""]);

  const handleClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText === "c") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      let addVal = calVal + buttonText;
      setCalVal(addVal);
    }
  };
  return (
    <div className="parent-container">
      <div className="main-container">
        <Display calVal={calVal} />
        <ButtonContainer handleClick={handleClick} />
      </div>
    </div>
  );
};

export default App;
