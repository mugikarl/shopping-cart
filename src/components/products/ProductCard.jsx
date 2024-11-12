import React from 'react';
import AddToCartButton from '../buttons/AddToCartButton';

const ProductCard = ({ id, name, price, imageSrc, addToCart }) => {
  return (
    <div className="border rounded-lg bg-white shadow-md flex flex-row items-center gap-4 w-full p-4">
      <img src={imageSrc} className="w-42 h-[130px]" alt={name} />
      <div className="flex flex-col text-left gap-y-6">
        <span className="font-bold text-base">{name}</span>
        <span className="font-bold text-base">${price}</span>
        <div className="justify-end">
          <AddToCartButton addToCart={addToCart} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
