import React, { useState } from 'react'
import { useTodo } from '../context'

function Todoitem({todo}) {
  const [todoeditable, setTodoeditable] = useState(false)
  const [todomsg, setTodomsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete}  = useTodo()

  const editTodo = ()  => {
    updateTodo(todo.id, {...todo,todo: todomsg})
    setTodoeditable(false)
  }

  const toggleCompleted = () => {
    toggleComplete(todo.id)
  }
  return (
   <div className='flex'> 

    <div >
      <input type="checkbox" 
             className='cursor-pointer m-1' 
             checked={todo.completed} 
             onChange={toggleCompleted} />

      <input type="text" value={todomsg}  
             readOnly={!todoeditable} 
             onChange={(e) => setTodomsg(e.target.value)}
             className={`w-98 border rounded-2xl p-2 outline-none bg-gray-300 duration-150 
             ${todo.completed ? 'line-through text-green-700' : 'text-black'}`}/>

      <button className=' text-black bg-gray-600 rounded-2xl hover:bg-green-600 ml-2 p-3 shrink-0' 
              disabled={todo.completed} onClick={() => {
               if (todo.completed) return;
               if (todoeditable) {
               editTodo();
               }else setTodoeditable((prev) => !prev);}}>
               {todoeditable ? "save" : "edit"}
      </button>
        
        <button className=' text-black bg-red-600 rounded-2xl hover:bg-red-700 m-1 p-3 shrink-0' 
                onClick={() => deleteTodo(todo.id)}> 
                delete
        </button>
    </div>
  </div>
  )
}

export default Todoitem
