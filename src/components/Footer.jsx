import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-bold text-white" style={{ letterSpacing: '0.1em' }}>
            Chaitanya<span className="text-gray-500">.</span>
          </span>
          <p className="text-xs text-slate-500">
            © {year} {portfolioData.name}. Built with React & Framer Motion.
          </p>
        </div>
        <nav className="flex gap-6">
          {[['Projects', '/projects'], ['Journey', '/journey'], ['Skills', '/skills'], ['Contact', '/contact']].map(([label, href]) => (
            <Link
              key={href}
              to={href}
              className="text-xs font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
