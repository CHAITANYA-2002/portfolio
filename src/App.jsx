import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';

// Pages
import Home from './pages/Home';
import Contact from './pages/Contact';
import Experiments from './pages/Experiments';

import './styles/globals.css';

// Scroll to top on route change OR hash change
const ScrollManagement = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
    } else {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 0);
    }
  }, [pathname, hash]);

  return null;
};

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="relative min-h-screen bg-[#0B0B0F] font-sans selection:bg-white/15 selection:text-white">
          <SEO />
          <ScrollManagement />
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/experiments" element={<Experiments />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
