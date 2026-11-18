import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";
import PostListProvider from "./store/post-list-store";

const App = () => {
  const [clickData, setClickData] = useState("Home");
  return (
    <PostListProvider>
      <div className="parent-container">
        <Header />

        <div className="mid-container">
          <Sidebar clickData={clickData} setClickData={setClickData} />

          {clickData === "Home" ? <PostList /> : <CreatePost />}
        </div>

        <Footer />
      </div>
    </PostListProvider>
  );
};

export default App;
