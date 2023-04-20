import React from 'react';

const CardItemDetail = ({ data }) => {
  console.log(data)
  return (
    <div className="container card-detail my-4 nav-fix">
      <div className="row g-0">
        <div className="col-5 offset-1 d-flex align-items-center justify-content-center">
          <img src={data.img} alt={data.title} className="img-thumbnail" />
        </div>
        <div className="col-md-5">
          <div className="card-body">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
            <p>
              <small>Price: ${data.price}</small>
            </p>
            <p>Category: {data.category}</p>
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardItemDetail;
