import React, { useContext } from "react";
import Card from "./Card";
import { postListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";

const PostList = () => {
  const { cardList, addInitialItems } = useContext(postListContext);

  const handleGetPostClick = () => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialItems(data.posts));
  };
  return (
    <div className="my-cards">
      {cardList.length === 0 && (
        <WelcomeMessage onGetPostClick={handleGetPostClick} />
      )}
      {cardList.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default PostList;
