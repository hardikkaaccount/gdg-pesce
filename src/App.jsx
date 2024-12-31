import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

// Import the Chatbot component
import Chatbot from './pages/chatbot';

const App = () => {
  return (
    <Router>
      <div className="pt-20"> {/* Add padding to account for fixed Navbar */}
        {/* Your Navbar and other components */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/team" element={<Team />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>

        {/* Add the Chatbot component */}
        <Chatbot />
      </div>
    </Router>
  );
};

export default App;
