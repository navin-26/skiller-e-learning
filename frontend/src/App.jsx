import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import "./App.css";
import "./index.css";
import SignUpPage from './pages/SignUpPage';
import SignInPage from './pages/SignInPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path='/signin' element={<SignInPage />} />
      </Routes>
    </Router>
  );
}

export default App;
