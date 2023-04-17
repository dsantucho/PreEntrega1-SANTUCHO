import React from 'react'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Success = () => {
  return (
    <div className='mt-5'>
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert variant="outlined" severity="success">
        This is a success alert — check it out!
      </Alert>
    </Stack>
    </div>
  )
}

export default Success