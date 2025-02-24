// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NewsDetail from './pages/NewsDetail';

function App() {
  return (
    <Router>
      <Routes>
        {/* Halaman Home (daftar berita) */}
        <Route path="/" element={<Home />} />

        {/* Halaman Detail Berita dengan parameter :id */}
        <Route path="/news/:id" element={<NewsDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
