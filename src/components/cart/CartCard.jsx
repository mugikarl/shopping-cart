import React, { useState } from 'react';
import RemoveFromCartButton from '../buttons/RemoveFromCartButton';
import QuantityInput from './QuantityInput';

const CartCard = ({ id, name, price, imageSrc, quantity: initialQuantity, removeFromCart, updateQuantity }) => {
  const [quantity, setQuantity] = useState(initialQuantity);

  const handleQuantityChange = (e) => {
    const newQuantity = Number(e.target.value);
    setQuantity(newQuantity);
    updateQuantity(id, newQuantity);
  };

  return (
    <div className="border bg-blue-950 rounded-lg shadow-md p-2 mb-2">
      <div className="flex flex-row">
        <img src={imageSrc} className="w-20 h-20 rounded-lg object-cover" />
        <div className="items-left text-left flex flex-col gap-2 w-full px-2 mt-2">
            <span className="font-bold text-base text-white text-left">{name}</span>
            <div className='items-center flex flex-row justify-between'>
                <span className='font-bold text-white text-base'>${price * quantity}</span>
                <QuantityInput quantity={quantity} handleQuantityChange={handleQuantityChange} min={1} />            </div>
            </div>
        </div>
        <div className='flex flex-row justify-end mt-4'>
            <RemoveFromCartButton removeFromCart={() => removeFromCart(id)} />
        </div>
    </div>
  );
};

export default CartCard;
