import React from 'react';

function Contact() {
  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      <section className="p-6 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>

        {/* Contact Info */}
        <div className="mb-8 space-y-3 text-gray-300">
          <p>
            📧 Email:{' '}
            <a
              href="mailto:faizanzahid166@gmail.com"
              className="text-blue-400 hover:underline"
            >
              faizanzahid166@gmail.com
            </a>
          </p>
          <p>
            🔗 LinkedIn:{' '}
            <a
              href="https://www.linkedin.com/in/faizanzahid166"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/faizanzahid166
            </a>
          </p>
          <p>
            💻 GitHub:{' '}
            <a
              href="https://github.com/faizanzahid-166"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              github.com/faizanzahid-166
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your name"
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full bg-gray-800 text-white border border-gray-600 p-2 rounded focus:outline-none focus:border-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
