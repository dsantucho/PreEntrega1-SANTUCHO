import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
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
            <h3 className="cards-typo m-4">{data.title}</h3>
          </div>
          <CardContent>
            <p>Price: </p>
            <p>$ {data.price}</p>
          </CardContent>
        </Link>
        <div>
              <p>Quantity:</p>
              <button> + </button>
              <span> {data.quantity} </span>
              <button> - </button>
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
