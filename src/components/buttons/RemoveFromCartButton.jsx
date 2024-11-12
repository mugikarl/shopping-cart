import React from 'react';

const RemoveFromCartButton = ({ removeFromCart }) => {
  return (
    <button
      onClick={removeFromCart}
      className="bg-red-600 hover:bg-red-600/70 px-4 py-2 rounded-lg text-white"
      data-testid="remove-button"
    >
      Remove
    </button>
  );
};

export default RemoveFromCartButton;