import { createContext, useReducer } from "react";

export const CardListContext = createContext({
  cardList: [],
  addItemAction: () => {},
  deleteItemAction: () => {},
});

const defaultItems = [
  {
    id: "1",
    title: "Trip to Canada",
    content: "Canada has very cold weather",
    hashtag: ["travelling", "enjoying", "swimming"],
    reaction: "33",
  },
];
const cardListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
  }
  if (action.type === "DELETE") {
    newList = currentList.filter((item) => {
      return item.id !== action.payload.id;
    });
  }
  return newList;
};
const CardListContextProvider = ({ children }) => {
  const [cardList, dispatchCardList] = useReducer(
    cardListReducer,
    defaultItems,
  );

  const addItemAction = (id, title, content, hashtag, reaction) => {
    const addItems = {
      type: "ADD",
      payload: {
        id,
        title,
        content,
        hashtag,
        reaction,
      },
    };
    dispatchCardList(addItems);
  };
  const deleteItemAction = (id) => {
    const deleteItems = {
      type: "DELETE",
      payload: {
        id,
      },
    };
    dispatchCardList(deleteItems);
  };
  return (
    <CardListContext.Provider
      value={{ cardList, addItemAction, deleteItemAction }}
    >
      {children}
    </CardListContext.Provider>
  );
};
export default CardListContextProvider;
