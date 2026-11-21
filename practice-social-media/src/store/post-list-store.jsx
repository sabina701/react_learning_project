import { createContext, useReducer } from "react";

export const CardListContext = createContext({
  CardList: [],
  addItemAction: () => {},
  addInitialItemAction: () => {},
  deleteItemAction: () => {},
});

const cardListReducer = (currentList, action) => {
  let newList = currentList;
  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
  }
  if (action.type === "ADD_INITIAL") {
    newList = action.payload.posts;
  }
  if (action.type === "DELETE") {
    newList = currentList.filter((item) => {
      return item.id !== action.payload.id;
    });
  }

  return newList;
};

const CardListProvider = ({ children }) => {
  const [CardList, dispatchCardList] = useReducer(cardListReducer, []);

  const addItemAction = (id, title, body, tags, reactions) => {
    const addItem = {
      type: "ADD",
      payload: {
        id,
        title,
        body,
        tags,
        reactions,
      },
    };
    dispatchCardList(addItem);
  };
  const addInitialItemAction = (posts) => {
    const addInitialItem = {
      type: "ADD_INITIAL",
      payload: {
        posts,
      },
    };
    dispatchCardList(addInitialItem);
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
      value={{
        CardList,
        addItemAction,
        deleteItemAction,
        addInitialItemAction,
      }}
    >
      {children}
    </CardListContext.Provider>
  );
};
export default CardListProvider;
