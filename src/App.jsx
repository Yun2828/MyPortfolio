import Hero from './sections/Hero.jsx'
import AnimatedTimelineSection from "./sections/AnimatedTimelineSection.jsx";
import SkillSection from "./sections/SkillSection.jsx";
import CertificateSection from "./sections/CertificateSection.jsx";
import ContactSection from "./sections/ContactSection.jsx";
import EducationSection from "./sections/EducationSection.jsx";
import Navbar from "./sections/NavBar.jsx";
import FooterSection from "./sections/FooterSection.jsx";

const App = () => {
    return (
        <div className="scroll-pt-20">
            <Navbar />
            <Hero />
            <EducationSection />
            <AnimatedTimelineSection />
            <SkillSection />
            <CertificateSection />
            <ContactSection />
            <FooterSection />
        </div>
    )
}
export default App
