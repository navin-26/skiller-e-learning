import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import "./App.css";
import "./index.css";
import InstructorHome from './pages/InstructorHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Instructor" element={<InstructorHome />} />
      </Routes>
    </Router>
  );
}

export default App;
