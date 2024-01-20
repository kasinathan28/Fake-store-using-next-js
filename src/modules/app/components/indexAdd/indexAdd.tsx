import React, { useState, useEffect } from "react";
import styles from "./indexadd.module.css";
import { fetchProducts } from "@/modules/dashboard/services/productsService";
import { addToCartService } from "@/modules/dashboard/services/addToCartService"; // Import the cart service

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function IndexAdd() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const productsData = await fetchProducts();
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchData();
  }, []);

  const addToCart = async (productId: string, quantity: number) => {
    try {
      console.log("cart called");
      const response = await addToCartService(productId, quantity);
      console.log(response);
    } catch (error) {
      console.error("Error adding to cart:", error);
    }
  };

  return (
    <div>
      <div className={styles.heading}>
        <h1>Featured Products</h1>
      </div>
      <div className={styles.cardContainer}>
        {products.map((product) => (
          <div key={product.id} className={styles.card}>
            <img
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className={styles.image}
            />
            <h4>{product.title}</h4>
            <p>Price: ${product.price}</p>
            <button
              className={styles.cartButton}
              onClick={() => addToCart(product.id, 1)} 
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
