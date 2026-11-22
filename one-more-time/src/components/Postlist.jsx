import React, { useContext } from "react";
import Card from "./Card";
import { CardListContext } from "../store/card-list-store";
import WelcomeMessage from "./WelcomeMessage";

const Postlist = () => {
  const { cardList, addInitialItemAction } = useContext(CardListContext);
  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialItemAction(data.posts));
  };

  return (
    <div>
      {cardList.length === 0 && (
        <WelcomeMessage OnGetPostClick={handleGetPostClick} />
      )}
      {cardList.map((card) => (
        <Card card={card} key={card.id} />
      ))}
    </div>
  );
};

export default Postlist;
