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
      className="fixed bottom-6 right-6 bg-indigo-600 bg-opacity-70 text-white px-5 py-3 rounded-full shadow-lg hover:bg-opacity-90 focus:outline-none focus:ring-4 focus:ring-indigo-300 focus:ring-opacity-50 flex items-center justify-center transition-all duration-300 ease-in-out transform hover:scale-105 sm:bottom-4 sm:right-4 sm:px-4 sm:py-2 sm:text-sm"
    >
      <span className="text-lg font-semibold sm:text-base">Pro</span>
    </button>
  );
};

export default FloatingButton;
