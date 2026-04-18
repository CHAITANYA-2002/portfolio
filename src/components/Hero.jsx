import { Link } from 'react-router-dom';

const Hero = () => (
  <section className="min-h-screen flex items-center px-6 pt-24 pb-24">
    <div className="max-w-[1200px] mx-auto w-full">
      <p className="label mb-6">Technical Product Manager · AI & Data</p>
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tightest leading-[1.05] mb-8">
        Building products<br />
        that <span className="premium-text">move the needle.</span>
      </h1>
      <p className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed">
        Chaitanya Khurana — orchestrating AI products from zero to measurable impact
        across fintech, automation, and data.
      </p>
      <div className="flex flex-wrap gap-4">
        <Link to="/projects" className="btn-primary">View Work</Link>
        <Link to="/contact" className="btn-secondary">Let's Talk</Link>
      </div>
    </div>
  </section>
);

export default Hero;
