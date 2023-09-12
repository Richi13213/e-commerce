import { useState } from 'react'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './pages/Home';
import './App.css'
import Layout from './pages/Layout';

function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/about" element={<p>About</p>} />
          <Route path="/contact" element={<p>Contact</p>} />
          <Route path="*" element={<p>404</p>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
