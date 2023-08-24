import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../store/cartSlice";
import { getProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);
  // console.log("Productdata:",products);
  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === "Loading") {
    return <p>Loading.....</p>;
  }
  if (status === "error") {
    return <p>something went wronggg.....</p>;
  }
  const addToCart = (product) => {
    dispatch(add(product));
  };

  

  const card2=products.map(product=>(
    <div key={product.id}>
        <div className="card">
          <div className="">
          <img src={product.image} width={200} height={160} alt='ProdImage'/>
          </div>
          <div className="card-info">
            <p className="text-title">{product.title.slice(0,30)} </p>
            <p className="text-body">{product.description.slice(0,60)}</p>
          </div>
          <div className="card-footer">
            <span className="text-price">${product.price}</span>
            <button className='btn-remove' onClick={() => {
              addToCart(product);
            }}>ADD TO CART</button>
          </div>
        </div>
      </div>
   ))
  return (
    <>
      <h1>Product Dashboard</h1>
      <div className="cards-container">{card2}</div>
    </>
  );
};
export default Product;
