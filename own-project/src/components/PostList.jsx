import React, { useContext, useEffect } from "react";
import Card from "./Card";
import { CardContext } from "../store/card-list-store";

const PostList = () => {
  const { cardList, addInitialPost } = useContext(CardContext);
  useEffect(() => {
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => addInitialPost(data.posts));
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      {cardList.map((post) => (
        <Card post={post} key={post.id} />
      ))}
    </div>
  );
};

export default PostList;
