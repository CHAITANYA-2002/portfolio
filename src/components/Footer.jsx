import { portfolioData } from '../data/portfolio';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06] py-10 px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <span className="text-sm font-bold text-white" style={{ letterSpacing: '0.1em' }}>
            Chaitanya<span className="text-[#C7B27A]">.</span>
          </span>
          <p className="text-xs text-slate-500">
            © {year} {portfolioData.name}. Built with React & Framer Motion.
          </p>
        </div>
        <nav className="flex gap-6">
          {[['Projects', '#projects'], ['Journey', '#journey'], ['Skills', '#skills'], ['Research', '#research'], ['Contact', '#contact']].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="text-xs font-medium text-slate-500 hover:text-white transition-colors uppercase tracking-widest"
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
