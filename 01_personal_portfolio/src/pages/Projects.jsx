import React,{useState} from 'react'

function Projects() {
  const projects = [
  {
    title: 'Color Changer',
    description: 'A simple app that allows users to change the background color with a click.',
    role: 'Frontend Developer',
    tech: ['HTML', 'CSS', 'JavaScript'],
    outcome: 'Practiced DOM manipulation and event handling.',
  },
  {
    title: 'Weather App',
    description: 'Fetches real-time weather data based on user’s location or input.',
    role: 'Frontend Developer',
    tech: ['React', 'OpenWeather API', 'CSS'],
    outcome: 'Improved skills in API integration and async handling.',
  },
  {
    title: 'Signup Form',
    description: 'User registration form with validation and error handling.',
    role: 'Frontend Developer',
    tech: ['HTML', 'CSS', 'JavaScript'],
    outcome: 'Learned form validation and UX best practices.',
  },
  {
    title: 'To-Do List',
    description: 'CRUD operations for managing daily tasks.',
    role: 'Full Stack Developer',
    tech: ['React', 'LocalStorage'],
    outcome: 'Built a reusable component-based structure.',
  },
  {
    title: 'Counter App',
    description: 'Basic app to increment, decrement, and reset a counter.',
    role: 'Frontend Developer',
    tech: ['React', 'Hooks'],
    outcome: 'Practiced useState and component logic.',
  },
  {
    title: 'Password Generator',
    description: 'Generates strong random passwords based on user-selected criteria.',
    role: 'Frontend Developer',
    tech: ['JavaScript', 'HTML', 'CSS'],
    outcome: 'Enhanced logic-building and string manipulation skills.',
  },
  {
    title: 'Currency Converter',
    description: 'Converts currencies using real-time exchange rates.',
    role: 'Frontend Developer',
    tech: ['React', 'REST API', 'CSS'],
    outcome: 'Learned API handling and responsive design.',
  },
];

const skills = [
  'JavaScript (ES6+)', 'React.js', 'HTML5', 'CSS3', 'Laravel' , 'Express.js' , 'MongoDB',
  'Authentication systems', 'MYSQL' , 'PHP', 'Node.js', 'Mongoose', 'Optimized database schemas', 'Complex queries',
  'API Integration', 'DOM Manipulation', 'Form Validation',
  'Git & GitHub', 'Responsive Design', 'LocalStorage' ,
];

const education = [
  {
    title: 'MATRIC (SCIENCE)',
    institution: 'GOVT. HIGHER SECONDARY SCHOOL DINA',
    year: '  YEAR 2019',
  },
  {
    title: 'INTERMEDIATE (PRE-ENGINEERING)',
    institution: 'GOVT. HIGHER SECONDARY SCHOOL DINA',
    year: ' YEAR 2021',
  },
  {
    title: 'WEB DEVELOPMENT (CERTIFICATE)',
    institution: 'PI TECHNICAL INSTITUTE ISLAMABAD',
    year: 'YEAR 2023',
  },
   {
    title: 'Web Development (MERN STACK)',
    institution: 'Nationwide IT Skillsets Expansion Program (NITSEP)',
    year: 'YEAR 2023',
  },
  {
    title:'Relevant coursework: Advanced Programming HTML, CSS, JAVASCRIPT and REACT.'
  }
];

   const [activeTab, setActiveTab] = useState('projects');

  return (
    <div className="min-h-screen bg-black text-white p-6 max-w-5xl mx-auto">
      {/* Toggle Buttons */}
      <div className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab('projects')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'projects' ? 'bg-white text-black' : 'bg-gray-800 text-white'
          }`}
        >
          Projects
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'skills' ? 'bg-white text-black' : 'bg-gray-800 text-white'
          }`}
        >
          Skills
        </button>
         <button
          onClick={() => setActiveTab('education')}
          className={`px-4 py-2 rounded-md font-semibold transition ${
            activeTab === 'education' ? 'bg-white text-black' : 'bg-gray-800'
          }`}
        >
          Education
        </button>
      </div>

      {/* Projects Section */}
      {activeTab === 'projects' && (
        <div className="grid gap-6">
          {projects.map((project, index) => (
            <div key={index} className="bg-gray-900 rounded-xl p-5">
              <h3 className="text-xl font-bold mb-1">{project.title}</h3>
              <p className="mb-1">{project.description}</p>
              <p className="mb-1">Role: {project.role}</p>
              <p className="mb-1">Tech Used: {project.tech.join(', ')}</p>
              <p>Outcome: {project.outcome}</p>
            </div>
          ))}
        </div>
      )}

      {/* Skills Section */}
      {activeTab === 'skills' && (
        <div className="flex flex-wrap gap-3 mt-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium"
            >
              {skill}
            </span>
          ))}
        </div>
      )}

      
      {/* Education Section */}
      {activeTab === 'education' && (
        <div className="space-y-5 mt-4">
          {education.map((item, index) => (
            <div key={index} className="bg-gray-900 p-5 rounded-xl">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-400">{item.institution}</p>
              <p className="text-gray-500 text-sm">{item.year}</p>
              
            </div>
          ))}
        </div>
      )}


    </div>
    
    
  );
}

export default Projects
