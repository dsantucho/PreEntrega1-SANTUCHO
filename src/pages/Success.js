import React, {useContext} from 'react'
import Alert from '@mui/material/Alert';
//context:
import { ItemsContext } from "../contexts/ItemsContext";

const Success = ({ purchaseID }) => {
  //methods tiene state y dispatch
  const { methods } = useContext(ItemsContext);
  return (
    <div className='mt-5'>
      <Alert id='alert-success' variant="outlined" severity="success">
        Your purchase number is: {methods.submittedState.purchaseID}
      </Alert>
    </div>
  )
}

export default Success