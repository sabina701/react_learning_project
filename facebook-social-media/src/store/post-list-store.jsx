import { createContext, useReducer } from "react";

const postListContext = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});
const postListReducer = (currPostList, action) => {
  let newPostList = currPostList;
  if (action.type === "DELETE") {
    newPostList = currPostList.filter(
      (list) => list.id !== action.payload.postid,
    );
    console.log(newPostList);
  } else if (action.type === "ADD") {
    newPostList = [action.payload, ...currPostList];
  }
  return newPostList;
};

const PostListContextProvider = ({ children }) => {
  const defaultItems = [
    {
      id: "1",
      title: "New York Trip",
      content: "It was so cozy must visit",

      hashtag: ["Vacation", "Roaming", "Travelling"],
      reaction: 23,
    },
    {
      id: "2",

      title: "Canada Trip",
      content: "The scenary was so beautiful",
      hashtag: ["Diploma", "Ethereal", "Travelling"],
      reaction: "1K",
    },
  ];
  const addPost = (id, title, content, reaction, hashtag) => {
    console.log(id, title, content, reaction, hashtag);
    const addItemAction = {
      type: "ADD",
      payload: {
        id: Date.now(),
        title: title,
        body: content,

        hashtag: hashtag.split(""),
        reactions: reaction,
      },
    };
    dispatchPostList(addItemAction);
  };
  const deletePost = (postid) => {
    const deleteItemAction = {
      type: "DELETE",
      payload: {
        postid,
      },
    };
    dispatchPostList(deleteItemAction);
  };

  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    defaultItems,
  );

  return (
    <postListContext.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </postListContext.Provider>
  );
};
export default PostListContextProvider;
