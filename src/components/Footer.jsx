import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Navigation Links */}
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><NavLink to="/" className="hover:underline">Home</NavLink></li>
              <li><NavLink to="/aboutus" className="hover:underline">About</NavLink></li>
              <li><NavLink to="/services" className="hover:underline">Services</NavLink></li>
              <li><NavLink to="/contactus" className="hover:underline">Contact</NavLink></li> {/* Updated Contact Us Link */}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-bold mb-4">Contact Us</h4>
            <p className="mb-2">123 Main Street</p>
            <p className="mb-2">City, State, 12345</p>
            <p className="mb-2">Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a></p>
            <p>Phone: <a href="tel:+1234567890" className="hover:underline">+1 (234) 567-890</a></p>
          </div>

          {/* Social Media */}
          <div className="w-full sm:w-1/3 mb-6">
            <h4 className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-facebook-f"></i>
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-twitter"></i>
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-white hover:text-gray-400">
                <i className="fab fa-linkedin-in"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer Bottom */}
      <div className="bg-gray-900 py-4">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm">© 2024 Disaster Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
