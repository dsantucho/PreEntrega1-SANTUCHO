import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";


const CardItem = ({ data }) => {
  const {methods} = useContext(ItemsContext);
  return (
    <Card className="home-cards-list d-flex flex-column justify-content-between align-self-end">
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
        <div className="div-quantity ms-2">
              <p>Quantity:</p>
              <div className=" d-flex justify-content-around mb-4">
                <button className="d-flex button-quantity justify-content-center align-items-center"> + </button>
                <span className="p-2"> {data.quantity} </span>
                <button className="d-flex button-quantity justify-content-center align-items-center"> - </button>
              </div>

        </div>
        <div className="d-flex justify-content-center align-item-end ">
          <button onClick={() => methods.dispatch({type:'ADD', payload: data})} className="button-cards">
            ADD TO CART
          </button>
        </div>
    </Card>
  );
};
export default CardItem;
