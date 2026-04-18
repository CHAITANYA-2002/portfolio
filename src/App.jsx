import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ErrorBoundary from './components/ErrorBoundary';
import SEO from './components/SEO';
import Home from './pages/Home';
import './styles/globals.css';

function App() {
  return (
    <HelmetProvider>
      <ErrorBoundary>
        <div className="relative min-h-screen bg-[#0B0B0F] font-sans selection:bg-white/15 selection:text-white">
          <SEO />
          <Navbar />
          <main>
            <Home />
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </HelmetProvider>
  );
}

export default App;
