import React, { useState, useEffect } from "react";
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
//components
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import CardList from "./components/CardList";
import Spinner from "./components/Spinner";


export const App = () => {
  const [isLoading, setIsLoading] = useState (false);
    //keys
    const REACT_KEY = process.env.REACT_APP_KEY;
    const REACT_HOST = process.env.REACT_APP_HOST;
    //state 
    const[forever, setForever] = useState([]); //espera Array
    useEffect(()=>{
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': REACT_KEY,
          'X-RapidAPI-Host': REACT_HOST
        }
      };
      setIsLoading(true);
      //fetch de data
    fetch('https://apidojo-forever21-v1.p.rapidapi.com/products/v2/list?category=women_main&pageSize=48&pageNumber=1&sortby=0', options)
      .then(response => response.json())
      .then(json=>setForever(json.CatalogProducts))
      .catch(err => console.error(err));
      setTimeout(()=>{
        setIsLoading(false);
      },50000)

    },[]);

    return(
      <div>
          <NavBar />
          <ItemListContainer text = 'Welcome to our e-commerce website! We are thrilled to offer you a one-stop-shop for all your gaming fashion needs. Our team has carefully curated a collection of stylish and comfortable clothing items that are designed specifically for gamers.'/>
          {isLoading?<Spinner/>:<CardList data = {forever}/>}
      </div>
    );
}

export default App;
