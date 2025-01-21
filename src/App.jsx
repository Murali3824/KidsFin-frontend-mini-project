import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Home from './pages/Home';
import FAQ from './pages/FAQ';
import About from './pages/About';
import Phases from './components/Phases';
import LoginSignup from './pages/LoginSignup';
import Phase2 from './components/Phase2';
import Phase3 from './components/Phase3';
import Phase4 from './components/Phase4';
import Phase1 from './components/Phase1';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <div>
      
      <ScrollToTop/>

      {/* Universal ToastContainer */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        style={{
          zIndex: 9999,
        }}
        toastStyle={{
          backgroundColor: '#1C1C1C', // Dark background
          color: '#fff', // White text
          borderRadius: '8px', // Rounded corners
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)', // Subtle shadow
        }}
        progressStyle={{
          background: 'linear-gradient(to right, #4cd964, #5ac8fa)', // Gradient progress bar
        }}
      />

      {/* Navigation Bar */}
      <Navbar />

      {/* Application Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/features" element={<Phases />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/loginsignup" element={<LoginSignup />} />
        <Route path="/play-now" element={<Phase1 />} />
        <Route path="/start-learning" element={<Phase2 />} />
        <Route path="/learn-more" element={<Phase3 />} />
        <Route path="/start-now" element={<Phase4 />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
