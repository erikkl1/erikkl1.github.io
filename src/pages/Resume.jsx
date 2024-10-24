import React from 'react';
import cv from '../cv.pdf'
import Footer from "../components/Footer.jsx";

const Resume = () => {
  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">My Resume</h1>
          <div className="mb-4">
              <a
                  href={cv}
                  download
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                  Download Resume (PDF)
              </a>
          </div>
          <iframe
              src={cv}
              title="Resume"
              className="w-full h-screen border-2 border-gray-300 rounded"
          ></iframe>
          <Footer/>
      </div>
  );
};

export default Resume;