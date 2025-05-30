import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setcounter] = useState(0)

  const Addvalue = () => {
     
    if (counter <= 19 ) {
      setcounter(counter + 1)
    }else{
      setcounter(counter)
    }
  }

  const decresevalue = () => {
     if (counter == 0 ) {
      setcounter(counter)
    }else{
      setcounter(counter - 1)
    }
  }
 
  return (
    <>
     <h1>gangadhar</h1>
     <h2>conter value: {counter}</h2>

     <button onClick={Addvalue}
     >Add value{counter}</button>
     <br />
     <button onClick={decresevalue}
     >decrese value{counter}</button>

     <p>{counter}</p>
    </>
  )
}

export default App
