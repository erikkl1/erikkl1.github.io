import React from 'react';
import Footer from "../components/Footer.jsx";

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style task management application using Vue.js and Firebase.',
    technologies: ['Vue.js', 'Firebase', 'Vuex'],
  },
  {
    title: 'Weather Forecast App',
    description: 'A weather forecast application using React Native and OpenWeatherMap API.',
    technologies: ['React Native', 'Redux', 'OpenWeatherMap API'],
  },
];

const Projects = () => {
  return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8">My Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap">
                    {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex}
                              className="bg-blue-100 text-blue-800 text-sm font-semibold mr-2 mb-2 px-2.5 py-0.5 rounded">
                    {tech}
                  </span>
                    ))}
                  </div>
                </div>
              </div>
          ))}
        </div>
          <Footer/>
      </div>
  );
};

export default Projects;