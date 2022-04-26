import React from "react";
import { Table } from "react-bootstrap";
import {connect} from 'react-redux';

function Cart(props) {
    console.log(props);
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>제품명</th>
            <th>가격</th>
            <th>수량</th>
            <th>수량 변경</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{props.state[0].title}</td>
            <td>Otto</td>
            <td>{props.state[0].quantity}</td>
            <td><button onClick = {()=>{props.dispatch({type: 'addQuantity'})}}> + </button><button onClick = {()=>{props.dispatch({type:'reduceQuantity'})}}> - </button></td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>          
        </tbody>
      </Table>
      
    </div>
  );
}


function stateToProps(state){
    return {
        state: state
    }
}

export default connect(stateToProps)(Cart);
