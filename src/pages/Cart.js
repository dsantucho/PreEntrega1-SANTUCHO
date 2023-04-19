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
import { Link } from 'react-router-dom';

const Cart = () => {
    //methods tiene state y dispatch
    const {methods} = useContext(ItemsContext);
    //usar reduce para calcular el total
    const total = methods.state.reduce((total,item)=>{
      return total + item.price*item.quantity
    },0);

    const countItems = methods.state.reduce((count,item)=>{
      return count + item.quantity
    },0);

  return (
    <div className='container d-flex'>
      <div>
      <TableContainer component={Paper} className=" mt-5">
      <Table sx={{ minWidth: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>id</TableCell>
            <TableCell align="left">Item</TableCell>
            <TableCell align="left">Original Price</TableCell>
            <TableCell align="left">Total Item Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
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
              <TableCell align="left">{item.price}</TableCell>
              <TableCell align="left">{(item.quantity * item.price).toFixed(2)}</TableCell>
              <TableCell align="left">
                <div className='d-flex'>
                  <button className="d-flex justify-content-center align-items-center" onClick={()=>{
                    if(item.quantity>1){
                      methods.dispatch({type:'DECREASE',payload:item})
                    }else{
                      methods.dispatch({type:'REMOVE',payload:item})
                    }
                    }}>
                    -
                  </button>
                  <span className="p-3"> {item.quantity} </span>
                  <button onClick={()=>methods.dispatch({type:'INCREASE',payload:item})} className="d-flex justify-content-center align-items-center">
                    +
                  </button>
                </div>
              </TableCell>
              <TableCell  align="left">
                <button onClick={()=>methods.dispatch({type:'REMOVE', payload:item})}>X</button>
                </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      </TableContainer>
      <div><p>Count Items:{countItems}</p></div>
      <div><p>Total: ${total}</p></div>
      </div>
      <div><FormCart/></div>
      <div>
        <h3> Other accions: </h3>
        <Link to="/"><button>Continue buying</button></Link>
      </div>
      
    </div>
    

  )
}

export default Cart