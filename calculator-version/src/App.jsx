import React from "react";
import Display from "./components/display";
import "./App.css";
import ButtonContainer from "./components/ButtonContainer";

const App = () => {
  return (
    <div className="parent-container">
      <div className="main-container">
        <Display />
        <ButtonContainer />
      </div>
    </div>
  );
};

export default App;
