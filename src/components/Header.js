import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="flex justify-between p-4 px-52 mx-24 text-white">
        <div className="flex items-center">
          <div className="logo mr-4">
            <a href="/">
              <img src={require('../images/logo.png')} alt="Logo" className="w-24 mr-16" />
            </a>
          </div>
          <nav className="nav-links">
            <ul className="flex space-x-4">
              <li>
                <a href="/" className="text-white uppercase font border-2 text-base  border-blue rounded-full py-10 px-30">Home</a>
              </li>
              <li>
                <a href="/" className="text-white uppercase hover:text-gray-900 py-10 px-30">About Us</a>
              </li>
              <li>
                <a href="/" className="text-white uppercase hover:text-gray-900 py-10 px-30">FAQs</a>
              </li>
              <li>
                <a href="/" className="text-white uppercase hover:text-gray-900 py-10 px-30">Blog</a>
              </li>
              <li>
                <a href="/" className="text-white uppercase hover:text-gray-900 py-10 px-30">Backpack</a>
              </li>
              <li>
                <a href="/" className="text-white uppercase hover:text-gray-900 py-10 px-30">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="user-link">
          <a href="/" className="text-white uppercase">Sign Up</a>
          <a href="/" className="text-white uppercase pl-4">Sign In</a>
        </div>
      </header>
    );
  }
}

export default Header;
