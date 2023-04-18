import React, { useContext } from 'react';
//table:
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
//context:
import { ItemsContext } from '../contexts/ItemsContext';

//component
import FormCart from '../components/FormCart';

const Cart = () => {
    //methods tiene state y dispatch
    const {methods} = useContext(ItemsContext);
    const data = [1,1,1]
  return (
    <div className='container d-flex'>
      <div>
      <TableContainer component={Paper} className=" mt-5">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">Item</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Increase/Decrease quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {methods.state.map((item,index) => (
            <TableRow
              key={index}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               {item.id}
              </TableCell>
              <TableCell align="left">{item.title}</TableCell>
              <TableCell align="left">{item.quantity*item.price}</TableCell>
              <TableCell align="left">
                <div className='d-flex'>
                  <button className="d-flex button-quantity justify-content-center align-items-center">
                    +
                  </button>
                  <span className="p-4"> {item.quantity} </span>
                  <button className="d-flex button-quantity justify-content-center align-items-center">
                    -
                  </button>
                </div>
              </TableCell>
              <TableCell align="left">X</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      </div>
      <div><FormCart/></div>
      
    </div>
    

  )
}

export default Cart