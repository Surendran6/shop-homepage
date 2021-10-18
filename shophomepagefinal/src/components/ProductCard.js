import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function ProductCard({ product, cart, setCart, rating }) {

  const [button, setButton] = useState('Add to cart');
  const handleClick = (e) => {
    console.log(e);
    if (e.target.innerText === 'Add to cart') {
      setCart(cart + 1);
      setButton('Remove');
    }
    else {
      setCart(cart - 1);
      setButton('Add to cart');
    }
  };
  const ShowRating = (rating) => {
    let row = [];
    //fill star
    for (let i = 0; i < rating; i++) {
      row.push(<span className="fill-star" key={i}><AiFillStar /></span>);
    }
    //outline star
    for (let i = rating; i < 5; i++) {
      row.push(<span className="fill-star" key={i}><AiOutlineStar /></span>);
    }
    return row;
  };
  return (
    <div className="card mb-3" style={{ width: "100%" }}>
      <div className="row no-gutters">
        <div className="col-md-4">
          <img src={product.image} className="card-img text-center " alt="..." />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p>
              {ShowRating(rating)}
            </p>
            <p className="card-text">${product.price}</p>
            <button className={`btn ${button === 'Add to cart' ? 'btn-success' : 'btn-danger'}`} onClick={handleClick}>{button}</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductCard