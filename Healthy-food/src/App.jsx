import React, { useState } from "react";
import Container from "./Components/Container";
import Heading from "./Components/Heading";
import Items from "./Components/Items";
import Item from "./Components/Item";
import FoodInput from "./Components/Foodinput";
import ErrorMessage from "./Components/ErrorMessage";
const App = () => {
  let [firstText, secondText] = useState("food items entered by user");
  let [items, setItems] = useState(["paneer", "sabji"]);

  const handleOnKeyDown = (e) => {
    if (e.key === "Enter") {
      let newFoodItems = e.target.value;
      e.target.value = "";
      let itemed = [...items, newFoodItems];
      setItems(itemed);
    }
  };

  return (
    <Container>
      <Heading />
      <FoodInput handleOnKeyDown={handleOnKeyDown} />
      <ErrorMessage items={items} />
      <Items items={items} />
      <Item items={items} />
    </Container>
  );
};

export default App;
