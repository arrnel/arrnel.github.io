import { useRef } from 'react';
import Header from './components/Header';
import ProfileSection from "./components/ProfileSection.tsx";
import AboutSection from "./components/AboutSection.tsx";
import ExperienceSection from "./components/ExperienceSection.tsx";
import ProjectsSection from "./components/ProjectsSection.tsx";
import ContactsSection from "./components/ContactsSection.tsx";

const App = () => {
  const profileRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const experienceRef = useRef<HTMLElement>(null);
  const projectsRef = useRef<HTMLElement>(null);
  const contactsRef = useRef<HTMLElement>(null);

  const scrollToSection = (section: 'profile' | 'about' | 'experience' | 'projects' | 'contacts') => {
    const refs = {
      profile: profileRef,
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
      contacts: contactsRef,
    };
    refs[section].current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      <Header onNavigate={scrollToSection} />
      <main>
        <ProfileSection ref={profileRef}/>
        <AboutSection ref={aboutRef} />
        <ExperienceSection ref={experienceRef} />
        <ProjectsSection ref={projectsRef} />
        <ContactsSection ref={contactsRef} />
      </main>
    </div>
  );
};

export default App;