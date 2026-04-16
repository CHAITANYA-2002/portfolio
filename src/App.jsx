import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import SEO from './components/SEO';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import './styles/globals.css';

// Lazy load heavy sections
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const IntellectualProperty = lazy(() => import('./components/IntellectualProperty'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  return (
    <ErrorBoundary>
      <div className="relative bg-background min-h-screen font-sans selection:bg-white/10 selection:text-white">
        <SEO />
        <Navbar />
        
        <main className="relative z-10 bg-mesh overflow-hidden">
          <Hero />
          <Metrics />
          
          <Suspense fallback={<div className="h-screen bg-background" />}>
            <Projects />
            <Experience />
            <Skills />
            <IntellectualProperty />
            <Contact />
          </Suspense>
        </main>
        
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;
