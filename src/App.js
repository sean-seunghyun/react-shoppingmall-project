import "./App.css";
import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import shoesData from "./shoes-data.js";
import Main from "./Main";
import Detail from "./Detail";
import { Link, Route, Switch } from "react-router-dom";
export let stockContext = React.createContext();

function App() {
  let [shoes, setShoes] = useState([...shoesData]);
  let [stock, setStock] = useState([10,11,12,13,14,15,16]);
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>Shoes everywhere</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/detail">
                Detail
              </Nav.Link>
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

      <Switch>
        <Route exact path="/">
          <stockContext.Provider value={stock}>
            <Main shoes={shoes} setShoes={setShoes} />
          </stockContext.Provider>
        </Route>
        <Route path="/detail/:id">
          <stockContext.Provider>
            <Detail shoes={shoes} value={stock}/>
          </stockContext.Provider>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
