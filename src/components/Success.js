import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Success = ({ purchaseID }) => {
  return (
    <div className='mt-5 ms-2 me-2'>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        Your products are processing you purchase number is: {purchaseID}
      </Alert>
    </Stack>
    </div>
  )
}

export default Success