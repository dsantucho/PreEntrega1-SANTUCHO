import React, { useContext } from "react";
//table:
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
//context:
import { ItemsContext } from "../contexts/ItemsContext";

//component
import FormCart from "../components/FormCart";
import { Link } from "react-router-dom";
//img
import ContinueBuy from "../img/continue-buy.jpg";

const Cart = () => {
  //methods tiene state y dispatch
  const { methods } = useContext(ItemsContext);
  //usar reduce para calcular el total
  const total = methods.state.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  const countItems = methods.state.reduce((count, item) => {
    return count + item.quantity;
  }, 0);

  return (
    <div
      id="cart"
      className=" nav-fix container d-flex flex-column align-items-center justify-content-center"
    >
      <div id="actions-cart" className=" d-flex mb-4">
        <Link to="/">
          <button className="btn-continue-buy">
            {" "}
            Continue buying! Click Here!
          </button>
        </Link>
      </div>

      <div id="div-table-form" className="d-flex justify-content-between">
        {methods.state.length > 0 ? (
          <>
            <div className="col-7">
              <TableContainer component={Paper} className=" mt-5" >
                <Table sx={{ minWidth: 350 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>id</TableCell>
                      <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>Item</TableCell>
                      <TableCell align="left"sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>Original Price</TableCell>
                      <TableCell align="left"sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>Total Item Price</TableCell>
                      <TableCell align="left"sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>Quantity</TableCell>
                      <TableCell align="left"sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>Delete</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {methods.state.map((item, index) => (
                      <TableRow
                        key={index}
                        sx={{
                          "&:last-child td, &:last-child th": { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>
                          {item.id}
                        </TableCell>
                        <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>{item.title}</TableCell>
                        <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>{item.price}</TableCell>
                        <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>
                          {(item.quantity * item.price).toFixed(2)}
                        </TableCell>
                        <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>
                          <div className="d-flex">
                            <button
                              className={`btn-table d-flex justify-content-center align-items-center ${item.quantity === 1 ? "disabled" : ""}`}
                              onClick={() => {
                                if (item.quantity > 1) {
                                  methods.dispatch({
                                    type: "DECREASE",
                                    payload: item,
                                  });
                                }
                              }} disabled={item.quantity === 1}>
                              -
                            </button>
                            <span className="p-3"> {item.quantity} </span>
                            <button
                              onClick={() =>
                                methods.dispatch({
                                  type: "INCREASE",
                                  payload: item,
                                })
                              }
                              className="btn-table d-flex justify-content-center align-items-center"
                            >
                              +
                            </button>
                          </div>
                        </TableCell>
                        <TableCell align="left" sx={{fontSize: '14px', fontFamily: 'Montserrat'}}>
                          <button className="btn-table"
                            onClick={() =>
                              methods.dispatch({
                                type: "REMOVE",
                                payload: item,
                              })
                            }
                          >
                            X
                          </button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              <div>
                <p>Count Items:{countItems}</p>
              </div>
              <div>
                <p>Total: ${total.toFixed(2)}</p>
              </div>
            </div>
            <div id="form" className="col-4">
              <FormCart />
            </div>
          </>
        ) : (
          <div className="card-empty d-flex justify-content-center mb-5">
            <img
              src={ContinueBuy}
              alt="continue-buy-photo"
              className="img-fluid"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
