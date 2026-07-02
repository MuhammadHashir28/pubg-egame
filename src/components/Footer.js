import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className=" bg-black footer">
  
        <div className="flex flex-col md:flex-row justify-center md:justify-between px-32 mx-auto  py-24 ">
          <div className="footer-column mb-6 md:mb-0">
            <div className="logo">
            <img src={require('../images/footer-logo.png')} alt="Logo" className="w-16" />
            </div>
            <ul className="footer-links mt-4">
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Home</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">About Us</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">FAQs</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Blog</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Backpack</a></li>
              <li><a href="/" className="text-gray-600 hover:text-gray-800">Contact</a></li>
            </ul>
          </div>
          <div className="footer-column mb-6 md:mb-0">
            <h3 className="footer-heading text-gray-800 text-lg font-bold mb-4 uppercase">Contact Us</h3>
            <p className="footer-info text-gray-600">Phone: (123) 456-7890</p>
            <p className="footer-info text-gray-600">Email: info@example.com</p>
            <p className="footer-info text-gray-600">Address: Suite no 20, Central Park, USA</p>
          </div>
          <div className="footer-column">
            <h3 className="footer-heading text-gray-800 text-lg font-bold mb-4 uppercase">Stay Connected</h3>
            <div className="social-links">
              <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-800"><i className="fab fa-facebook"></i></a>
              <a href="https://www.twitter.com" className="text-gray-600 hover:text-gray-800"><i className="fab fa-twitter"></i></a>
              <a href="https://www.instagram.com" className="text-gray-600 hover:text-gray-800"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
