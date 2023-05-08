import React, { useContext, useState,useEffect } from 'react';
//context:
import { ItemsContext } from '../contexts/ItemsContext';


const CardItemDetail = ({ data }) => {
  const {methods} = useContext(ItemsContext);
  const [currentQuantity,setCurrentQuantity] = useState(1)// use useState to store data
  const [isAdded, setIsAdded] = useState(false)

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cartData.some((item) => item.id === data.id);
    setIsAdded(found);
  }, [data.id]);
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
  //handler add to cart
  const addToCart = ()=>{
    const auxdata = {...data, quantity: currentQuantity}
    methods.dispatch({ type: "ADD", payload: auxdata });
    setIsAdded(true);
  }
  // handler remove to cart
  const removeToCart = () => {
    const auxdata = {...data, quantity: currentQuantity}
    methods.dispatch({ type: "REMOVE", payload: auxdata });
    setIsAdded(false);
  };
  return (
    <div className="container card-detail nav-fix">
      <div className="d-flex justify-content-between">
        <div className="col-4 offset-1 d-flex align-items-center justify-content-center">
          <img src={data.img} alt={data.title} className="img-thumbnail" />
        </div>
        <div className="col-6 d-flex">
          <div className="card-body-detail">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>Category: {data.category}</p>
            <p>Price: ${data.price}</p>
            <div className='d-flex mb-5 '>
              <button className={`card-btn-detail-quantity d-flex justify-content-center align-items-center ${currentQuantity === 1 ? "disabled" : ""}`} onClick={handleDecrease}>-</button>
              <span className="p-3"> {currentQuantity} </span>
              <button onClick={handleIncrease} className="card-btn-detail-quantity d-flex justify-content-center align-items-center">+</button>
            </div>
            {isAdded?(<button  onClick={removeToCart} className={`button-cards-detail ${isAdded? "added-to-cart button-cards":""}`}>Remove</button>):(<button  onClick={addToCart} className="button-cards-detail">Add to Cart</button>)}
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemDetail;
