import React from 'react';

function Experience() {
  const experiences = [
    {
      company: "Rhombix Technologies",
      role: "Frontend Developer Intern",
      period: "2025 – Present",
      contributions: [
        "Developed interactive frontend components using React and Tailwind CSS.",
        "Created real-time mini-projects including a password generator and background color changer.",
        "Worked independently and shared project videos/explanations on LinkedIn.",
      ],
    },
    {
      company: "Independent Developer",
      role: "Junior Web Developer (Self-Learning)",
      period: "2023 – Present",
      contributions: [
        "Built multiple projects using JavaScript and React, including theme changers and counter apps.",
        "Practiced backend development using PHP, Laravel, MongoDB, and Express.js.",
        "Focused on clean, scalable code and responsive UI design.",
        "HTML5 & CSS3: Clean, semantic markup and modern, responsive designs using Flexbox, Grid, and media queries.",
        "JavaScript (ES6+): DOM manipulation, event handling, form validation, and dynamic user interactions",
        "React.js: Reusable components, state management (useState, useEffect), props, and conditional rendering",
        "PHP & Laravel: Crafting clean, maintainable, and modular code using the Laravel framework. I build RESTful APIs,authentication systems, dashboards, and more",
        "SQL (MySQL/PostgreSQL): Designing optimized database schemas, writing complex queries, stored procedures, and handling data migrations.",
        "MongoDB & Mongoose: NoSQL expert for flexible, scalable database solutions. I design efficient schemas using Mongoose and integrate seamlessly with Node.js apps",
        "Express.js: Lightweight and powerful server-side applications with Express. From middleware setup to custom route handling, I ensure your backend is fast and secure."
      ],
    },
  ];

  return (
    <section className="min-h-screen bg-black text-white p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Experience</h1>
      {experiences.map((exp, index) => (
        <div key={index} className="mb-8 border-b border-gray-700 pb-6">
          <h2 className="text-xl font-semibold ">{exp.role}</h2>
          <span className="text-gray-400">{exp.company}</span>
          <span className="text-sm text-gray-500 mb-3">{exp.period}</span>
          
          <ol className="list-decimal list-inside space-y-1 text-gray-300 mb-3">
            {exp.contributions.map((item, idx) => (
              <li className='text-left' key={idx}>{item}</li>
            ))}
          </ol>

          {exp.skills && (
            <>
              <h3 className="text-lg font-semibold mt-4 mb-2">Technical Focus:</h3>
              <ul className="list-disc text-left list-inside space-y-2 text-gray-400">
                {exp.skills.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </>
          )}
        </div>
      ))}
    </section>
  );
}

export default Experience;
