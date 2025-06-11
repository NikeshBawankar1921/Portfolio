import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


// import { theme } from './futuristic-portfolio/src/theme.js';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Navbar from './components/Navbar.jsx';
import ChatBot from './components/ChatBot.jsx';

const App = () => {
  return (
    < >

      <Router>
        <div className="min-h-screen bg-gray-900">
          <Navbar />
          <main className="container mx-auto px-4 pt-20">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
             
            </Routes>
             <ChatBot/>
          </main>
        </div>
      </Router>
    </>
  );
};

export default App; 