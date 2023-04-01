import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import { useParams } from "react-router-dom";
import CardItem from "../components/CardItem";
import CardItemDetail from "../components/CardItemDetail";

const ItemDetail = () => {
  const [isLoading, setIsLoading] = useState(false);
  //state
  const [productsDetail, setProductsDetail] = useState({}); //espera Objeti
  //useParam => traerme el ID del item
  let {id} = useParams()

  useEffect(() => {
    setIsLoading(true);
    //fetch de data
    fetch(
      `https://fakestoreapi.com/products/${id}`
    )
    .then(res=>res.json())
    .then(json=>setProductsDetail(json))
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [id]);
console.log(productsDetail)
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center p-5">
        {isLoading ? <Spinner /> : <CardItemDetail data={productsDetail} />}
    </div>
  );
};

export default ItemDetail;
