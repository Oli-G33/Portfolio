import React, { useState, useEffect } from 'react';
import './App.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutMe from './components/AboutMe';
import 'animate.css';
import HeroSection from './components/Hero';
import Navbar from './components/Navbar';
import Projects from './components/Projects';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const App = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <Navbar />
      <div className="min-h-screen text-white bg-gray-900">
        <header>
          <HeroSection />
        </header>

        <AboutMe />

        <Projects />

        <section
          id="contact-section"
          className="min-h-screen pt-16 bg-gray-800"
        >
          <div className="container mx-auto">
            <h2 className="mb-8 text-2xl font-semibold text-center">
              Connect with Me
            </h2>
            <div className="flex justify-center mt-2 mb-10 space-x-6">
              <a
                href="https://github.com/Oli-G33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsGithub className="w-12 h-12" />
              </a>
              <a
                href="https://www.linkedin.com/in/oliver-garcia3/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-12 h-12" />
              </a>
            </div>
          </div>

          <div className="container flex flex-col items-center justify-center py-16 mx-auto bg-gray-700 sm:flex-row lg:flex-row">
            <div className="mx-8 my-2 text-center">
              <h2 className="mb-4 text-2xl font-semibold">Contact Me</h2>
              <p className="mb-8 text-gray-400">Feel free to reach out!</p>
              <a
                href="mailto:ngarcia333@gmail.com"
                className="px-6 py-3 text-xl text-white bg-blue-500 rounded-full hover:bg-blue-600"
              >
                Send Email
              </a>
            </div>

            <div className="mx-8 my-2 mt-8 text-center sm:mt-2">
              <h2 className="mb-4 text-2xl font-semibold">View Full Resume</h2>
              <p className="mb-8 text-gray-400">Take a Look!</p>
              <a
                href="../images/Oliver_Garcia_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-xl text-white bg-blue-500 rounded-full hover:bg-blue-600"
              >
                See Resume
              </a>
            </div>
          </div>
        </section>

        <footer className="py-4 text-center bg-gray-800">
          <div className="my-4">
            <Link to="hero-section" smooth={true} duration={700}>
              <FontAwesomeIcon
                icon={faRocket}
                style={{
                  color: 'white',
                  fontSize: '36px',
                  cursor: 'pointer'
                }}
                title="Beam me up, Scotty!"
              />
            </Link>
          </div>

          <p className="text-gray-400">© {currentYear} Oliver Garcia</p>
        </footer>
      </div>
    </>
  );
};

export default App;
