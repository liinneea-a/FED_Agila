import { useState } from 'react'
import SubHero from './subHero';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    <SubHero/>
    </div>
  )
}

export default App
