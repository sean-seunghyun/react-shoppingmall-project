import "./App.css";
import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Carousel } from "react-bootstrap";
import shoesData from "./shoes.js";
function App() {
  let [shoes, setShoes] = useState([...shoesData]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Shoes everywhere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100 main-image" />
          <Carousel.Caption>
            <h3>Enjoy Your shopping</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container shoes-list">
        <div className="row">
          {
          shoes.map( (item, index) =>{
            return(
            <Shoes image={`https://codingapple1.github.io/shop/shoes${index+1}.jpg`} data={shoes[index]}></Shoes>
            );
          })          
          }
        </div>
      </div>
    </div>
  );
}

function Shoes(props) {
   return (
    <div className="col-md-4">
      <div className="shoes">
        <img src={props.image} />
        <h4>{props.data.title}</h4>
        <div>{props.data.content}</div>
      </div>
    </div>
  );
}

export default App;
