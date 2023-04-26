import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import ItemListContainer from "../components/ItemListContainer";
import CardList from "../components/CardList";
import Spinner from "../components/Spinner";

//FIREBASE
import {db} from "../firebase/firebaseConfig";
import { collection, query, getDocs } from "firebase/firestore";

const Home = () => {
  //spinner
  const [isLoading, setIsLoading] = useState(false);
  //state
  const [items, setItems] = useState([]); //espera Array
  //firebase
  const q = query(collection(db,"items")); // es la query

  //conect firebase
  useEffect(()=>{
    setIsLoading(true);
    const getItems = async()=>{
      const querySnapshot = await getDocs(q);
      const docs = []; //uso para pushear todos los elementos + id
      querySnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id});
      })
      setItems(docs);
    }
    getItems();
    setTimeout(() => {
           setIsLoading(false); //simulo para ver el spinner
    }, 1000);
  },[]);
  return (
    <div className="nav-fix">
      <ItemListContainer 
        text={
          `We are excited to provide you with a wide range of stylish and comfortable clothing options for women, men, and babies. 
          Our collection is carefully curated to ensure that we offer the latest trends in fashion while prioritizing comfort. Whether you're looking for the perfect outfit for a night out or something cozy to wear at home, we have you covered. Browse through our selection and discover your new favorite wardrobe pieces today!`
          } 
      />
      {isLoading ? <Spinner /> : <CardList data={items} />}
    </div>
  )
}

export default Home