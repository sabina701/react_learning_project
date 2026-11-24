import { createContext } from "react";
import { useReducer } from "react";
export const CardContext = createContext({
  cardList: [],
  addPost: () => {},
  addInitialPost: () => {},
  deletePost: () => {},
});

const cardListReducer = (currentList, action) => {
  let newList = currentList;

  if (action.type === "ADD") {
    newList = [action.payload, ...currentList];
  } else if (action.type === "DELETE_POST") {
    newList = currentList.filter((item) => {
      return item.id !== action.payload.id;
    });
  }
  return newList;
};

const CardContextProvider = ({ children }) => {
  const [cardList, dispatchCardList] = useReducer(cardListReducer, []);
  const addInitialPost = (posts) => {
    const addInitialItemAction = {
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      },
    };
    dispatchCardList(addInitialItemAction);
  };
  const addPost = (id, title, body, tags, reactions) => {
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

  const deletePost = (id) => {
    const deleteItemAction = {
      type: "DELETE_POST",
      payload: {
        id,
      },
    };
    dispatchCardList(deleteItemAction);
  };
  return (
    <CardContext.Provider
      value={{ cardList, addInitialPost, addPost, deletePost }}
    >
      {children}
    </CardContext.Provider>
  );
};

export default CardContextProvider;
