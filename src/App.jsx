import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Calculator from './components/calculator/calculator';
import ButtonGallery from './components/buttonGallery/buttonGallery';

function App() {


  return (
    <Router>
      {/* navbar here. also everything else that should be rendered on all pages */}
      <main className="flex min-h-[100vh] gap-8 justify-center flex-col items-center">
        <Routes>

          <Route path="/" element={<Calculator />} />
          <Route path="/buttongallery" element={<ButtonGallery />} />

        </Routes>
      </main>
      {/* footer here */}
    </Router>
  );
}

export default App;
