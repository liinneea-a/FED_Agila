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
     <TeamGallery/>
    </div>
  )
}

export default App
