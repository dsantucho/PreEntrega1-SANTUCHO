import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import CardList from "../components/CardList";
import Spinner from "../components/Spinner";

const ForHim = () => {
  const [isLoading, setIsLoading] = useState(false);
  const men = "men's clothing";
  //state
  const [products, setProducts] = useState([]); //espera Array
  useEffect(() => {
    setIsLoading(true);
    //fetch de data
    fetch(`https://fakestoreapi.com/products/category/${men}`)
          .then(res=>res.json())
          .then(json=>setProducts(json))
    setTimeout(() => {
      setIsLoading(false); //simulo para ver el spinner
    }, 1000);
  }, []);
  console.log(products)
return (
  <div>
    <div>
      <h2>Men's Clothing</h2>
    </div>
    {isLoading ? <Spinner /> : <CardList data={products} />}
  </div>
)
}

export default ForHim;