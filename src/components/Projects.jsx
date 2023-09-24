import React from 'react';
import { Carousel } from 'react-responsive-carousel';

const Projects = () => {
  const project1Images = [
    './images/project1-image1.png',
    './images/project1-image2.png',
    './images/project1-image3.png'
  ];
  const project2Images = [
    './images/project2-image1.png',
    './images/project2-image2.png',
    './images/project2-image3.png'
  ];
  const project3Images = ['/project3-image1.jpg', '/project3-image2.jpg'];

  return (
    <section id="projects-section" className="py-16 bg-gray-700">
      <div className="container mx-auto ">
        <h2 className="mb-8 text-2xl font-semibold text-center">Projects</h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 ">
          {/* Project Cards */}
          <div className="p-6 bg-gray-600 rounded-lg shadow-md">
            <h3 className="mb-2 text-xl font-semibold">LinkUp</h3>
            <p className="mb-4 text-gray-400">
              LinkUp is a dynamic social media platform that I developed using
              MERN stack. The platform allows users to connect with each other
              and share updates.{' '}
            </p>
            <p className="mb-4 text-gray-400">
              {' '}
              The project utilizes React for the front-end, Node.js and Express
              for the back-end, and MongoDB for the database. For styling, I
              have selected Material UI and implemented a dark mode. Overall,
              LinkUp is a project that showcases my skills in web development
              and my ability to create complex applications using the MERN
              stack.
            </p>
            <Carousel
              showArrows={true}
              dynamicHeight={false}
              infiniteLoop={true}
            >
              {project1Images.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Project 1 Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <a
              href="https://linkup-gjpb.onrender.com/"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </div>
          <div className="p-6 bg-gray-600 rounded-lg shadow-md">
            <h3 className="mb-2 text-xl font-semibold">Dashboard</h3>
            <p className="mb-4 text-gray-400">
              The dashboard website I developed using MERN stack and Material UI
              is a powerful tool for businesses to visualize and track their key
              performance metrics. With a focus on clean design and intuitive
              navigation, this dashboard offers users an easy way to monitor a
              company's performance in real-time.
            </p>{' '}
            <p className="mb-4 text-gray-400">
              The front-end is built with React and Material UI, while the
              back-end is powered by Node.js and Express. MongoDB is used as the
              database to store the necessary data. Overall, the dashboard
              website is a valuable tool for businesses looking to track and
              visualize their performance metrics in a user-friendly and
              efficient way.
            </p>
            <Carousel
              showArrows={true}
              dynamicHeight={false}
              infiniteLoop={true}
            >
              {project2Images.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Project 2 Image ${index + 1}`} />
                </div>
              ))}
            </Carousel>
            <a
              href="https://schnell-finder.onrender.com/dashboard"
              className="text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View project
            </a>
          </div>
          {/* <div className="p-6 bg-gray-700 rounded-lg shadow-md">
        <h3 className="mb-2 text-xl font-semibold">Project 3</h3>
        <p className="mb-4 text-gray-400">Description of Project 3.</p>
        <Carousel showArrows={true} dynamicHeight={false}>
          {project3Images.map((imageUrl, index) => (
            <div key={index}>
              <img src={imageUrl} alt={`Project 3 Image ${index + 1}`} />
            </div>
          ))}
        </Carousel>
        <a
          href="#"
          className="text-blue-400 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub
        </a>
      </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
