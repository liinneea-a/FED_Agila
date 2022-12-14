
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ProfilePage from './ProfilePage';
import StartPage from './StartPage';
import './styles/header.css';
import './styles/index.css';
// import './styles/ProfilePage.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="profile/:id" element={<ProfilePage />} />
          <Route path="/" element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
