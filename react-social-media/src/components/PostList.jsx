import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { postListContext } from "../store/post-list-store";
import WelcomeMessage from "./WelcomeMessage";
import Loading from "./Loading";

const PostList = () => {
  const { cardList, addInitialItems } = useContext(postListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialItems(data.posts);
        setLoading(false);
      });
    return () => {
      console.log("lucky sabina");
      controller.abort();
    };
  }, []);

  return (
    <div className="my-cards">
      {loading && <Loading />}
      {!loading && cardList.length === 0 && <WelcomeMessage />}
      {!loading && cardList.map((card) => <Card key={card.id} card={card} />)}
    </div>
  );
};

export default PostList;
