import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

//components
import Success from './Success';

const initialForm = {
    name:'',
    lastName:'',
    phone:'',
    email:'',
    email2:'',
    card:'',
    ccv:'',
    address:''
}

const FormCart = () => {
    //guardar data del form
    const [values, setValues] = useState(initialForm)
    //guardar el id de purchase para poder desplegar el mensaje de exito
    const [purchaseID, setPurchaseID] = useState('');

    //eventos para tomar los valores del form
    const onChange = (e)=>{
        const {value, name} = e.target;
        setValues({...values, [name]:value})
    }
    const onSubmit = async(e)=>{
        e.preventDefault();
        console.log(values);
        const docRef = await addDoc(collection(db, "purchases"),{values});
        console.log("Document written with id: ", docRef.id);
        setValues(initialForm);
        setPurchaseID(docRef.id);
    }
  return (
    <div id='form-detail' className='mt-5 d-flex flex-column'>
        <h3 className='d-flex align-items-center justify-content-center'> Continue Purchase </h3>
        <form className='formContainer d-flex flex-column' onSubmit={onSubmit}>
            <div>
                <h4 className='mb-3 mt-3'>Personal info</h4>
                <TextField placeholder='Name' name='name' value={values.name} onChange={onChange}/>
                <TextField placeholder='Last name' name='lastName' value={values.lastName} onChange={onChange}/>
                <TextField placeholder='Celphone' name='phone' value={values.phone} onChange={onChange}/>
                <TextField placeholder='Address' name='address' value={values.address} onChange={onChange}/>
            </div>
            <div className='d-flex flex-column'>
                <h4 className='mb-3 mt-3'>Email</h4>
                <TextField placeholder='Email' name='email' value={values.address} onChange={onChange}/>
                <TextField placeholder='Repeat Email' name='email2' value={values.email2} onChange={onChange}/>
            </div>
            <button className='btnForm d-flex justify-content-center m-3' type='submit'>Buy</button>
        </form>

        {purchaseID.length ? <Success purchaseID={purchaseID}/>:null}
    </div>
  )
}

export default FormCart