import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.js';
import ProjectsPage from './pages/ProjectsPage.js';
import AboutPage from './pages/AboutPage.js';
import ResumePage from './pages/ResumePage.js';
import { Routes } from 'react-router-dom';
import Header from './components/Header.js';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
      <Route path="/" element={<HomePage />} /> 
      <Route path="/portfolio" element={<ProjectsPage />} />
      <Route path="/resume" element={<ResumePage />} />
      <Route path="/about" element={<AboutPage />} />
      </Routes>
    </Router>
  );
}

export default App;
