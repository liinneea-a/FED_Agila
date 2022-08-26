import { useState } from 'react'
import TeamGallery from './TeamGallery'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
     <h1>Hejsan first test.</h1>
     <TeamGallery/>
    </div>
  )
}

export default App
