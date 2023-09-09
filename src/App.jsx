import React, { useState, useEffect } from 'react';
import './App.css';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles

const App = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const project1Images = [
    '/project1-image1.jpg',
    '/project1-image2.jpg',
    '/project1-image2.jpg'
  ];
  const project2Images = ['/project2-image1.jpg', '/project2-image2.jpg'];
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

      <section className="bg-gray-800 py-16">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-center mb-8">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Cards */}
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400 mb-4">Description of Project 1.</p>
              <Carousel showArrows={true} dynamicHeight={false}>
                {project1Images.map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl} alt={`Project 1 Image ${index + 1}`} />
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
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 2</h3>
              <p className="text-gray-400 mb-4">Description of Project 2.</p>
              <Carousel showArrows={true} dynamicHeight={false}>
                {project1Images.map((imageUrl, index) => (
                  <div key={index}>
                    <img src={imageUrl} alt={`Project 2 Image ${index + 1}`} />
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
            </div>
            <div className="bg-gray-700 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Project 3</h3>
              <p className="text-gray-400 mb-4">Description of Project 3.</p>
              <Carousel showArrows={true} dynamicHeight={false}>
                {project1Images.map((imageUrl, index) => (
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
            </div>
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
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Contact Me</h2>
          <p className="text-gray-400 mb-8">Feel free to reach out!</p>
          <a
            href="mailto:ngarcia333@gmail.com"
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-full text-xl"
          >
            Email Me
          </a>
        </div>
      </section>

      <footer className="bg-gray-800 py-4 text-center">
        <p className="text-gray-400">© {currentYear} Oliver Garcia</p>
      </footer>
    </div>
  );
};

export default App;
