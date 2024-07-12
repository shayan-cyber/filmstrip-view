import { useState } from 'react'

import './App.css'
import FlimStripView from './components/FlimStripView'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center '>
      <FlimStripView/>
      </div>
    </>
  )
}

export default App
