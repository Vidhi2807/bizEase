import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Onboarding from './Components/Onboarding';
import Dashboard from './Components/Dashboard';
import WebsiteBuilder from './Components/WebsiteBuilder';
import AdsManager from './Components/AdsManager';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/builder" element={<WebsiteBuilder />} />
        <Route path="/ads" element={<AdsManager />} />
        <Route path="/" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
