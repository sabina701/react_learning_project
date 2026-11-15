import React from "react";
import Fooditems from "./Fooditems";
import Errormessage from "./Errormessage";

const Healthyfood = () => {
  let foodItems = ["sabji", "Vegetables", "spinach", "pumpkin", "soyabean"];
  //   let foodItems = [];

  return (
    <React.Fragment>
      <h1 className="m-5">Healthy Food</h1>
      <Fooditems arrayfooditem={foodItems} />
      <Errormessage arrayfooditem={foodItems} />
    </React.Fragment>
  );
};

export default Healthyfood;
