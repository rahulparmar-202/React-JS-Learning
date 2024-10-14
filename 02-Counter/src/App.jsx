import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  // counter and setCounter are just names , we can change them to our own also.
  let [counter, setCounter] = useState(0)

  // let counter = 5

  // to add value 
  const addValue = ()=>{
  /* //1 way
   counter = counter + 1
   setCounter(counter)
  */
    
   // 2nd Way
   setCounter(counter + 1)
   
  }

  // to remove value
  const removeValue = () =>{
    setCounter(counter-1)
  }

  return (
    <>
      <h1>Learning React</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
