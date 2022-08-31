import Hero from './components/hero';
import SubHero from './subHero';
import ContactSection from './components/ContactSection';
import TeamGallery from './TeamGallery';


export default function StartPage(){
    return(
        <>
        <Hero /> 
        <SubHero />
        <TeamGallery />
        <ContactSection />
        </>
    )
}