import { portfolioData } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex flex-col items-center md:items-start">
          <span className="text-xl font-bold tracking-tightest impact-gradient mb-2">CK.</span>
          <p className="text-xs text-muted">© 2026 {portfolioData.name}. Built with React, Tailwind, and Outcome-first thinking.</p>
        </div>

        <div className="flex gap-8">
          <a href="#projects" className="text-xs font-bold tracking-widest uppercase text-muted hover:text-white transition-colors">Work</a>
          <a href="#experience" className="text-xs font-bold tracking-widest uppercase text-muted hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="text-xs font-bold tracking-widest uppercase text-muted hover:text-white transition-colors">Skills</a>
          <a href="mailto:chaitanya100502@gmail.com" className="text-xs font-bold tracking-widest uppercase text-muted hover:text-white transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
