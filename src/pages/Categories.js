import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom"; 
//FIREBASE
import {db} from "../firebase/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";

//components
import CardList from '../components/CardList';

const Categories = () => {
    let {category} = useParams();  
    //state
    const [itemsByCategory, setItemsByCategory] = useState([]); //espera Objeto 
    //firebase
    const q = query(collection(db,"items"), where("category", "==",category)); 
    //conect firebase
    useEffect(()=>{
        const getItems = async()=>{
        const querySnapshot = await getDocs(q);
        const docs = []; //uso para pushear todos los elementos + id
        querySnapshot.forEach((doc)=>{
            docs.push({...doc.data(), id: doc.id});
        })
        setItemsByCategory(docs);
    }
    getItems();
    },[category]);
    return (
        <div className='container nav-fix'>
            <h2 className='d-flex justify-content-center mt-5'>Category =  {category}</h2>
            <CardList data={itemsByCategory}/>
        </div>
    )
}

export default Categories