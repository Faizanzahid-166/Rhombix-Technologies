import React from 'react';

const blogPosts = [
  {
    title: 'Understanding useEffect in React',
    description: 'A beginner-friendly guide on how useEffect works and common pitfalls.',
    link: 'https://react.dev/reference/react/useEffect',
  },
  {
    title: 'Async/Await in JavaScript Explained Simply',
    description: 'Learn how asynchronous code works with real-world examples.',
    link: 'https://www.w3schools.com/js/js_async.asp',
  },
  {
    title: 'How to Build a Responsive Layout with Flexbox',
    description: 'CSS Flexbox made easy for modern layout designs.',
    link: 'https://tailwindcss.com/docs/flex',
  },
  {
    title: 'JWT Authentication in Node.js',
    description: 'Step-by-step guide to securing your backend APIs using JWT.',
    link: 'https://jwt.io/',
  },
  {
    title: 'Using the React-Router',
    description: 'Route objects define the behavior of a route beyond just the path and component, like data loading and actions. ',
    link: 'https://reactrouter.com/start/data/routing',
  },
];

export default function Blog() {
  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-6">Blog / Articles</h2>

      <div className="grid gap-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-gray-900 p-5 rounded-xl hover:bg-gray-800 transition"
          >
            <h3 className="text-xl font-semibold mb-1">{post.title}</h3>
            <p className="text-gray-400">{post.description}</p>
            <span className="text-blue-400 mt-2 inline-block">Read More →</span>
          </a>
        ))}
      </div>
    </div>
  );
}
