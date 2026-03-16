import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import ScrollUp from './components/scrollup/ScrollUp';
import { motion } from 'framer-motion'; // Import motion from Framer Motion
import { useInView } from 'react-intersection-observer'; // Import useInView hook from react-intersection-observer

function App() {
  return (
    <>
      <Header />
      <Home />

      {/* About Section */}
      <ScrollAnimate>
        <About />
      </ScrollAnimate>

      {/* Skills Section */}
      <ScrollAnimate>
        <Skills />
      </ScrollAnimate>

      {/* Qualification Section */}
      <ScrollAnimate>
        <Qualification />
      </ScrollAnimate>

      {/* Portfolio Section */}
      <ScrollAnimate>
        <Portfolio />
      </ScrollAnimate>

      {/* Contact Section */}
      <ScrollAnimate>
        <Contact />
      </ScrollAnimate>

      <Footer />
      <ScrollUp />
    </>
  );
}

// ScrollAnimate Component: This will apply animation when the component comes into view
const ScrollAnimate = ({ children }) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger only once when it's in view
    threshold: 0.1, // Percentage of the component visible before triggering
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Start with opacity 0 and move the element down
      animate={inView ? { opacity: 1, y: 0 } : {}} // Animate to opacity 1 and move to its normal position
      transition={{ duration: 0.6 }} // Transition duration
    >
      {children}
    </motion.div>
  );
};

export default App;
