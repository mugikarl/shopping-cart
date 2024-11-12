import React from 'react';

const QuantityInput = ({ quantity, handleQuantityChange, min = 1 }) => {
  const incrementQuantity = () => {
    handleQuantityChange({ target: { value: quantity + 1 } });
  };

  const decrementQuantity = () => {
    if (quantity > min) {
      handleQuantityChange({ target: { value: quantity - 1 } });
    }
  };

  return (
    <div className="flex items-center justify-center h-9">
      <button
        type="button"
        onClick={decrementQuantity}
        className="bg-white hover:bg-gray-100 border border-gray-300 rounded-l-lg px-3 h-full text-blue-950 font-bold flex items-center justify-center"
      >
        -
      </button>
      <input
        type="text"
        value={quantity}
        onChange={handleQuantityChange}
        min={min}
        className="bg-white border-x-0 border-gray-300 text-center text-blue-950 text-sm w-10 h-full"
      />
      <button
        type="button"
        onClick={incrementQuantity}
        className="bg-white hover:bg-gray-100 border border-gray-300 rounded-r-lg px-3 h-full text-blue-950 font-bold flex items-center justify-center"
      >
        +
      </button>
    </div>
  );
};

export default QuantityInput;
