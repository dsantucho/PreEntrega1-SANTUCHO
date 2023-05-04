import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
//context
import { useContext,useState,useEffect } from "react";
import { ItemsContext } from "../contexts/ItemsContext";

const CardItem = ({ data }) => {
  const { methods } = useContext(ItemsContext);
  const [isAdded, setIsAdded] = useState(false);
  
  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const found = cartData.some((item) => item.id === data.id);
    setIsAdded(found);
  }, [data.id]);

  const handleAddToCart = () => {
    methods.dispatch({ type: "ADD", payload: data });
    setIsAdded(true);
  };

  const handleRemoveFromCart = () => {
    methods.dispatch({ type: "REMOVE", payload: data });
    setIsAdded(false);
  };
  return (
    <Card className={`home-cards-list d-flex flex-column justify-content-between align-self-end ${
      isAdded ? "added-to-cart" : ""}`}>
      <Link to={`/detail/${data.id}`}>
        <CardMedia
          component="img"
          height="250"
          image={data.img}
          alt={data.title}
          sx={{ objectFit: "contain" }}
        />
        <div>
          <h3 className="cards-typo mt-5 ms-2">{data.title}</h3>
        </div>
        <div className=" d-flex ms-2 mt-2">
          <p>Price: </p>
          <p> $ {data.price}</p>
        </div>
      </Link>
      <div className="d-flex justify-content-center align-item-end ">
      {isAdded ? (
          <button onClick={handleRemoveFromCart} className="button-cards added">
            REMOVE ITEM
          </button>
        ) : (
          <button onClick={handleAddToCart} className="button-cards">
            ADD TO CART
          </button>
        )}
      </div>
    </Card>
  );
};
export default CardItem;
