import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from '@iconify/react';
import { Linkedin, User } from 'lucide-react';
import Footer from "../components/Footer.jsx";

const skillGroups = [
  {
    name: 'Backend (Java)',
    skills: [
      { name: 'Java', icon: 'logos:java' },
      { name: 'Quarkus', icon: 'logos:quarkus-icon' },
      { name: 'Spring Boot', icon: 'logos:spring-icon' },
    ]
  },
  {
    name: 'Frontend',
    skills: [
      { name: 'React', icon: 'logos:react' },
      { name: 'Vue.js', icon: 'logos:vue' },
      { name: 'TypeScript', icon: 'logos:typescript-icon' },
      { name: 'JavaScript', icon: 'logos:javascript' },
      { name: 'TailwindCSS', icon: 'logos:tailwindcss-icon' },
      { name: 'Bootstrap', icon: 'logos:bootstrap' },
    ]
  },
  {
    name: 'DevOps & Tools',
    skills: [
      { name: 'Maven', icon: 'logos:maven' },
      { name: 'Gradle', icon: 'logos:gradle' },
      { name: 'Git', icon: 'logos:git-icon' },
      { name: 'Linux', icon: 'logos:linux-tux' },
      { name: 'SQL', icon: 'logos:mysql' },
    ]
  },
  {
    name: 'Other Languages',
    skills: [
      { name: 'C++', icon: 'logos:c-plusplus' },
      { name: 'Python', icon: 'logos:python' },
      { name: 'C#', icon: 'logos:c-sharp' },
      { name: 'Kotlin', icon: 'logos:kotlin-icon' },
      { name: 'PHP', icon: 'logos:php' },
    ]
  },
];

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
          <div className="w-64 h-64 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="w-32 h-32 text-gray-400" />
          </div>
        </div>
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-4">Erik's Software Developer Portfolio</h1>
          <p className="text-xl mb-4">
            Hi, I'm Erik, a passionate software developer with expertise in a wide range of technologies. 
            I specialize in building robust and scalable applications using modern frameworks and tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Projects</Link>
            <Link to="/resume" className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">View Resume</Link>
            <a 
              href="https://www.linkedin.com/in/erik-klein1/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              <Linkedin className="w-4 h-4 mr-2" />
              Goto LinkedIn
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      {skillGroups.map((group) => (
        <div key={group.name} className="mb-6">
          <h3 className="text-xl font-semibold mb-2">{group.name}</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
            {group.skills.map((skill) => (
              <div key={skill.name} className="flex flex-col items-center group">
                <div className="bg-gray-100 p-2 rounded-full">
                  <Icon icon={skill.icon} className="w-8 h-8" />
                </div>
                <span className="mt-1 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default Home;
