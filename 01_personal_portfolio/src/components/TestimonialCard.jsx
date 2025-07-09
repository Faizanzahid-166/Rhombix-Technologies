import React from 'react';

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Senior Developer, Rhombix Technologies',
    feedback:
      'Faizan showed great initiative during his internship. His passion for frontend development is clearly visible through his consistent efforts and project delivery.',
  },
  {
    name: 'Ali Khan',
    role: 'Freelance Client',
    feedback:
      'Faizan built my website exactly as requested — responsive, fast, and clean. Very easy to work with and always met deadlines.',
  },
  {
    name: 'YouTube Mentor',
    role: 'Educator / Content Creator',
    feedback:
      'Faizan actively engaged with the course, built all projects, and even added improvements. Excellent learner and self-starter!',
  },
];

function Testimonials() {
  return (
    <section className="bg-black text-white py-10 px-6 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-8">Testimonials</h2>
      <div className="space-y-6">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-gray-900 p-5 rounded-xl shadow-md border border-gray-700"
          >
            <p className="text-gray-300 mb-4">"{t.feedback}"</p>
            <p className="text-white font-semibold">{t.name}</p>
            <p className="text-gray-500 text-sm">{t.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

