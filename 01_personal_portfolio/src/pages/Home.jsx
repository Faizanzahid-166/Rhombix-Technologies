import React from 'react'
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section className="min-h-screen flex flex-col md:flex-row items-center justify-between gap-10 px-6 md:px-16 py-10 bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Left: Text Section */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-4xl font-bold text-gray-800 leading-tight">
          Hi, I'm <p className="text-blue-600 text-5xl">Muhammad Faizan Zahid</p>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          A passionate <strong>Frontend Developer</strong> specialized in building responsive,
          user-focused web apps using <strong>React</strong>, <strong>JavaScript</strong>, and <strong>Tailwind CSS</strong>.
        </p>
        <p className="mt-2 text-gray-600">
          Currently learning full-stack development with <strong>Laravel</strong> and <strong>MERN Stack</strong>. I love solving problems
          and creating digital experiences that people enjoy using.
        </p>

        {/* Call to Action */}
        <div className="mt-6 flex gap-4">
          <Link
            to="/contact"
            className="px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition"
          >
            Contact Me
          </Link>
          <Link
            to="/projects"
            className="px-6 py-2 border border-blue-600 text-blue-600 font-medium rounded hover:bg-blue-50 transition"
          >
            View Projects
          </Link>
           <Link
            to="/todoapp"
            className="px-6 py-2 border border-green-600 text-green-600 font-medium rounded hover:bg-blue-50 transition"
          >
            Todo app
          </Link>
        </div>
      </div>

      {/* Right: Profile Image (optional) */}
      <div className="flex-1 flex justify-center">
        <img
          src="https://avatars.githubusercontent.com/u/140235502?v=4" // Replace with your own photo or local image
          alt="Faizan Zahid"
          className="w-64 h-64 rounded-full border-4 border-blue-600 shadow-lg object-cover"
        />
      </div>
    </section>
  );

}

export default Home
