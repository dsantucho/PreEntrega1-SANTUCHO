import CardItem from "./CardItem";
import {Link} from "react-router-dom";

const CardList = (products) => {
  return (
    <div className='d-flex m-5 flex-wrap justify-content-between'>
    {products.data.map((product) => (
      <div key={product.id} className = "card d-fex mb-5">
        <Link to = {`/detail/${product.id}`}>
          <CardItem data={product}/>
        </Link>
      </div>
    ))}
    </div>
  )

}

export default CardList;
