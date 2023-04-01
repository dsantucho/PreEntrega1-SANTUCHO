import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//components
import CardList from "../components/CardList";
import Spinner from "../components/Spinner";

const Others = () => {
  const [isLoading, setIsLoading] = useState(false);
//Categories
  const jewelery = "jewelery";
  const electro = "electronics";
//state
  const [electros, setElectros] = useState([]); //espera Array
  const [jew, setJwe] = useState([]);
//ELECTRO
  useEffect(() => {
    setIsLoading(true);
    //fetch de data
    fetch(`https://fakestoreapi.com/products/category/${electro}`)
          .then(res=>res.json())
          .then(json=>setElectros(json))
    setTimeout(() => {
      setIsLoading(false); //simulo para ver el spinner
    }, 1000);
  }, []);
//JEWELERY
  useEffect(() => {
    setIsLoading(true);
    //fetch de data
    fetch(`https://fakestoreapi.com/products/category/${jewelery}`)
          .then(res=>res.json())
          .then(json=>setJwe(json))
    setTimeout(() => {
      setIsLoading(false); //simulo para ver el spinner
    }, 1000);
  }, []);

return (
  <div>
    <div className="container">
        <div className="d-flex justify-content-start m-5">
            <h2>Electronics</h2>
        </div>
        <div>
            {isLoading ? <Spinner /> : <CardList data={electros} />}
        </div>
    </div>
    <div className="container">
        <div className="d-flex justify-content-start m-5">
            <h2>Jewelery</h2>
        </div>
        <div>
            {isLoading ? <Spinner /> : <CardList data={jew} />}
        </div>
    </div>

  </div>
)
}

export default Others;