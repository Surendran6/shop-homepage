import React, { useState, useEffect } from "react";
import axios from 'axios';
import  ProductCard  from "./ProductCard";

function ShopingItems({ cart, setCart }) { 
   const [products, setProducts] = useState([]);
  const ratings = [1, 5, 4, 3, 4, 5, 4, 5, 3, 4, 4, 3, 5, 5, 5, 5, 4, 3, 4, 4];
  useEffect(() => {
    async function fetchData() {      
      const response =  await axios.get(`https://fakestoreapi.com/products`)
      setProducts(response.data)
    }
    fetchData()},
    [])  
  return (
    <div className="container">
      {console.log(products)}
      <div className="all-products">
        {products.map((product, index) => {
          return <ProductCard key={product.id} product={product} cart={cart} setCart={setCart} rating={ratings[index]} />;
        })}
      </div>
    </div>
  );
}

export default ShopingItems
