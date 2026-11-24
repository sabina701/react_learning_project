import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import CreatePost from "./components/CreatePost";
import PostList from "./components/PostList";
import CardContextProvider from "./store/card-list-store";
const App = () => {
  const [selectedTab, setSelectedTab] = useState("Home");
  return (
    <CardContextProvider>
      <div className="parent-container">
        <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
        <div className="child-container">
          {selectedTab === "Home" ? <PostList /> : <CreatePost />}
        </div>
      </div>
    </CardContextProvider>
  );
};

export default App;
