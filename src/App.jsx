import React, { useState, useEffect } from 'react';
import './App.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AboutMe from './components/AboutMe';

const App = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
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

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <header className="py-10">
        <div className="container mx-auto flex items-center justify-center">
          <img
            src="/profile-image.png"
            alt="Profile-img"
            className="w-16 h-16 rounded-full mr-4"
          />
          <div className="text-center">
            <h1 className="text-4xl font-bold">Oliver Garcia</h1>
            <p className="text-xl mt-2">Full Stack Developer</p>
          </div>
        </div>
      </header>
      <AboutMe />

      <section className="bg-gray-700 py-16">
        <div className="container mx-auto ">
          <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 ">
            {/* Project Cards */}
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">LinkUp</h3>
              <p className="text-gray-400 mb-4">
                LinkUp is a dynamic social media platform that I developed using
                MERN stack. The platform allows users to connect with each other
                and share updates.{' '}
              </p>
              <p className="text-gray-400 mb-4">
                {' '}
                The project utilizes React for the front-end, Node.js and
                Express for the back-end, and MongoDB for the database. For
                styling, I have selected Material UI and implemented a dark
                mode. Overall, LinkUp is a project that showcases my skills in
                web development and my ability to create complex applications
                using the MERN stack.
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
            <div className="bg-gray-600 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Dashboard</h3>
              <p className="text-gray-400 mb-4">
                The dashboard website I developed using MERN stack and Material
                UI is a powerful tool for businesses to visualize and track
                their key performance metrics. With a focus on clean design and
                intuitive navigation, this dashboard offers users an easy way to
                monitor a company's performance in real-time.
              </p>{' '}
              <p className="text-gray-400 mb-4">
                The front-end is built with React and Material UI, while the
                back-end is powered by Node.js and Express. MongoDB is used as
                the database to store the necessary data. Overall, the dashboard
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
            {/* <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-400 mb-4">Description of Project 3.</p>
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

      <section className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Connect with Me
          </h2>
          <div className="flex justify-center space-x-6">
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
      </section>

      <section className="bg-gray-700 py-16">
        <div className="container mx-auto flex flex-col sm:flex-row lg:flex-row items-center justify-center">
          <div className="text-center mx-8 my-2">
            <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
            <p className="text-gray-400 mb-8">Feel free to reach out!</p>
            <a
              href="mailto:ngarcia333@gmail.com"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl"
            >
              Send Email
            </a>
          </div>

          <div className="text-center mx-8 my-2">
            <h2 className="text-2xl font-semibold mb-4">View Full Resume</h2>
            <p className="text-gray-400 mb-8">Check it out!</p>
            <a
              href="../public/images/Oliver_Garcia_CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl"
            >
              See Resume
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">© {currentYear} Oliver Garcia</p>
      </footer>
    </div>
  );
};

export default App;
