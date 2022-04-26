import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Shoes from "./Shoes.js";
import './Main.scss';
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";

function Main(props) {

  let shoes = useSelector((state)=> state.shoes);
  let dispatch = useDispatch();
  let currentRenderingCount = shoes.length;
  let totalRenderingCount = 6;
  let [moreToLoad, setMoreToLoad] = useState(true);
  if(currentRenderingCount >= totalRenderingCount){
    setMoreToLoad('false');
  }


  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 main-image" alt=''/>
          <Carousel.Caption>
            <h3>Enjoy Your shopping</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container shoes-list">
        <div className="row">
         {/* {console.log(shoes)} */}
          {shoes.map((item, index) => {
            console.log(item);
            return (
              <Shoes index={index} key={index} alt='' />
            );
          })}
        </div>
      </div>

      {
        moreToLoad?
        (<div className="btn btn-primary main-more" onClick={()=>{
          Axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            dispatch({type: 'addShoes', payload:{addedShoesData : result.data}});     
            currentRenderingCount = shoes.length;
            if(currentRenderingCount >= totalRenderingCount){
              console.log(false);
              setMoreToLoad(false);
            }
          })
          .catch()
  
        }}>더 보기</div>)
        :null
      }
  
    </div>
  );
}

export default Main;