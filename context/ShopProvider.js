import React from "react";
// import todoReducer from "../reducers/todoReducer";
// const initialTodos = JSON.parse(window.localStorage.getItem('todos') ||'[]')
import {SHOP_DATA} from '../src/store'

export const ShopContext = React.createContext();

export const ShopProvider = props => {
  // const [todos, dispatch] = React.useReducer(todoReducer, initialTodos);
  return (
    <ShopContext.Provider value={ SHOP_DATA }>
      {/* <DispatchContext.Provider value={dispatch }> */}
        {props.children}
      {/* </DispatchContext.Provider> */}
    </ShopContext.Provider>
  );
};
