import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import {combineReducers, createStore} from "redux";
import shoesData from "./shoes-data";
import cartData from "./cart-data";


function shoesReducer(state = shoesData, action){
  if(action.type === 'addShoes'){
    let copy = [...state, ...action.payload.addedShoesData];
    return copy;
  }

  return state;
}

function cartReducer(state = cartData, action){
  if(action.type === 'addQuantity'){
    let copy = [...state];
    copy[0].quantity++;
    return copy;
  }else if(action.type === 'reduceQuantity'){
    let copy = [...state];
    copy[0].quantity--;
    if(copy[0].quantity < 0) copy[0].quantity = 0;
    return copy;
  }else{
    return state;
  }

}

let store = createStore(combineReducers({shoes: shoesReducer, cart: cartReducer}));
// let store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
