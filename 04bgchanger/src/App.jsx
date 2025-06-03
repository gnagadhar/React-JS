import { useState } from "react"

function App() {
  const [color, setcolor] = useState("red")

  return (
    <>
    <div className='h-screen w-fuul' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center w-full bottom-12 px-2 '>
        <div className='flex justify-center gap-3 flex-wrap bg-white rounded-full px-3 py-2'>

          <button 
          onClick={() => setcolor("red")}
          className='bg-red px-8 py-2 rounded-full text-white'
          style={{background: "red"}}>
          Red</button>
          
          <button 
          onClick={() => setcolor("blue")}
          className='bg-red px-8 py-2 rounded-full text-white'
          style={{background: "blue"}}>
          Blue</button>

          <button
          onClick={() => setcolor("green")}
          className='bg-red px-8 py-2 rounded-full text-white'
          style={{background: "green"}}>
          Green</button>

          <button 
          onClick={() => setcolor("black")}
          className='bg-red px-8 py-2 rounded-full text-white'
          style={{background: "black"}}>
          Black</button>

          <button 
          onClick={() => setcolor("orange")}
          className='bg-red px-6 py-2 rounded-full text-white'
          style={{background: "orange"}}>
          Orange</button>

        </div>
      </div>
    </div>
    </>
  )
}

export default App
