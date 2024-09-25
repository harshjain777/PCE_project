import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../src/assets/safety.png';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'; // Using react-icons for hamburger menu

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className='flex justify-between items-center w-full fixed top-0 left-0 z-[999] py-2 md:py-5 px-10 bg-lime-600 rounded-b-xl shadow-lg shadow-black-950'>
      {/* Logo on the left */}
      <div className='flex items-center'>
        <img src={logo} alt='Logo' className='h-10 w-10' />
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className='lg:hidden'>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? (
            <AiOutlineClose className='text-white text-3xl' />
          ) : (
            <AiOutlineMenu className='text-white text-3xl' />
          )}
        </button>
      </div>

      {/* NavLinks in the center (Desktop View) */}
      <div className='hidden lg:flex text-xl gap-5'>
        <NavLink to='/' className='text-white hover:text-gray-300'>
          Home
        </NavLink>
        <NavLink to='/aboutus' className='text-white hover:text-gray-300'>
          About
        </NavLink>
        <NavLink to='/services' className='text-white hover:text-gray-300'>
          Services
        </NavLink>
      </div>

      {/* Contact Us button on the right (Desktop View) */}
      <div className='hidden lg:block'>
        <NavLink to='/contactus'>
          <button className='bg-white text-lime-600 px-4 py-2 rounded-lg hover:bg-gray-100'>
            Contact Us
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu (only shows on mobile when open) */}
      {isMobileMenuOpen && (
        <div className='flex flex-col absolute top-[70px] left-0 w-full bg-lime-600 p-5 lg:hidden'>
          <NavLink to='/' className='text-white hover:text-gray-300 py-2' onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to='/aboutus' className='text-white hover:text-gray-300 py-2' onClick={() => setIsMobileMenuOpen(false)}>
            About
          </NavLink>
          <NavLink to='/services' className='text-white hover:text-gray-300 py-2' onClick={() => setIsMobileMenuOpen(false)}>
            Services
          </NavLink>
          <NavLink to='/contactus' className='text-white hover:text-gray-300 py-2' onClick={() => setIsMobileMenuOpen(false)}>
            Contact Us
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
