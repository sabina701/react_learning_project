import React, { useContext } from "react";
import Card from "./Card";
import { CardListContext } from "../store/post-list-store";

const PostList = () => {
  const { CardList } = useContext(CardListContext);
  return (
    <>
      {CardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </>
  );
};

export default PostList;
