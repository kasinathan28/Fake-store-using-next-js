export const addToCartService = async (productId: string, quantity: number) => {
  try {
    const response = await fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 5,
        date: "2020-02-03",
        products: [{ productId, quantity }],
      }),
    });

    const json = await response.json();
    return json;
  } catch (error) {
    console.error("Error adding to cart:", error);
    throw error;
  }
};
