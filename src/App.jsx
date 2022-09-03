import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Footer from './Footer'
import ProfilePage from './ProfilePage'
import StartPage from './StartPage'
import './styles/header.css'
import './styles/index.css'

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App
