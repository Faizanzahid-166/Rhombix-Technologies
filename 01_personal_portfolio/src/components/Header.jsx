import React from 'react'
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className='w-full bg-blue-400 p-1 '>
        <div className='bg-gray-800 p-3 text-white grid grid-cols-2 gap-5 '>
            <div className='ml-5 p-1 col-span-1 '> 
              <h1 className='text-xl'>Rhombix Technologies</h1>
           </div>

           <nav  className="p-1 space-x-10 col-span-1 justify-self-end ">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
             <Link to="/todoapp">Todo APP</Link>
            <Link to="/contact">Contact</Link>
           
            {/* <Link to="/achievements">Achievements</Link> */}
           </nav>
        </div>
    </div>
  )
}

export default Header
