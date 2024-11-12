import React, { useContext } from 'react';
import { CartContext } from '../pages/Root';
import { useNavigate } from 'react-router-dom';
import CancelButton from '../components/buttons/CheckoutCancelButton';
import PayButton from '../components/buttons/CheckoutPayButton';

const Checkout = () => {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  return (
    <div className="p-4 bg-white shadow-md rounded-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-blue-950 mb-4">Checkout</h2>

      <div className="mb-4">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center py-2 border-b">
              <div className="flex items-center gap-4">
                <img
                  src={item.imageSrc || 'default-image-url.jpg'}
                  className="w-16 h-16 object-cover rounded"
                  alt={item.title}
                />
                <div className="flex flex-col">
                  <p className="text-gray-700 font-semibold">{item.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <p className="text-gray-900 font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                <p className="text-gray-700">Qty: {item.quantity}</p>
              </div>
            </div>
          ))
        )}
      </div>

      <div className="text-right font-bold text-lg mb-4">
        Total: ${cart.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}
      </div>

      <div className="flex justify-end gap-2">
        <CancelButton />
        <PayButton />
      </div>
    </div>
  );
};

export default Checkout;
