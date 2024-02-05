
import React from 'react';
import './App.css';

import Header from './components/Header';
import Skills from './components/Skills';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Skills />
      <Timeline />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
