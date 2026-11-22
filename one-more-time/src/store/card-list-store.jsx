import { createContext, useReducer } from "react";

export const CardListContext = createContext({
  cardList: [],
  addItemAction: () => {},
  addInitialItemAction: () => {},
  deleteItemAction: () => {},
});

const defaultItems = [
  {
    id: "1",
    title: "Trip to Canada",
    body: "Canada has very cold weather",
    tags: ["travelling", "enjoying", "swimming"],
    reactions: { likes: 192, dislikes: 25 },
  },
];
const cardListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
  }

  if (action.type === "ADD_INITIAL_ITEM") {
    newList = [...action.payload.posts];
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

  const addItemAction = (id, title, body, tags, reactions) => {
    const addItems = {
      type: "ADD",
      payload: {
        id,
        title,
        body,
        tags,
        reactions,
      },
    };
    dispatchCardList(addItems);
  };
  const addInitialItemAction = (posts) => {
    const addInitialItems = {
      type: "ADD_INITIAL_ITEM",
      payload: {
        posts,
      },
    };
    dispatchCardList(addInitialItems);
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
      value={{
        cardList,
        addItemAction,
        deleteItemAction,
        addInitialItemAction,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};
export default CardListContextProvider;
