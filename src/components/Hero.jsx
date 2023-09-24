import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section
      id="hero-section"
      className="relative h-screen bg-center bg-cover hero bg-hero-image"
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-center">
          <h1 className="my-2 font-bold text-8xl">Hi,I'm Oliver</h1>
          <p className="mb-16 text-2xl">Web Developer and DevOps Enthusiast</p>
        </div>
        <Link
          className="text-white transition-colors duration-300 hover:text-white"
          to="about-section"
          style={{ position: 'absolute', bottom: '90px' }}
          smooth={true}
          duration={700}
        >
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ color: '#e0e2e6', fontSize: '32px' }}
          />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
