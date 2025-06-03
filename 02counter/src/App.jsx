import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  let [counter, setcounter] = useState(0)

  const Addvalue = () => {

    if (counter <= 19) {
      setcounter(counter + 1)
    } else {
      setcounter(counter)
    }
  }

  const decresevalue = () => {
    if (counter == 0) {
      setcounter(counter)
    } else {
      setcounter(counter - 1)
    }
  }

  return (
    <>
    <div className='flex justify-center mt-18'>
      <div className='flex justify-center  bg-blue-200 rounded-4xl h-80 w-100 m-4'>
        <div className=''>
          <div className='flex justify-center'>
           <h1 className='font-bold text-2xl m-4'>Counter</h1>
          </div>
          <div className='flex justify-center'>
           <h2 className='font-semibold text-xl m-4'>conter value: {counter}</h2>
          </div>

          <div className='flex justify-center'>
            <button className='m-4 border border-blue-300 rounded-3xl p-2 px-6 text-white bg-blue-300' onClick={Addvalue}
            >Add value</button>
            <button className='m-4 ml-2 border border-red-300 rounded-3xl p-2 text-white bg-red-300' onClick={decresevalue}
            >decrese value</button>
         </div>
         <div className='flex justify-center'>
           <h1 className='m-5 text-5xl'>{counter}</h1>
         </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
