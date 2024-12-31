import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Chatbot from './Chatbot';
import Navbar from './components/Navbar'; // Example Navbar

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="pt-20"> {/* Adjust padding for fixed Navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Chatbot /> {/* Chatbot embedded across all routes */}
      </div>
    </Router>
  );
};

export default App;
