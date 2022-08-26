import { useState } from 'react'
import SubHero from './subHero';
import Footer from './Footer'
import TeamGallery from './TeamGallery'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
    <SubHero/> 
    <Footer/>
     <h1>Hejsan first test.</h1>
     <TeamGallery/>
    </div>
  )
}

export default App
