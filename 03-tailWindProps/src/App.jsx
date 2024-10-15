import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text3xl font-bold italic bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS Test</h1>
      <Card userName="rahulAurCode" btnText="Click Me"/>
      <Card userName="rahul" btnText="please"/>
    </>
  )
}

export default App
