import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../pages/Root';

const PayButton = () => {
  const { resetCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePay = () => {
    alert("Payment successful!");
    resetCart();
    navigate('/products/');
  };

  return (
    <button
      onClick={handlePay}
      className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
    >
      Pay
    </button>
  );
};

export default PayButton;
