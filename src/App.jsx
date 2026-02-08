// src/App.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';     // ← newly added & integrated
import Footer from './components/Footer';
import Education from './components/Education'; // ← newly added & integrated
import Projects from './components/Projects';   // ← newly added & integrated
import Experience from './components/Experience'; // ← newly added & integrated
import Certifications from './components/Certifications'; // ← newly added & integrated
function App() {
  useEffect(() => {
    document.title = "Muhammad Shoaib | Junior Full-Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />

      <main className="flex-grow">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
            <Hero />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Education />
            <Certifications />
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}

export default App;