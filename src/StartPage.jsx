import Hero from './components/hero'
import SubHero from './subHero'
import ContactSection from './components/ContactSection'
import TeamGallery from './TeamGallery'
import AboutUs from './components/AboutUs'
import Header from './components/header';
import Footer from './Footer';
import SkillSection from './components/SkillSection'
import Skills from './components/Skills'

export default function StartPage() {
  return (
    <>
      <Header />
      <Hero />
      <SubHero />
      <TeamGallery />
      <Skills />
      <SkillSection />
      <ContactSection />
      <AboutUs />
        <Footer />
    </>
  );

}
