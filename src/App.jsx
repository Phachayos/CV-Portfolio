// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className={isDark ? 'dark' : ''}>
      {/* Navbar */}
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />

      {/* Main Content */}
      <main>
        <Hero />
        <Education />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
