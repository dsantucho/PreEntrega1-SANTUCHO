import CardItem from "./CardItem";

const CardList = (products) => {
  return (
    <div className='d-flex m-5 flex-wrap justify-content-between'>
    {products.data.map((product) => (
      product.quantity = 1, //agrego este valor para poder tomarlo en carditem y Cart
      <div key={product.id} className = "card d-fex mb-5 justify-content-between">
          <CardItem data={product} />
      </div>
    ))}
    </div>
  )

}

export default CardList;
