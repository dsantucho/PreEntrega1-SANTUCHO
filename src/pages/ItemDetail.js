import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";  //un hook
import CardItemDetail from "../components/CardItemDetail";

//FIREBASE
import {db} from "../firebase/firebaseConfig";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


const ItemDetail = () => {
  let {id} = useParams();   //useParam => traerme el ID del item
  //state
  const [productsDetail, setProductsDetail] = useState([]); //espera Objeto 
  //firebase
  const q = query(collection(db,"items"), where(documentId(),"==",id)); // es la query que busca por el id especifico
  //conect firebase
  useEffect(()=>{
    const getItems = async()=>{
      const querySnapshot = await getDocs(q);
      const docs = []; //uso para pushear todos los elementos + id
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id});
      })
      setProductsDetail(docs);
    }
    getItems();
  },[id]); //reaccionar cuando el id cambie
  console.log(productsDetail)

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        {productsDetail.map((data)=>{
          return <CardItemDetail data={data} key={data.id}/>
        })}
    </div>
  );
};

export default ItemDetail;
