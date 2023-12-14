import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(15)
  // let counter = 15;

  const AddValue = () => {
    counter = counter + 1;
    if(counter > 20){
      counter = 20;
    }
    setCounter(counter)
  }

  const DecValue = () => {
    counter = counter - 1;
    if(counter < 0){
      counter = 0;
    }
    setCounter(counter)
  }
  
  return (
    <>
    <h1>Chai aur React</h1>
    <p>Counter Value : {counter}</p>
    <button
    onClick={AddValue}
    >Add Value</button>
    <button
    onClick={DecValue}
    >Decrease Value</button>
    </>
  )
}

export default App
