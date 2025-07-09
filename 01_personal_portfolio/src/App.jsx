import {Header} from './components/index.js'
import {Outlet} from 'react-router-dom'
import './App.css'

function App() {

  return   (
    <div className='min-h-screen  text-white bg-gray-400  flex flex-wrap content-between'>
      <div className='w-full block'>
        <Header />
     
      <main className='text-center'>
        <Outlet/>
      </main>
       </div>
    </div>
  ) 

}

export default App
