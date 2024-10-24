import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white p-4 border-b">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black text-xl font-bold">Erik's Portfolio</Link>
        <div className="space-x-4">
          <Link to="/" className="text-black hover:text-gray-600">Home</Link>
          <Link to="/projects" className="text-black hover:text-gray-600">Projects</Link>
          <Link to="/resume" className="text-black hover:text-gray-600">Resume</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;