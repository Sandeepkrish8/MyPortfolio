import { useState } from 'react';
import About from './components/About';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Cursor from './components/Cursor';
import Experience from './components/Experience';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Preloader from './components/Preloader';
import Projects from './components/Projects';
import ScrollProgress from './components/ScrollProgress';
import Skills from './components/Skills';
import { useActiveSection } from './hooks/useActiveSection';
import {
  achievements,
  certifications,
  experience,
  navLinks,
  profile,
  projects,
  skillFamilies,
  skills,
} from './data/portfolio';

// Defined outside the component so the array identity is stable between renders.
const SECTION_IDS = ['home', 'about', 'skills', 'work', 'experience', 'certifications', 'achievements', 'contact'];
const TOP_SKILLS = skills.filter((s) => ['frontend', 'languages'].includes(s.family)).slice(0, 6).map((s) => s.name);

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className={`app ${loaded ? 'is-loaded' : ''}`}>
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <Preloader name={profile.firstName} onDone={() => setLoaded(true)} />
      <Cursor />
      <ScrollProgress />
      <div className="grain" aria-hidden="true" />
      <Navbar profile={profile} links={navLinks} activeSection={activeSection} />
      <main>
        <Hero profile={profile} />
        <About profile={profile} topSkills={TOP_SKILLS} />
        <Skills skills={skills} families={skillFamilies} />
        <Projects projects={projects} />
        <Experience items={experience} />
        <Certifications items={certifications} />
        <Achievements items={achievements} />
        <Contact profile={profile} />
      </main>
    </div>
  );
}
