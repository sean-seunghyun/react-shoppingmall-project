import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./Detail.scss";

function Detail(props) {
  let history = useHistory();
  let [alertBox, setAlertBox] = useState(true);
  let { id } = useParams();

  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setAlertBox(false);
    }, 2000);

    return () => {
      console.log("will be closed");
    };
  });

  return (
    <div className="container">
      {
        alertBox 
        ?<div className="box-alert">
          <h4>상품이 몇개 남지 않았습니다.</h4>
        </div>
        :null
      }

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              parseInt(id) + 1
            }.jpg`}
            width="100%"
            alt="shoes"
          />
        </div>
        <div className="col-md-6 mt-4">
          <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].Detail}</p>
          <p>{props.shoes[id].price}</p>
          <button className="btn btn-danger">주문하기</button>
          <button
            className="btn btn-danger back"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
