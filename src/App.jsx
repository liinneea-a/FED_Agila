import Header from "./components/Header";
import Hero from "./components/Hero";
import SubHero from "./subHero";
import ContactSection from "./components/ContactSection";
import Footer from "./Footer";
import TeamGallery from "./TeamGallery";
import "./styles/header.css";
import "./styles/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <SubHero />
      <TeamGallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
