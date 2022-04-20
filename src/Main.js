import React from "react";
import { Carousel } from "react-bootstrap";

function Main(props) {
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
              <Shoes
                image={`https://codingapple1.github.io/shop/shoes${
                  index + 1
                }.jpg`}
                data={props.shoes[index]} key={index} alt=''
              ></Shoes>
            );
          })}
        </div>
      </div>
    </div>
  );
}


function Shoes(props) {
    return (
      <div className="col-md-4">
        <div className="shoes">
          <img src={props.image} alt=""/>
          <h4>{props.data.title}</h4>
          <div>{props.data.content}</div>
        </div>
      </div>
    );
  }

export default Main;