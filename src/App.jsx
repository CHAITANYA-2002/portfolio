import { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import './styles/globals.css';

const Home = lazy(() => import('./pages/Home'));
const Projects = lazy(() => import('./pages/Projects'));
const Journey = lazy(() => import('./pages/Journey'));
const Skills = lazy(() => import('./pages/Skills'));
const Contact = lazy(() => import('./pages/Contact'));

const PageLoader = () => (
  <div className="min-h-screen bg-[#0B0B0F] flex items-center justify-center">
    <div className="w-6 h-6 rounded-full border-2 border-white/10 border-t-white animate-spin" />
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="relative bg-[#0B0B0F] min-h-screen font-sans selection:bg-white/15 selection:text-white">
          <SEO />
          <Navbar />
          <main>
            <Suspense fallback={<PageLoader />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/journey" element={<Journey />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
