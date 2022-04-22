import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import {stockContext} from "./App.js";
function Shoes(props) {
    let history = useHistory();
    let stock = useContext(stockContext);
    console.log(stock);
    return (
      <div onClick={()=>{
          history.push(`/detail/${props.data.id}`);}} className="col-md-4">
        <div className="shoes">
          <img src={props.image} alt=""/>
          <h4>{props.data.title}</h4>
          <div>{props.data.content}</div>
          <div>{stock[props.data.id]} items left in stock</div>
        </div>
      </div>
    );
  }

  export default Shoes;