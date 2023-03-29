import CardItem from "./CardItem";

const CardList = (forever) => {
  return (
    //TODO Armar Card Ropa
    <div className='d-flex m-5 flex-wrap justify-content-between'>
    {forever.data.map((product) => (
      <div key={product.ItemCode} className = "d-fex mb-5">
        <CardItem data={product} />
      </div>
    ))}
    </div>
  )

}

export default CardList;
