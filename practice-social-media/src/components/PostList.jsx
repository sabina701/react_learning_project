import React, { useContext, useEffect, useState } from "react";
import Card from "./Card";
import { CardListContext } from "../store/post-list-store";
import Welcomemessage from "./Welcomemessage";
import Loading from "./Loading";

const PostList = () => {
  const { CardList, addInitialItemAction } = useContext(CardListContext);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("https://dummyjson.com/posts")
      .then((res) => res.json())
      .then((data) => {
        addInitialItemAction(data.posts);
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <Loading />}
      {!loading && CardList.length === 0 && <Welcomemessage />}
      {!loading && CardList.map((card) => <Card key={card.id} card={card} />)}
    </>
  );
};

export default PostList;
