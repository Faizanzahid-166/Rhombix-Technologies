import { useEffect, useState } from 'react'
import {TodoProvider} from '../context'
import Todoform  from "../components/Todoform";
import Todoitem from "../components/Todoitem";

function App() {
  const [todos, setTodo] = useState([])
  
  // 1
  const addTodo = (todo) => {
    setTodo( (prev) => [...prev,{id: Date.now(),...todo}] )
  }

  //2
  const updateTodo = (id, todo) => {
    setTodo((prev) => prev.map((prevTodo) => ( prevTodo.id === id  ? todo : prevTodo)))
  }
 
  //3
  const deleteTodo = (id) => {setTodo((prev) => prev.filter((todo) => (todo.id !== id) ))}

  //4
  const toggleComplete = (id) => {setTodo((prev) => 
    prev.map((prevTodo) => 
    prevTodo.id === id ? 
    {...prevTodo,completed : !prevTodo.completed} : prevTodo))}

  // local-storage
  // useEffect(() => {
  //   const todos = JSON.parse(localStorage.getItem("todos"))

  //   if (todos && todos.length > 0) {
  //     setTodo(todos)
  //   }
  // }) ,[]

  // useEffect(() => {
  //   localStorage.setItem("todos", JSON.stringify(todos))
  // }),[todos]

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      setTodo(todos);
    }
  }, []); // ✅ Dependency array correctly placed
  
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]); // ✅ Dependency array correctly placed

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>

      <div className='w-1/2 bg-gray-600 bg-opacity-20 rounded-lg m-auto mt-20 p-7 '>

        <h1 className='text-2xl'> TODO LISTS</h1>

        <div className='w-full mb-2 '><Todoform /></div>

        {todos.map((todo) => (
        <div key={todo.id} className='w-full mb-2 '>
        <Todoitem todo={todo} />
        </div>))}
        
      </div>
    </TodoProvider>
  )
}

export default App
