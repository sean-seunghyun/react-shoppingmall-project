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
    let index = copy.findIndex(item => item.id === action.payload.id);
    copy[index].quantity++;
    return copy;
  }else if(action.type === 'reduceQuantity'){
    let copy = [...state];
    let index = copy.findIndex(item => item.id === action.payload.id);
    copy[index].quantity--;
    if(copy[index].quantity < 0) copy[index].quantity = 0;
    return copy;
  }else if(action.type === 'moveToCart'){
    let copy = [...state];
    let index = copy.findIndex(item => item.id === action.payload.orderItem.id);
    if(index === -1){
      action.payload.orderItem.quantity = 1;
      copy.push(action.payload.orderItem);
    }else{
      copy[index].quantity++;
    }
    return copy;
  }
  else{
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
