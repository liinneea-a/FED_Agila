import { useState } from 'react'
import SubHero from './subHero';
import Footer from './Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
    {/* <SubHero/> */}
    <Footer/>
    </div>
  )
}

export default App
