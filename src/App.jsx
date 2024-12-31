import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Community from './pages/Community';
import Team from './pages/Team';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Navbar from './components/Navbar'; // Example Navbar

const App = () => {
  useEffect(() => {
    // Create a script element to load the chatbot
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://cdn.jsdelivr.net/npm/@denserai/embed-chat@1/dist/web.min.js';

    // Once the script is loaded, initialize the chatbot
    script.onload = () => {
      window.Chatbot.init({
        chatbotId: '481c9674-8c70-4451-ae13-db63491f873a', // Replace with your chatbot ID
        onMessageReceived: (message) => {
          saveMessageToLocalStorage(message); // Save chat history
        },
        onChatStart: () => {
          loadChatHistory(); // Load existing chat history
        }
      });
    };

    // Append the script to the body of the document
    document.body.appendChild(script);

    // Cleanup the script when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // Function to save messages to local storage
  const saveMessageToLocalStorage = (message) => {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.push(message);
    localStorage.setItem('chatHistory', JSON.stringify(chatHistory));
  };

  // Function to load chat history from local storage
  const loadChatHistory = () => {
    const chatHistory = JSON.parse(localStorage.getItem('chatHistory')) || [];
    chatHistory.forEach((message) => {
      window.Chatbot.addMessage(message);
    });
  };

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
        {/* Chatbot is initialized through the useEffect hook */}
      </div>
    </Router>
  );
};

export default App;
