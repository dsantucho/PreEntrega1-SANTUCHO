import { render } from '@testing-library/react';
import React, { useContext, useEffect, useState } from 'react';
//context:
import { ItemsContext } from '../contexts/ItemsContext';


const CardItemDetail = ({ data }) => {
  const {methods} = useContext(ItemsContext);
  const [currentQuantity,setCurrentQuantity] = useState(1)// use useState to store data

  //voy a hacer 2 funciones increase y decrease modificando el valor de quantity
  //estas dos funciones las voy a pasar en el 'onClick' 
  const handleIncrease = () => {
    setCurrentQuantity(currentQuantity+1);
  };
  const handleDecrease = () => {
    //no se puede restar menos a 1 - tener valores negativos
    if (currentQuantity > 1) {
      setCurrentQuantity(currentQuantity-1);
    }
  };
  const addToCart = ()=>{
    const auxdata = {...data, quantity: currentQuantity}
    methods.dispatch({ type: "ADD", payload: auxdata })
  }
  return (
    <div className="container card-detail nav-fix">
      <div className="d-flex justify-content-between">
        <div className="col-4 offset-1 d-flex align-items-center justify-content-center">
          <img src={data.img} alt={data.title} className="img-thumbnail" />
        </div>
        <div className="col-6 d-flex">
          <div className="card-body-detail card-detail">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Category: {data.category}</p>
            <p>Price: ${data.price}</p>
            <div className='d-flex'>
              <button className="d-flex justify-content-center align-items-center" onClick={handleDecrease}>-</button>
              <span className="p-3"> {currentQuantity} </span>
              <button onClick={handleIncrease} className="d-flex justify-content-center align-items-center">+</button>
            </div>
            <button  onClick={addToCart} className="button-cards-detail">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemDetail;
