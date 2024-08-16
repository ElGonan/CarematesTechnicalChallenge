import { useEffect, useState, useRef } from 'react'
import Tasks from './model/tasks'
import Card from './components/Card'
import Button from './components/Button'

function App() {
  const [isActive, setIsActive] = useState(true)
  const [tasks, setTasks] = useState([])
  const [areTasks, setAreTasks] = useState(false)
  const messageRef = useRef()

  // This function is for the button to load the task into the DB.
  const buttonload = async(e) => {

    // This is to prevent the button from being clicked multiple times.
    setIsActive(false)
    if (messageRef.current.value === '') {
      alert('Please enter a task')
      setIsActive(true)
      return
    }

    // This is the data that is going to be sent to the DB.
    let data = {
      task: messageRef.current.value,
      done: false
    }

    // This is the try catch block to add the task to the DB.
    try {
      await Tasks.addTask(data)
    } catch (error) {
      console.log(error)
    }
    setIsActive(true)

    // This is to clear the input field after the task is added.
    messageRef.current.value = ''

    // This is to get the tasks from the DB.
    getTasks()
  }

  // This function is to get the tasks from the DB.
  const getTasks = async() => {
    const data = await Tasks.getTasks()
    setTasks(data)

    // This is to check if there are tasks in the DB. If there are none, it will display a message.
    if (data.length > 0) {
      setAreTasks(true)
    } else {
      setAreTasks(false)
    }
  }

  // This function is to delete a task from the DB.
  const deleteTask = async(id) => {
    try {
      await Tasks.deleteTask(id)
      setTasks(tasks.filter(task => task.id !== id))
    } catch (error) {
      console.log(error)
    }
    getTasks()
  }

  // This function is to mark a task as done.
  const doneTask = async(id) => {
    try {
      await Tasks.doneTask(id)
    } catch (error) {
      console.log(error)
    }
    getTasks()
  }

  // This is to get the tasks from the DB when the page loads.
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
      <div className=' bg-gray-300 rounded-lg px-8 py-8 border shadow-lg shadow-white mx-4 mt-2'>
        <div className='flex'>
            <div className='w-full'>
              <input type='text' ref={messageRef} placeholder='Add text here my man.' className='w-full h-full border border-gray-300 rounded-lg pl-2 pr-2' maxLength={200}/>
            </div>
            <Button type='submit' onClick={buttonload} disabled={!isActive}>Add task</Button>
        </div>
      </div>
      <div>
        {areTasks ? 
        <div className='mt-12'>
          {tasks.map((task) => (
            <div key={task.id}>
              {task.done ? <Card color='bg-green-200' shadowColor='shadow-lime-400'>
                <div className='flex'>
                <div className='w-full flex justify-center items-center'>
                  <p className='text-gray'>{task.task}</p>
                </div>
                <div> 
                    <Button onClick={() => deleteTask(task.id)} disabled={!isActive} color='bg-red-500' hoverColor='bg-red-700'>Delete</Button>
                </div>
                </div>
              </Card> 
              :  
              <Card color='bg-gray-200' shadowColor='shadow-lg'>
                <div className='flex'>
                <div className='w-full flex justify-center items-center'>
                  <p className='text-gray'>{task.task}</p>
                </div>
                <div>
                  <Button onClick={() => deleteTask(task.id)} disabled={!isActive} color='bg-red-500' hoverColor='bg-red-700'>Delete</Button>
                  <Button onClick={() => doneTask(task.id)} disabled={!isActive} >Done</Button>
                </div>
                </div>
              </Card> 
              }
            </div>
          ))}
        </div>
        :
        <div className='flex items-center justify-center w-full mt-12'>
            <h1 className='text-gray-200'>No hay tasks</h1>
        </div>
}
      </div>
    </>
    
  )
}

export default App
