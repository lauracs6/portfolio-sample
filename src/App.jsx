import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Newsletter from './pages/Newsletter';

export default function App(){
  return (
    <div className="app">
      <Header />
      <main style={{padding: '1rem', minHeight: '70vh'}}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsletter" element={<Newsletter />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
