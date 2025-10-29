import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; 

// Get the root element from the HTML
const rootElement = document.getElementById('root');

if (rootElement) {
  // Use ReactDOM.createRoot to render the application
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  console.error("Failed to find the root element with id 'root'.");
}
