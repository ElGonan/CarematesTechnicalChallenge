import { useEffect, useState, useRef } from 'react'
import Tasks from './model/tasks'
import Card from './components/Card'
import Button from './components/Button'
import { FireError, FireQuestion, FireSuccess } from './components/alerts'

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
      FireError('The task cannot be empty.')
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
      FireSuccess('Task added successfully.')
    } catch (error) {
      console.log(error)
      FireError('There was an error adding the task', 'The error is: ' + error)
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
    FireQuestion('Are you sure you want to delete this task?').then((result) => {
      if (result.isConfirmed) {
        try {
          Tasks.deleteTask(id)
          setTasks(tasks.filter(task => task.id !== id))
        } catch (error) {
          console.log(error)
        }
        getTasks()
      }
      }
    )
  }
    

  // This function is to mark a task as done.
  const doneTask = async(id) => {
    try {
      await Tasks.doneTask(id)
      FireSuccess('Task marked as done.')
    } catch (error) {
      console.log(error)
      FireError('There was an error marking the task as done.', 'The error is: ' + error)
    }
    getTasks()
  }

  // This is to get the tasks from the DB when the page loads.
  useEffect(() => {
    getTasks()
  }, [])

  return (
    <>
    <div>
      <a href='https://github.com/ElGonan' className='text-sm ml-4 mt-8 mb-4 text-white'>Developed by Alan González "ElGonan"</a>
    </div>
      <div className=' bg-gray-300 rounded-lg px-8 py-8 border shadow-lg shadow-gray-400 mx-4 mt-2'>
        <div className='flex'>
            <div className='w-full'>
              <input type='text' ref={messageRef} placeholder='Please, add a task by writing it here and then clicking "Add Task"' className='w-full h-full border border-gray-300 rounded-lg pl-2 pr-2' maxLength={200}/>
            </div>
            <Button type='submit' onClick={buttonload} disabled={!isActive}>Add task</Button>
        </div>
      </div>
      <div>
        {areTasks ? 
        <div className='mt-12'>
          {tasks.map((task) => (
            <div key={task.id}>
              {task.done ? <Card color='bg-green-200 shadow-lime-500'>
                <div className='flex'>
                <div className='w-full flex justify-center items-center bg-white rounded-xl'>
                  <p className='text-gray'>{task.task}</p>
                </div>
                <div> 
                    <Button onClick={() => deleteTask(task.id)} disabled={!isActive} color='bg-red-500 hover:bg-red-700'>Delete</Button>
                </div>
                </div>
              </Card> 
              :  
              <Card color='bg-gray-200 shadow-gray-600'>
                <div className='flex'>
                <div className='w-full flex justify-center items-center bg-white rounded-xl'>
                  <p className='text-gray'>{task.task}</p>
                </div>
                <div>
                  <Button onClick={() => deleteTask(task.id)} disabled={!isActive} color='bg-red-500 hover:bg-red-700'>Delete</Button>
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
            <h1 className='text-gray-200'>There are no tasks</h1>
        </div>
}
      </div>
    </>
    
  )
}

export default App
