
import { useEffect, useState, useRef } from 'react'
import Tasks from './model/tasks'
// import Card from './components/Card'
import Button from './components/Button'
function App() {
  // const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(true)
  const [tasks, setTasks] = useState([])
  const messageRef = useRef()

  const buttonload = async(e) => {
    setIsActive(false)
    e.preventDefault();
    console.log(messageRef.current.value)

    let data = {
      task: messageRef.current.value,
      done: false
    }

    try {
      await Tasks.addTask(data)
      setTasks([...tasks, data])
    } catch (error) {
      console.log(error)
    }
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
              <input type='text' ref={messageRef} placeholder='Add text here my man.' className='w-full h-full border border-gray-300 rounded-lg pl-2' maxLength={200}/>
            </div>
            <Button type='submit' onClick={buttonload} disabled={!isActive}>Add task</Button>
        </div>
      </div>
      <div>
        <div className='mt-12'>
          {tasks ? tasks.map((task) => (
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
