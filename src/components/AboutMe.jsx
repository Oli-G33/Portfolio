import React from 'react';

const AboutMe = () => {
  return (
    <section className="bg-gray-800 py-16">
      <div className="container mx-auto text-justify ">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">
          About Me
        </h2>
        <p className="text-gray-400 mb-4 px-8">
          Hi there! I'm a passionate web developer who is excited to embark on
          this journey of creating amazing digital experiences. While I may not
          have professional experience yet, my enthusiasm for coding and
          problem-solving knows no bounds.
        </p>
        <p className="text-gray-400 mb-4 px-8">
          Beyond the world of coding, you can often find me exploring the great
          outdoors. Hiking is one of my favorite pastimes, and I love
          challenging myself with new trails and breathtaking vistas. When I'm
          not on an adventure, I'm a self-proclaimed foodie who enjoys trying
          out new restaurants and experimenting with cooking at home.
        </p>
        <p className="text-gray-400 mb-4 px-8">
          But perhaps my greatest joy in life is spending time with my wonderful
          wife and our adorable dog. They bring boundless happiness and
          inspiration to my life, and I'm grateful for every moment we share
          together.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
