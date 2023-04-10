import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { Link } from "react-router-dom";
//context
import { useContext } from "react";
import { ItemsContext } from "../contexts/ItemsContext";


const CardItem = ({ data }) => {
  const { items, setItems, addItem } = useContext(ItemsContext);
  return (
    <Card className="home-cards-list d-flex flex-column justify-content-between align-self-end">
      <Link to={`/detail/${data.id}`}>
        <CardMedia
          component="img"
          height="195"
          image={data.image}
          alt={data.title}
        />
        <div>
          <h3 className="cards-typo m-4">{data.title}</h3>
        </div>

        <CardContent>
          <p>{/* {data.Description} */}</p>
          <p>$ {data.price}</p>
        </CardContent>
      </Link>
      <div className="d-flex justify-content-center align-item-end ">
        <button onClick={() => addItem([data])} className="button-cards">
          ADD TO CART
        </button>
      </div>
    </Card>
  );
};
export default CardItem;
