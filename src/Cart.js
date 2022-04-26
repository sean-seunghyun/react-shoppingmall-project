import React from "react";
import { Table } from "react-bootstrap";
import { connect, useDispatch, useSelector } from "react-redux";

function Cart(props) {
  let cartData = useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
          {cartData.map((item, index) => {
            return (
              <tr>
                <td>{index+1}</td>
                <td>{cartData[index].title}</td>
                <td>{cartData[index].price}</td>
                <td>{cartData[index].quantity}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch({ type: "addQuantity", payload:{id: item.id} });
                    }}
                  >
                    {" "}
                    +{" "}
                  </button>
                  <button
                    onClick={() => {
                      dispatch({ type: "reduceQuantity", payload:{id: item.id} });
                    }}
                  >
                    {" "}
                    -{" "}
                  </button>
                </td>
              </tr>
            );
          })}
         
        </tbody>
      </Table>
    </div>
  );
}

// function stateToProps(state){
//     return {
//         state: state
//     }
// }

// export default connect(stateToProps)(Cart);
export default Cart;
