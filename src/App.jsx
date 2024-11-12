import React, { useContext, useEffect, useState } from 'react';
import './App.css';
import ProductCard from './components/products/ProductCard';
import SearchBar from './components/navigation/SearchBar';
import CartCard from './components/cart/CartCard';
import { Link } from 'react-router-dom';
import { CartContext } from './pages/Root'; // **Import CartContext**

function App() {
  const { cart, addToCart, removeFromCart, updateQuantity } = useContext(CartContext); // **Use CartContext**
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const getProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.escuelajs.co/api/v1/products`,
          { signal }
        );
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    getProducts();
    return () => controller.abort();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <SearchBar query={query} setQuery={setQuery} />
      {!loading ? (
        <div className="flex flex-row gap-2">
          <div className="grid grid-cols-2 gap-3 mb-3">
            {filteredProducts.map((product) => (
              <ProductCard
                key={`product-${product.id}`}
                imageSrc={product.images[0] || 'default-image-url.jpg'}
                name={product.title}
                price={product.price}
                id={product.id}
                addToCart={() => addToCart(product)} // **Use addToCart from context**
              />
            ))}
          </div>
          <div className="w-1/3 max-w-md">
            <div className="border rounded-lg bg-white shadow-md p-4 mb-2">
              <h1 className="text-xl font-bold text-blue-950">My Cart</h1>
              <div className="mt-4">
                {cart.length === 0 ? (
                  <p>Your cart is empty.</p>
                ) : (
                  <>
                    {cart.map((product) => (
                      <CartCard
                        key={`product-${product.id}`}
                        imageSrc={product.images[0] || 'default-image-url.jpg'}
                        name={product.title}
                        price={product.price}
                        id={product.id}
                        quantity={product.quantity}
                        removeFromCart={removeFromCart}
                        updateQuantity={updateQuantity}
                      />
                    ))}
                    <div className="flex justify-end mt-4">
                      <Link to="/checkout" className="bg-blue-950 hover:bg-blue-950/70 text-white font-bold px-4 py-2 rounded-lg">
                        Proceed to Checkout
                      </Link>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <span className="text-white font-bold">Loading products...</span>
      )}
    </div>
  );
}

export default App;