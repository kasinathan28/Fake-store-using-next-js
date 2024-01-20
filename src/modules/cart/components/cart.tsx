import React, { useState, useEffect } from 'react';
import style from './cart.module.css';

interface CartProduct {
  productId: number;
  productImage: string;
  productTitle: string;
  quantity: number;
  productPrice: number;
}

export default function CartProducts() {
  const [cartProducts, setCartProducts] = useState<CartProduct[]>([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/carts')
      .then((res) => res.json())
      .then((json) => setCartProducts(json.products || [])); 
      
      
  }, []);

  return (
    <div>
      <div className={style.heading}>
        <h1>Cart</h1>
      </div>
      <div className={style.cardContainer}>
        {cartProducts && cartProducts.length > 0 ? (
          cartProducts.map((product) => (
            <div key={product.productId} className={style.card}>
              <img
                src={product.productImage}
                alt={product.productTitle}
                width={300}
                height={200}
                className={style.image}
              />
              <h4>{product.productTitle}</h4>
              <p>Quantity: {product.quantity}</p>
              <p>Price: ${product.productPrice}</p>
            </div>
          ))
        ) : (
          <p>No products in the cart.</p>
        )}
      </div>
    </div>
  );
}
