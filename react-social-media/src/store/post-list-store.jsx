import { createContext, useReducer } from "react";

export const postListContext = createContext({
  cardList: [],
  addItems: () => {},
  deleteItems: () => {},
});
const defaultItems = [
  {
    id: "1",
    title: "Visiting to the europe",
    body: "It was so enjoyful",
    hashtags: ["dancing", "singing", "travelling"],
    reactions: "33",
  },
];

const cardListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
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
  const [cardList, dispatchCardList] = useReducer(
    cardListReducer,
    defaultItems,
  );
  const addItems = (id, title, body, hashtags, reactions) => {
    const addItemAction = {
      type: "ADD",
      payload: {
        id,
        title,
        body,
        hashtags,
        reactions,
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
    <postListContext.Provider value={{ cardList, addItems, deleteItems }}>
      {children}
    </postListContext.Provider>
  );
};
export default PostListProvider;
