import { useState } from 'react'
import './App.css'
import Register from './screen/Register'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
      <Register />
      <ToastContainer />
    </>
  )
}

export default App
