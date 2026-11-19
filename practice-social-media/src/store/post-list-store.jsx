import { createContext, useReducer } from "react";

export const CardListContext = createContext({
  CardList: [],
  addItemAction: () => {},
  deleteItemAction: () => {},
});

const defaultItems = [
  {
    id: "1",
    title: "trip in london",
    content: "london view was so good ",
    Hashtag: ["swimming", "playing"],
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

const CardListProvider = ({ children }) => {
  const [CardList, dispatchCardList] = useReducer(
    cardListReducer,
    defaultItems,
  );

  const addItemAction = (id, title, content, Hashtag, reaction) => {
    const addItem = {
      type: "ADD",
      payload: {
        id,
        title,
        content,
        Hashtag,
        reaction,
      },
    };
    dispatchCardList(addItem);
  };
  const deleteItemAction = (id) => {
    const deleteItem = {
      type: "DELETE",
      payload: {
        id,
      },
    };
    dispatchCardList(deleteItem);
  };

  return (
    <CardListContext.Provider
      value={{ CardList, addItemAction, deleteItemAction }}
    >
      {children}
    </CardListContext.Provider>
  );
};
export default CardListProvider;
