import { useState } from 'react'
import './App.css'
import Formpage from './Formpage'

function App() {
  const [count, setCount] = useState(0)

  return (
  <div><Formpage/></div>
  )
}

export default App
