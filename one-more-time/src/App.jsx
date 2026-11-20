import React, { useContext, useState } from "react";
import Sidebar from "./components/Sidebar";
import Postlist from "./components/Postlist";
import CreatePost from "./components/CreatePost";
import "./App.css";
import CardListContextProvider from "./store/card-list-store";
const App = () => {
  const [postList, setPostList] = useState("Home");
  return (
    <CardListContextProvider>
      <div className="parent-container">
        <Sidebar postList={postList} setPostList={setPostList} />
        <div className="child-container">
          {postList === "Home" ? <Postlist /> : <CreatePost />}
        </div>
      </div>
    </CardListContextProvider>
  );
};

export default App;
