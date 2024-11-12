import React from 'react';
import { useNavigate } from 'react-router-dom';

const CancelButton = () => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="bg-red-600 hover:bg-red-600/70 text-white px-4 py-2 rounded-lg"
    >
      Cancel
    </button>
  );
};

export default CancelButton;
