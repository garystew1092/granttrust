import React, { useState } from "react";
import { AiOutlineAlignCenter, AiOutlineClose } from "react-icons/ai";
import Logo from '../assets/logo.png'
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  
  const showLogin = () => {
    navigate('/auth?form=login');
  }

  const showSignUp = () => {
    navigate('/auth?form=signup');
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      <div className="flex justify-between items-center container py-5">
        <div id="logo">
          <img src={Logo} className="w-20 mx-5" alt="Company Logo" />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-10 text-nowrap">
          <a href="/" className="hover:text-amber-500 transition-colors">Home</a>
          <a href="/contact-us" className="hover:text-amber-500 transition-colors">Contact Us</a>
          <a href="/services" className="hover:text-amber-500 transition-colors">Services</a>
          <a href="/Pricing" className="hover:text-amber-500 transition-colors">Pricing</a>
        </div>

        <div className="hidden lg:flex gap-5 mx-auto items-center">
          <button 
            onClick={showLogin} 
            className="bg-amber-500 hover:bg-amber-600 p-2 px-4 rounded-md text-nowrap cursor-pointer transition-colors"
          >
            Online Login
          </button>
          <button 
            onClick={showSignUp} 
            className="bg-transparent border border-gray-300 hover:border-amber-500 p-2 px-4 rounded-md text-nowrap cursor-pointer transition-colors"
          >
            Create Account
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden mx-5 text-2xl focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <AiOutlineClose /> : <AiOutlineAlignCenter />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 right-0 h-full w-64 bg-white z-50 shadow-xl transform transition-all duration-300 ease-in-out lg:hidden
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex justify-end mb-10">
            <button 
              onClick={toggleMenu}
              className="text-2xl focus:outline-none"
              aria-label="Close menu"
            >
              <AiOutlineClose />
            </button>
          </div>
          
          <nav className="flex flex-col gap-6 text-lg">
            <a href="/" className="hover:text-amber-500 transition-colors" onClick={toggleMenu}>Home</a>
            <a href="/contact-us" className="hover:text-amber-500 transition-colors" onClick={toggleMenu}>Contact Us</a>
            <a href="/services" className="hover:text-amber-500 transition-colors" onClick={toggleMenu}>Services</a>
            <a href="/Pricing" className="hover:text-amber-500 transition-colors" onClick={toggleMenu}>Pricing</a>
          </nav>

          <div className="mt-auto mb-10 flex flex-col gap-4">
            <button 
              onClick={() => {
                showLogin();
                toggleMenu();
              }}
              className="bg-amber-500 hover:bg-amber-600 p-2 rounded-md cursor-pointer transition-colors"
            >
              Online Login
            </button>
            <button 
              onClick={() => {
                showSignUp();
                toggleMenu();
              }}
              className="bg-transparent border border-gray-300 hover:border-amber-500 p-2 rounded-md cursor-pointer transition-colors"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}