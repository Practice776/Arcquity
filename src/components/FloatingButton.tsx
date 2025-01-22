import React from 'react';
import { useNavigate } from 'react-router-dom';

const FloatingButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/pricing'); // Navigate to the Pricing Page
  };

  return (
    <button
      onClick={handleClick}
      className="fixed bottom-6 right-6 bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75 flex items-center justify-center transition duration-200 ease-in-out"
    >
      <span className="text-lg font-semibold">Pro</span> {/* Professional label */}
    </button>
  );
};

export default FloatingButton;
