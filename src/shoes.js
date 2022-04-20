import React from "react";
import { useHistory } from "react-router-dom";

function Shoes(props) {
    let history = useHistory();

    return (
      <div onClick={()=>{
          history.push(`/detail/${props.data.id}`);}} className="col-md-4">
        <div className="shoes">
          <img src={props.image} alt=""/>
          <h4>{props.data.title}</h4>
          <div>{props.data.content}</div>
        </div>
      </div>
    );
  }

  export default Shoes;