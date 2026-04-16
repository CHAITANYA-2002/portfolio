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
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-xl border-b border-white/10' : 'py-8 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="/" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-2xl font-black tracking-tighter text-white uppercase"
        >
          CK<span className="text-vibrant-cyan">.</span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-12 items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-white transition-all font-mono"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-vibrant-violet to-vibrant-cyan text-white text-[11px] font-black uppercase tracking-widest hover:scale-105 transition-all shadow-[0_10px_30px_rgba(139,92,246,0.3)]"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 w-full bg-background border-b border-white/10 p-8 flex flex-col gap-6 md:hidden shadow-3xl overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl font-black uppercase tracking-tighter text-white hover:text-vibrant-cyan transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-4 w-full py-4 text-center rounded-xl bg-gradient-to-r from-vibrant-violet to-vibrant-cyan text-white text-[12px] font-black uppercase tracking-widest"
            >
              Hire Me
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
