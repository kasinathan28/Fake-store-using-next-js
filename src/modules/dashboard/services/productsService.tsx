export interface Product {
    id: string;
    title: string;
    description: string;
    price: number;
    image: string;
  }
  
  export const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const productsData = await response.json();
      return productsData;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error; 
    }
  };

