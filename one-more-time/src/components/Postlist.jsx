import React, { useContext } from "react";
import Card from "./Card";
import { CardListContext } from "../store/card-list-store";

const Postlist = () => {
  const { cardList } = useContext(CardListContext);

  return (
    <div>
      {cardList.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Postlist;
