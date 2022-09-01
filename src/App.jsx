
import Header from "./components/header";
import Hero from "./components/hero";
import SubHero from "./subHero";
import ContactSection from "./components/ContactSection";
import Footer from "./Footer";
import TeamGallery from "./TeamGallery";
import "./styles/header.css";
import "./styles/index.css";
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';
import Hero from './components/hero';
import SubHero from './subHero';
import ContactSection from './components/ContactSection';
import Footer from './Footer';
import TeamGallery from './TeamGallery';
import ProfilePage from './ProfilePage';
import StartPage from './StartPage';
import './styles/header.css';
import './styles/index.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SubHero />
      <TeamGallery />
      <ContactSection />
      <AboutUs />
      <Footer />
      <BrowserRouter>
        <Routes>
          <Route path="profile/:id" element={<ProfilePage />}/>
          <Route path="/" element={<StartPage/>} />
        </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
