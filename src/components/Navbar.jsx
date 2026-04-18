import { useState, useEffect } from 'react';
import { Menu, X } from './Icons';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', href: '#projects' },
    { name: 'Journey', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
      isScrolled ? 'py-4 bg-[#020617]/90 backdrop-blur-2xl border-b border-white/10' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="/" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tightest text-white uppercase"
        >
          CK<span className="text-vibrant-violet">_</span>CORE
        </motion.a>

        {/* Desktop Links (High-Contrast Sky) */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[12px] font-black uppercase tracking-[0.3em] text-vibrant-sky/70 hover:text-white transition-all font-mono"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-8 py-3 rounded-2xl bg-white text-black text-[11px] font-black uppercase tracking-[0.4em] hover:bg-vibrant-violet hover:text-white transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
          >
            Initiate
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu (Saturated Navy) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#020617] border-b border-white/10 p-12 flex flex-col gap-8 md:hidden shadow-3xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-3xl font-black uppercase tracking-tightest text-white hover:text-vibrant-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-6 w-full py-5 text-center rounded-2xl bg-white text-black text-[12px] font-black uppercase tracking-[0.4em]"
            >
              Initiate_Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
