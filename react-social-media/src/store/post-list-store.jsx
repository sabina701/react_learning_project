import { createContext, useReducer } from "react";

export const postListContext = createContext({
  cardList: [],
  addItems: () => {},
  addInitialItems: () => {},
  deleteItems: () => {},
});

const cardListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
  }
  if (action.type === "ADD_INITIAL_POST") {
    newList = action.payload.posts;
  }
  if (action.type === "DELETE") {
    newList = currentList.filter((list) => {
      return list.id !== action.payload.id;
    });
    console.log(action.payload.id);
  }
  return newList;
};

const PostListProvider = ({ children }) => {
  const [cardList, dispatchCardList] = useReducer(cardListReducer, []);
  const addItems = (id, title, body, tags, reactions) => {
    const addItemAction = {
      type: "ADD",
      payload: {
        id,
        title,
        body,
        tags,
        reactions,
      },
    };
    dispatchCardList(addItemAction);
  };
  const addInitialItems = (posts) => {
    const addItemAction = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatchCardList(addItemAction);
  };
  const deleteItems = (id) => {
    const deleteItemAction = {
      type: "DELETE",
      payload: {
        id,
      },
    };
    dispatchCardList(deleteItemAction);
  };

  return (
    <postListContext.Provider
      value={{ cardList, addInitialItems, addItems, deleteItems }}
    >
      {children}
    </postListContext.Provider>
  );
};
export default PostListProvider;
