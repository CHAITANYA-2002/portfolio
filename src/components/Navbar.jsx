import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Experiments', href: '/experiments' },
  { name: 'Contact', href: '/contact' },
];

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="4" y1="8" x2="20" y2="8"/>
    <line x1="4" y1="16" x2="20" y2="16"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="18" y1="6" x2="6" y2="18"/>
    <line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0F]/80 backdrop-blur-xl border-b border-white/[0.06] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="text-sm font-bold tracking-widest text-white uppercase hover:opacity-70 transition-opacity"
        >
          Chaitanya<span className="text-[#C7B27A]">.</span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                location.pathname + location.hash === link.href || (location.pathname === '/' && link.href.startsWith('/#') && location.hash === link.href.split('/')[1])
                  ? 'text-white bg-white/10' 
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-4 btn-primary text-sm"
            style={{ padding: '8px 18px' }}
          >
            Let's Talk
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-slate-400 hover:text-white transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden border-t border-white/[0.06] bg-[#0B0B0F]/95 backdrop-blur-xl"
          >
            <div className="px-6 py-6 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                    location.pathname + location.hash === link.href ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileOpen(false)}
                className="mt-4 btn-primary text-center text-sm"
              >
                Let's Talk
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
