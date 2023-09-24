import React, { useState, useEffect } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }

      // Determine the active section based on scroll position
      const aboutSection = document.getElementById('about-section');
      const projectsSection = document.getElementById('projects-section');
      const contactSection = document.getElementById('contact-section');

      if (
        aboutSection &&
        window.scrollY >= aboutSection.offsetTop &&
        window.scrollY < projectsSection.offsetTop
      ) {
        setActiveSection('about-section');
      } else if (
        projectsSection &&
        window.scrollY >= projectsSection.offsetTop &&
        window.scrollY < contactSection.offsetTop
      ) {
        setActiveSection('projects-section');
      } else if (contactSection && window.scrollY >= contactSection.offsetTop) {
        setActiveSection('contact-section');
      } else {
        setActiveSection('');
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
          <div className="flex items-center">
            <img
              src="../../images/NavLogo.png"
              alt="Logo"
              className={`w-10 h-10 mx-4 ${
                scrolling ? 'logo-scrolling' : 'logo-not-scrolling'
              }`}
              style={{ filter: 'invert(100%)' }}
            />
            <span
              className={`text-lg md:text-xl font-semibold text-white ${
                scrolling ? 'icon-scrolling' : 'icon-not-scrolling'
              }`}
            >
              OLIVER GARCIA
            </span>
          </div>

          <div className="hidden space-x-6 md:flex">
            <Link
              to="about-section"
              className={`text-white hover:text-gray-400 ${
                activeSection === 'about-section' ? 'bg-gray-600' : ''
              }`}
              smooth={true}
              duration={700}
            >
              <button
                className="text-white bg-transparent border-none outline-none focus:outline-none"
                style={{ cursor: 'pointer' }}
              >
                About
              </button>
            </Link>
            <Link
              to="projects-section"
              className={`text-white hover:text-gray-400 ${
                activeSection === 'projects-section' ? 'bg-gray-600' : ''
              }`}
              smooth={true}
              duration={700}
            >
              <button
                className="text-white bg-transparent border-none outline-none focus:outline-none"
                style={{ cursor: 'pointer' }}
              >
                Projects
              </button>
            </Link>
            <Link
              to="contact-section"
              className={`text-white hover:text-gray-400 ${
                activeSection === 'contact-section' ? 'bg-gray-600' : ''
              }`}
              smooth={true}
              duration={700}
            >
              <button
                className="text-white bg-transparent border-none outline-none focus:outline-none"
                style={{ cursor: 'pointer' }}
              >
                Contact
              </button>
            </Link>
          </div>

          <div className="md:hidden">
            {/* Implement your mobile menu toggle here */}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
