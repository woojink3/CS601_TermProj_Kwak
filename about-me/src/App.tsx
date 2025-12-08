import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Home from './pages/Home';
import Biography from './pages/Biography';
import Resume from './pages/Resume';
import Gallery from './pages/Gallery';
import Interest from './pages/Interest';
import PhotoDetail from './pages/PhotoDetail';
import './App.css';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/photodetail/:name" element={<PhotoDetail />} />
            <Route path="/interest" element={<Interest />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
