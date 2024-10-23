import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  useState()

  let [ counter , setCounter ] = useState(15)

  // let counter = 15;

  const addValue = () => {
    console.log("clicked",counter);
    counter = counter + 1;
    setCounter(counter)
  }
  const removeValue = () => {
    console.log("clicked",counter);
    counter = counter - 1;
    setCounter(counter)
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value:{counter}</h2>

     <button onClick={addValue}>Add Value {counter}</button>
     <br/>
     <button onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
