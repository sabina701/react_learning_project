import React, { useContext } from "react";
import Card from "./Card";
import { postListContext } from "../store/post-list-store";

const PostList = () => {
  const { cardList } = useContext(postListContext);
  console.log(cardList);
  return (
    <div className="my-cards">
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default PostList;
