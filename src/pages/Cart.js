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
    <div>
      <TableContainer component={Paper} className="container mt-5">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">Item</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Increase/Decrease</TableCell>
            <TableCell align="right">Delete</TableCell>
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
              <TableCell align="right">{item.price}</TableCell>
              <TableCell align="right">sdfsdf</TableCell>
              <TableCell align="right">IconoDelete</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <FormCart/>
    </div>
    

  )
}

export default Cart