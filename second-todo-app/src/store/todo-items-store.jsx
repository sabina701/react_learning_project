import { createContext } from "react";
import { useReducer } from "react";
export const TodoItemsContext = createContext([]);
const todoItemsReducer = (currTodoItems, action) => {
  let newTodoItems = currTodoItems;
  if (action.type === "ADD_ITEM") {
    newTodoItems = [
      ...currTodoItems,
      { name: action.payload.todoName, dueDate: action.payload.DueDate },
    ];
  } else if (action.type === "DELETE_ITEM") {
    newTodoItems = currTodoItems.filter(
      (itemName) => itemName.name != action.payload.todoName,
    );
  }
  return newTodoItems;
};

const TodoItemContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemsReducer, []);
  const addNewItem = (todoName, DueDate) => {
    const newItemAction = {
      type: "ADD_ITEM",
      payload: {
        todoName,
        DueDate,
      },
    };
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoName,
      },
    };
    dispatchTodoItems(deleteItemAction);
  };
  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      {children}
    </TodoItemsContext.Provider>
  );
};

export default TodoItemContextProvider;
