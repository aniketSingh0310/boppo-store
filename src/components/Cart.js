import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { add, remove } from "../store/cartSlice";

const Cart = () => {
  const products = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const removeFromCart = (id) => {
    dispatch(remove(id));
  };
  
const handleQuantityChange = (productId, newQuantity) => {
    const updatedCart = products.map((item) => {
      if (item.id === productId) {
        return {
          ...item,
          quantity: Math.max(1, Math.min(newQuantity, item.availableQuantity)),
        };
      }
      return item;
    });

    dispatch(updatedCart(updatedCart));
  };

  const card3 = products.map((product) => (
    <div key={product.id}>
      <div className="cartCard">
        <div className="cart-cont1">
          <img src={product.image} width={100} height={100} alt="ProdImage" />
          <div className="cart-desc">
            <p className="cart-title">{product.title}</p>
            <p className="cart-text">Size: 8</p>
            <p className="cart-text">Material: Lilac</p>
            <div className="quantity-control">
              <button
                className="quantity-btn"
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity - 1)
                }
                disabled={product.quantity <= 1}
              >
                -
              </button>
              <span className="quantity-display">{product.quantity}</span>
              <button
                className="quantity-btn"
                onClick={() =>
                  handleQuantityChange(product.id, product.quantity + 1)
                }
                disabled={product.quantity >= product.availableQuantity}
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="cart-cont2">
          <span className="text-price">${product.price}</span>
          <button
            className="btn-remove"
            onClick={() => {
              removeFromCart(product.id);
            }}
            style={{ backgroundColor: "red" }}
          >
            Remove item
          </button>
        </div>
      </div>
    </div>
  ));
  return (
    <div>
      <h1>Products in your cart</h1>
      <div className="cards-container3">{card3}</div>
    </div>
  );
};
export default Cart;
