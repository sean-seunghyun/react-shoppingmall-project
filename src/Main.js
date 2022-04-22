import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Shoes from "./Shoes.js";
import './Main.scss';
import Axios from "axios";

function Main(props) {

  let [moreToLoad, setMoreToLoad] = useState(true);

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
          {props.shoes.map((item, index) => {
            return (
              <Shoes image={`https://codingapple1.github.io/shop/shoes${
                  item.id + 1
                }.jpg`}
                data={item} key={index} alt=''
              ></Shoes>
            );
          })}
        </div>
      </div>

      {
        moreToLoad?
        (<div className="btn btn-primary main-more" onClick={()=>{
          Axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result)=>{
            let shoes = [...props.shoes];
            shoes.push(...result.data);
            props.setShoes(shoes)

            setMoreToLoad(false);
          })
          .catch()
  
        }}>더 보기</div>)
        :null
      }
  
    </div>
  );
}

export default Main;