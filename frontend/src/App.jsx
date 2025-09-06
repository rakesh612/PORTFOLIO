import { BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router>
      <div className="min-h-screen w-full bg-white dark:bg-gray-900">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="w-full max-w-full">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Education />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
