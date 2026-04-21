import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <Link to="/" className="text-sm font-bold text-white uppercase tracking-widest no-underline">
            Chaitanya<span className="text-[#C7B27A]">.</span>
          </Link>
          <p className="text-xs text-slate-500">
            © {year} {portfolioData.name}. Built with React & Framer Motion.
          </p>
        </div>
        <nav className="flex flex-wrap justify-center gap-6">
          {[
            ['Projects', '/#projects'],
            ['Skills', '/#skills'],
            ['Experiments', '/experiments'],
            ['Contact', '/contact']
          ].map(([label, to]) => (
            <Link
              key={to}
              to={to}
              className="text-xs font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-widest no-underline"
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
