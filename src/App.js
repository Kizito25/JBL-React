import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // Retrieve the Cart Object from CommerceJs API
    setCart(await commerce.cart.retrieve());
  };
  const handleAddToCart = async (productId, quantity) => {
    // Add item to Cart using the productId and then 1 should always be the default quantity
    const item = await commerce.cart.add(productId, quantity);
    // Updating the cart after the item has been added
    setCart(item.cart);
    console.log(item);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);
  return (
    <div>
      <Navbar cartTotalItems={cart.total_items} />
      <div>
        <Products products={products} addToCart={handleAddToCart} />
      </div>
    </div>
  );
};

export default App;
