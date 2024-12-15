import { useState } from 'react'
import './App.css'
import Register from './screen/Register'
import CountdownTimer from './utils/CountDown'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Register />
    </>
  )
}

export default App
