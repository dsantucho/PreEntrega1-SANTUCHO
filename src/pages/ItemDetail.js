import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"; //un hook
import CardItemDetail from "../components/CardItemDetail";

//FIREBASE
import {db} from "../firebase/firebaseConfig";
import { collection, query, where, getDocs, documentId } from "firebase/firestore";


const ItemDetail = () => {
  let {id} = useParams();   //useParam => traerme el ID del item
  /*You can use the navigate object to navigate between different routes or to change the URL displayed in the browser. For example, you can use the push method of the history object to add a new entry to the browser's history and navigate to a different route */
  const navigate = useNavigate(); 
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
      if(querySnapshot.docs.length===0){
        navigate("/error"); //redirect errorPage
      }else{
        setProductsDetail(docs);
      }
    }
    getItems();
  },[id,navigate]); //reaccionar cuando el id cambie

  return (
    <>{productsDetail? (
      <div className="container d-flex flex-column justify-content-center align-items-center p-5">
          {productsDetail.map((data)=>{
            return <CardItemDetail data={data} key={data.id}/>
          })}
      </div>
    ):(<div>Loading...</div>)}
    </>
    
  );
};

export default ItemDetail;
