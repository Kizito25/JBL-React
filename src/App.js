import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";
import { Products, Navbar, Cart } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };

  const fetchCart = async () => {
    // Retrieve the Cart Object from CommerceJs API
    const cart = await commerce.cart.retrieve();
    setCart(cart);
  };
  const handleAddToCart = async (productId, quantity) => {
    // Add item to Cart using the productId and then 1 should always be the default quantity
    const item = await commerce.cart.add(productId, quantity);
    // Updating the cart after the item has been added
    setCart(item.cart);
  };
  const handleUpdateCartQty = async (productId, quantity) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };

  const handleRemoveFromCart = async (productId) => {
    const { cart } = await commerce.cart.remove(productId);
    setCart(cart);
  };

  const handleEmptyCart = async () => {
    const { cart } = await commerce.cart.empty();
    setCart(cart);
  };
  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  return (
    <Router>
      <div>
        <Navbar cartTotalItems={cart.total_items} />
        <div>
          <Switch>
            <Route exact path="/">
              <Products products={products} addToCart={handleAddToCart} />
            </Route>

            <Route exact path="/cart">
              <Cart
                cart={cart}
                handleUpdateCartQty={handleUpdateCartQty}
                handleRemoveFromCart={handleRemoveFromCart}
                handleEmptyCart={handleEmptyCart}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
