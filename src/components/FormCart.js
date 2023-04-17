import { TextField } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {collection, addDoc} from "firebase/firestore";
import {db} from "../firebase/firebaseConfig";

const initialForm = {
    name:'',
    lastName:'',
    card:'',
    ccv:'',
    address:''
}

const FormCart = () => {
    //guardar data del form
    const [values, setValues] = useState(initialForm)
    //guardar la purchase
    const [pruchaseID, setPurchaseID] = useState('');

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
    }
  return (
    <div className='container mt-5'>
        <h3> Continue Purchase </h3>
        <form className='formContainer' onSubmit={onSubmit}>
            <TextField placeholder='name' name='name' value={values.name} onChange={onChange}/>
            <TextField placeholder='last name' name='lastName' value={values.lastName} onChange={onChange}/>
            <TextField placeholder='Address' name='address' value={values.address} onChange={onChange}/>
            <TextField placeholder='Card' name='card' value={values.card} onChange={onChange}/>
            <TextField placeholder='Ccv' name='ccv' value={values.ccv} onChange={onChange}/>
            <button className='btnForm' type='submit'>Buy</button>
        </form>
    </div>
  )
}

export default FormCart