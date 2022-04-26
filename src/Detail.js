import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { Nav } from "react-bootstrap";
import "./Detail.scss";
import { useDispatch, useSelector } from "react-redux";

function Detail(props) {
  let history = useHistory();
  let [selectedTab, setSelectedTab] = useState(0);
  let [alertBox, setAlertBox] = useState(true);
  let { id } = useParams();
  let state = useSelector((state) => state);
  let shoesData = state.shoes;
  let cartData = state.cart;

  let currentItem = shoesData.find(shoes => shoes.id == id);
  const dispatch = useDispatch();


  useEffect(() => {
    let timeoutId = setTimeout(() => {
      setAlertBox(false);
    }, 2000);
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="container">
      {alertBox ? (
        <div className="box-alert">
          <h4>상품이 몇개 남지 않았습니다.</h4>
        </div>
      ) : null}

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
          <button className="btn btn-danger"
          onClick={()=>{
            dispatch({type: 'moveToCart', payload:{orderItem : currentItem}});
            history.push('/cart');
          }}
          >주문하기</button>
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
      <Nav variant="tabs" defaultActiveKey="description">
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(0);
            }}
            eventKey="description"
          >
            Description
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            onClick={() => {
              setSelectedTab(1);
            }}
            eventKey="size"
          >
            Size
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <TabContent selectedTab={selectedTab}></TabContent>
    </div>
  );
}

function TabContent(props) {



  if (props.selectedTab === 0) {
    return <div className="mt-4">0번째 탭입니다.</div>;
  } else if (props.selectedTab === 1) {
    return <div className="mt-4">1번째 탭입니다</div>;
  }
  return <div className="mt-4">아무 탭도 아닙니다.</div>;
}

export default Detail;
