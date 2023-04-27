import React from 'react'
import { Alert } from '@mui/material'
//img
import errorImg from '../img/error_img.png'

const ErrorPage = () => {
  return (
      <div className='container error-container d-flex flex-column justify-content-center align-items-center'>
        <div className='div-alert'>
          <Alert severity='error' id='div-alert' className='d-inline-flex justify-content-center align-items-center m-5'>Page not found | 404</Alert>
        </div>
        <div className='d-inline-flex justify-content-center'>
          <img src={errorImg} className="img-fluid" alt="error"/>
        </div>
      </div> 
  )
}

export default ErrorPage;