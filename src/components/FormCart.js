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
    <div className='container mt-5 d-flex flex-column'>
        <h3 className='d-flex align-items-center justify-content-center'> Continue Purchase </h3>
        <form className='formContainer d-flex flex-column' onSubmit={onSubmit}>
            <TextField placeholder='name' name='name' value={values.name} onChange={onChange}/>
            <TextField placeholder='last name' name='lastName' value={values.lastName} onChange={onChange}/>
            <TextField placeholder='Celphone' name='phone' value={values.phone} onChange={onChange}/>
            <TextField placeholder='Email' name='email' value={values.address} onChange={onChange}/>
            <TextField placeholder='Repeat Email' name='email2' value={values.email2} onChange={onChange}/>
            <TextField placeholder='Address' name='address' value={values.address} onChange={onChange}/>
            <TextField placeholder='Card' name='card' value={values.card} onChange={onChange}/>
            <TextField placeholder='Ccv' name='ccv' value={values.ccv} onChange={onChange}/>
            <button className='btnForm' type='submit'>Buy</button>
        </form>

        {purchaseID.length ? <Success purchaseID={purchaseID}/>:null}
    </div>
  )
}

export default FormCart