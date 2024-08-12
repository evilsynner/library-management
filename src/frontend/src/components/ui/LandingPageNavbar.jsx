import { useState } from 'react';
import { Link } from "react-router-dom";

export default function LandingPageNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4 box-border">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="text-white text-lg font-semibold">
          <img src="/logo.svg" className="object-scale-down h-10 w-auto" />
        </div>
        
        {/* Menu items for large screens */}
        <div className="hidden md:flex space-x-4">
          <Link to="#login" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Login</Link>
          <Link to="/accounts/register/" className="text-white hover:bg-gray-700 px-3 py-2 rounded">Register</Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-white focus:outline-none"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
      
      {/* Mobile menu items */}
      <div 
        className={`md:hidden ${isOpen ? 'block' : 'hidden'} mt-2 space-y-2`}
      >
        <Link to="#login" className="block text-white bg-gray-700 px-3 py-2 rounded">Login</Link>
        <Link to="#register" className="block text-white bg-gray-700 px-3 py-2 rounded">Register</Link>
      </div>
    </nav>
  );
};
