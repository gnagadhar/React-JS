import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card username="Viart" btn="KING" img="https://img.etimg.com/thumb/width-420,height-315,imgsize-153686,resizemode-75,msid-121596330/news/sports/rcb-hoping-for-strong-virat-kohli-performance-in-ipl-final-star-batter-has-mixed-record-in-title-outings.jpg"/>
    <Card username="Rohit" btn="HITMAN" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4WP7FKo9IKTJZ9tztVTCEImyCx5mf3ALKg&s"/>
    </>
  )
}

export default App
