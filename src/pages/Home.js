import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import ItemListContainer from "../components/ItemListContainer";
import CardList from "../components/CardList";
import Spinner from "../components/Spinner";

const Home = () => {
    const [isLoading, setIsLoading] = useState(false);
    //state
    const [products, setProducts] = useState([]); //espera Array
    useEffect(() => {
      setIsLoading(true);
      //fetch de data
      fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json))
      setTimeout(() => {
        setIsLoading(false); //simulo para ver el spinner
      }, 1000);
    }, []);
    console.log(products)
  return (
    <div>
    <ItemListContainer text="Welcome to our e-commerce website! We are thrilled to offer you a one-stop-shop for all your gaming fashion needs. Our team has carefully curated a collection of stylish and comfortable clothing items that are designed specifically for gamers." />
    {isLoading ? <Spinner /> : <CardList data={products} />}
  </div>
  )
}

export default Home