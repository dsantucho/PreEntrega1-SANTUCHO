import CardItem from "./CardItem";

const CardList = (products) => {
  return (
    <div className='d-flex m-5 flex-wrap justify-content-between'>
    {products.data.map((product) => (
      <div key={product.id} className = "card d-fex mb-5 justify-content-between">
          <CardItem data={product} />
      </div>
    ))}
    </div>
  )

}

export default CardList;
