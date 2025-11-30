import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Beauty from './pages/Beauty';
import Booking from './pages/Booking';
import Guide from './pages/Guide';
import Contact from './pages/Contact';
import ChatBot from './components/ChatBot';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/beauty" element={<Beauty />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/guide" element={<Guide />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
      <ChatBot />
    </Router>
  );
};

export default App;