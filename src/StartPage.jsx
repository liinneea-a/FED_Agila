import Hero from './components/hero';
import SubHero from './subHero';
import ContactSection from './components/ContactSection';
import TeamGallery from './TeamGallery';
import AboutUs from './components/AboutUs';
import Header from './components/header';
import Footer from './Footer';

export default function StartPage() {
  return (
    <>
      <Header />
      <Hero />
      <SubHero />
      <TeamGallery />
      <ContactSection />
      <AboutUs />
      <Footer />
    </>
  );
}
