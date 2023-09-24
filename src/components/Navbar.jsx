import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  // Scroll event listener to change the background color on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarHeight = scrolling ? '60px' : '80px';

  return (
    <nav
      className={`fixed w-full z-10 ${
        scrolling ? 'bg-gray-800' : 'navbar-not-scrolling'
      }`}
      style={{ height: navbarHeight, transition: 'height 0.6s ease-in-out' }}
    >
      <div className="container px-4 py-4 mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center">
            <img
              src="../../public/images/NavLogo.png"
              alt="Logo"
              className={`w-10 h-10 mx-4 ${
                scrolling ? 'logo-scrolling' : 'logo-not-scrolling'
              }`} // Apply the appropriate class based on scrolling
              style={{ filter: 'invert(100%)' }}
            />

            <span
              className={`text-xl font-semibold text-white ${
                scrolling ? 'icon-scrolling' : 'icon-not-scrolling'
              }`} // Apply the appropriate class based on scrolling
            >
              OLIVER GARCIA
            </span>
          </div>

          {/* Right Section */}
          <div className="hidden space-x-6 md:flex">
            <Link
              to="about-section"
              className="text-white hover:text-gray-400"
              smooth={true}
              duration={700}
            >
              About
            </Link>
            <Link
              to="projects-section"
              className="text-white hover:text-gray-400"
              smooth={true}
              duration={700}
            >
              Projects
            </Link>
            <Link
              to="contact-section"
              className="text-white hover:text-gray-400"
              smooth={true}
              duration={700}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu (Hamburger Icon) */}
          <div className="md:hidden">
            {/* You can implement a mobile menu toggle here */}
            {/* Example: */}
            {/* <button onClick={toggleMobileMenu}>
              <i className="text-2xl text-white fas fa-bars"></i>
            </button> */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
