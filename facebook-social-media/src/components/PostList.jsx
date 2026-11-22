import React from "react";
import Card from "./Card";
import { useContext } from "react";
import { postListContext } from "../store/post-list-store";

const PostList = () => {
  const { postList } = useContext(postListContext);
  return (
    <div>
      {postList.map((post) => (
        <Card post={post} />
      ))}
    </div>
  );
};

export default PostList;
