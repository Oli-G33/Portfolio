import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faKeyboard,
  faMountainSun,
  faPaw
} from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const AboutMe = () => {
  return (
    <section id="about-section" className="min-h-screen px-16 py-8 bg-gray-800">
      <div className="container grid items-center grid-cols-1 gap-8 mx-auto text-center">
        <div>
          <img
            src="/profile-image.png"
            alt="Profile-img"
            className="w-24 h-24 mx-auto mb-4 rounded-full"
          />
          <h2 className="text-2xl font-semibold text-white">About Me</h2>
        </div>
        <div className="text-center md:px-8">
          <p className="mb-4 text-gray-400 ">
            Hi there! I'm a passionate web developer who is excited to embark on
            this journey of creating amazing digital experiences. While I may
            not have professional experience yet, my enthusiasm for coding and
            problem-solving knows no bounds.
          </p>
          <p className="mb-4 text-gray-400">
            Beyond the world of coding, you can often find me exploring the
            great outdoors. Hiking is one of my favorite pastimes, and I love
            challenging myself with new trails and breathtaking vistas. When I'm
            not on an adventure, I'm a self-proclaimed foodie who enjoys trying
            out new restaurants and experimenting with cooking at home.
          </p>
          <p className="mb-4 text-gray-400">
            But perhaps my greatest joy in life is spending time with my
            wonderful wife and our adorable dog. They bring boundless happiness
            and inspiration to my life, and I'm grateful for every moment we
            share together.
          </p>
        </div>
        <div className="flex justify-center my-6">
          <div className="flex flex-col mx-16 ">
            <FontAwesomeIcon
              icon={faKeyboard}
              style={{ color: '#ffffff', fontSize: '64px' }}
              className="flip-on-hover"
            />
            <small>Web Developer</small>
          </div>
          <div className="flex flex-col">
            <FontAwesomeIcon
              icon={faMountainSun}
              style={{ color: '#ffffff', fontSize: '60px' }}
              className="spin"
            />
            <small className="mt-1">Nature Explorer</small>
          </div>
          <div className="flex flex-col mx-16">
            <FontAwesomeIcon
              icon={faPaw}
              flip="horizontal"
              style={{
                '--fa-primary-color': '#ffffff',
                '--fa-secondary-color': '#f4f5f5',
                fontSize: '60px'
              }}
              className="bounce-on-hover"
            />
            <small className="mt-1">Animal Enthusiast</small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
