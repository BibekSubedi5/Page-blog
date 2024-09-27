import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-black flex justify-center items-center w-full h-screen'>
  <h1 className='text-red-700 '>hello worlds</h1>
    </div>
  )
}

export default App
