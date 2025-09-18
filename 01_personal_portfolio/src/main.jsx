import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import {Home, Blog, Contact, Experience, Projects, Achievements, TodoApp} from './pages/index.js'
import { TestimonialCard } from "./components/index.js";

  const  router = createBrowserRouter([
   {
    path: "/",
    element:  <App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/blog",
        element:<Blog/>
      },
      {
        path:"/contact",
        element:<Contact/>
      },{
        path:"/experience",
        element:<Experience/>
      },
      {
        path:"/projects",
        element:<Projects/>
      },
      {
        path:"/achievements",
        element:<Achievements />
      },
      {
        path:"/testimonialCard",
        element:<TestimonialCard />
      },
      {
        path:"/todoapp",
        element:<TodoApp />
      }

    ]  
  }

  ],
  {
    basename: "/Rhombix-Technologies/01_personal_portfolio", // 👈 Important
  }
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
