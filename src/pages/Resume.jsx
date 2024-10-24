import React from 'react';

const Resume = () => {
  return (
      <div className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8">My Resume</h1>
          <div className="mb-4">
              <a
                  href="/resume.pdf"
                  download
                  className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
              >
                  Download Resume (PDF)
              </a>
          </div>
          <iframe
              src="/resume.pdf"
              title="Resume"
              className="w-full h-screen border-2 border-gray-300 rounded"
          ></iframe>
          <footer className="mt-12 py-4 border-t">
              <div className="container mx-auto text-center">
                  <a href="/public/impressum.html" className="text-blue-500 hover:underline">Impressum / Datenschutzerklärung</a>
              </div>
          </footer>
      </div>
  );
};

export default Resume;