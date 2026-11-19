import React, { useState } from "react";
import PostList from "./components/PostList";
import Sidebar from "./components/Sidebar";
import "./App.css";

import CreatePost from "./components/CreatePost";
import CardListProvider, { CardListContext } from "./store/post-list-store";

const App = () => {
  const [items, setItems] = useState("Home");
  return (
    <CardListProvider>
      <div className="parent-container">
        <Sidebar items={items} setItems={setItems} />
        <div className="child-container">
          {items === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </CardListProvider>
  );
};

export default App;
