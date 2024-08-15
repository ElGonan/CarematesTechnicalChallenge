// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
// import Card from './components/Card'
import Button from './components/Button'
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <div className=' bg-gray-300 rounded-lg px-8 py-8 border shadow-lg shadow-white'>
        <div className='flex'>
            <div className='w-full'>
              <input placeholder='Add text here my man.' className='w-full h-full border border-gray-300 rounded-lg pl-2' maxLength={200}/>
            </div>
            <Button>Add task</Button>
        </div>
      </div>
    </>
    
  )
}

export default App
