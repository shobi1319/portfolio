import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import ProjectDetail from './components/ProjectDetail';

function Home() {
  return (
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
  );
}

function App() {
  useEffect(() => {
    document.title = "Muhammad Shoaib | Full-Stack Developer";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;