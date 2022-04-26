import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {stockContext} from "./App.js";
function Shoes(props) {
    console.log(props.index);  
  //console.log(shoesState[props.index]);
    let shoesState = useSelector((state)=> state.shoes);
    let history = useHistory();
    let stock = useContext(stockContext);
    return (
      <div onClick={()=>{
          history.push(`/detail/${shoesState[props.index].id}`);}} className="col-md-4">
        <div className="shoes">
          <img src={`https://codingapple1.github.io/shop/shoes${
                  shoesState[props.index].id + 1
                }.jpg`} alt=""/>
          <h4>{shoesState[props.index].title}</h4>
          <div>{shoesState[props.index].content}</div>
          {/* <div>{shoesState[props.index].quantity} items left in stock</div> */}
        </div>
      </div>
    );
  }

  export default Shoes;