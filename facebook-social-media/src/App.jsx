import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import "./App.css";
import Card from "./components/Card";
import Createpost from "./components/Createpost";
import { useState } from "react";
import PostListContextProvider from "./store/post-list-store";
import PostList from "./components/PostList";
const App = () => {
  const [selectData, setSelectData] = useState("Home");
  return (
    <PostListContextProvider>
      <div className="items-container">
        <Header />
        <div className="content-container">
          <div className="sidebar">
            <Sidebar selectData={selectData} setSelectData={setSelectData} />
          </div>
          {selectData === "Home" ? (
            <div className="card">
              <PostList />
            </div>
          ) : (
            <Createpost />
          )}
        </div>

        <Footer />
      </div>
    </PostListContextProvider>
  );
};

export default App;
