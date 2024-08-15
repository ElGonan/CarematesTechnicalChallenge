
import { useEffect, useState } from 'react'
import Tasks from './model/tasks'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
import Button from './components/Button'
function App() {
  // const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [tasks, setTasks] = useState([])

  const buttonload = () => {
    console.log("imhere")
    setIsActive(false)
    // now i want that after 5 seconds the button should be active again
    setTimeout(() => {
      setIsActive(true)
    }, 5000)  
  }

  return (
    <>
      <div className=' bg-gray-300 rounded-lg px-8 py-8 border shadow-lg shadow-white'>
        <div className='flex'>
            <div className='w-full'>
              <input placeholder='Add text here my man.' className='w-full h-full border border-gray-300 rounded-lg pl-2' maxLength={200}/>
            </div>
            <Button onClick={buttonload} disabled={!isActive}>Add task</Button>
        </div>
      </div>
      <div>
        <div className='mt-12'>
          {tasks ? Tasks.map((task) => (
            <div key={task.id} className={task.done ? ' bg-green-300 rounded-lg px-8 py-8 border shadow-lg shadow-lime-500 mb-4 ' : 'bg-gray-300 rounded-lg px-8 py-8 border shadow-lg shadow-white mb-4'}>
              <div className='flex'>
              <div className='w-full flex justify-center items-center'>
                <p className='text-white'>{task.task}</p>
              </div>
              {task.done ?  
              <div> 
                  <Button onClick={buttonload} disabled={!isActive} color='bg-red-500' hoverColor='bg-red-700'>Delete</Button>
              </div>
              
                : 
              <div>
                <Button onClick={buttonload} disabled={!isActive} color='bg-red-500' hoverColor='bg-red-700'>Delete</Button>
                <Button onClick={buttonload} disabled={!isActive} >Done</Button>
              </div> }

              </div>
            </div>
          )) : <h1 className='text-gray-300 text-xl'>No tasks available</h1> }
        </div>
      </div>
    </>
    
  )
}

export default App
