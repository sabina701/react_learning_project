import React from "react";

const Healthyfood = () => {
  let foodItems = ["Dal", "Vegetables", "spinach", "pumpkin", "soyabean"];
  //   let foodItems = [];

  return (
    <React.Fragment>
      <h1 className="m-5">Healthy Food</h1>
      <ul className="list-group">
        {foodItems.length === 0 && "Nothing more"}
        {foodItems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
};

export default Healthyfood;
