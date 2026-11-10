import React from "react";
import Container from "./Components/Container";
import Heading from "./Components/Heading";
import Items from "./Components/Items";
import Item from "./Components/Item";
const App = () => {
  return (
    <Container>
      <Heading />
      <Items />
      <Item />
    </Container>
  );
};

export default App;
