import React, { useEffect } from 'react';

const Chatbot = () => {
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
          // Save chat history to local storage
          saveMessageToLocalStorage(message);
        },
        onChatStart: () => {
          // Load existing chat history if available
          loadChatHistory();
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
      // Display the message in the chatbot (you can customize this part)
      window.Chatbot.addMessage(message);
    });
  };

  return null; // No UI component, the chatbot is embedded externally
};

export default Chatbot;
