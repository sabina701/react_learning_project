import React from "react";
import Clockheading from "./components/Clockheading";
import Clockslogan from "./components/Clockslogan";
import CurrentTime from "./components/CurrentTime";
import Healthyfood from "./components/Healthyfood";

const App = () => {
  return (
    <center>
      <Clockheading />
      <Clockslogan />
      <CurrentTime />
      <Healthyfood />
    </center>
  );
};

export default App;
