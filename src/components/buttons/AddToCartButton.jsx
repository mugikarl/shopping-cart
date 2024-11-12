import React from 'react';

const AddToCartButton = ({ addToCart }) => {
  return (
    <button onClick={addToCart} className="bg-blue-950 hover:bg-blue-950/70 px-4 py-2 rounded-lg text-white" data-testid="button">
      Add to Cart
    </button>
  );
};

export default AddToCartButton;