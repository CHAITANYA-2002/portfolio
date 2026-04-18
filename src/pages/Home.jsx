import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { portfolioData } from '../data/portfolio';
import { useEffect, useRef, useState } from 'react';

// Animated counter
const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1800;
          const steps = 60;
          const increment = value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.floor(current));
            }
          }, duration / steps);
          return () => clearInterval(timer);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value, hasAnimated]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Fade-up variant for staggered children
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.1 },
  }),
};

const featuredProject = portfolioData.projects.find((p) => p.featured) || portfolioData.projects[0];

const Home = () => {
  return (
    <div>
      <section className="relative min-h-screen flex items-center pt-24 pb-24 px-6 overflow-hidden">
        <div className="max-w-[1200px] mx-auto w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={fadeUp}
              custom={0}
              className="label mb-6"
            >
              Technical Product Manager · AI & Data
            </motion.p>

            <motion.h1
              variants={fadeUp}
              custom={1}
              className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8"
              style={{ letterSpacing: '-0.04em', lineHeight: 1.05 }}
            >
              Building products<br />
              that <span className="premium-text">move the needle.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              custom={2}
              className="text-lg text-gray-400 mb-12 max-w-xl leading-relaxed"
            >
              Chaitanya Khurana — orchestrating AI products from zero to measurable impact
              across fintech, automation, and data.
            </motion.p>

            <motion.div
              variants={fadeUp}
              custom={3}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects" className="btn-primary">
                View Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                </svg>
              </Link>
              <Link to="/contact" className="btn-secondary">
                Let's Talk
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── METRICS ── */}
      <section className="py-20 px-6">
        <div className="max-w-[1200px] mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {portfolioData.metrics.map((m, i) => (
              <motion.div
                key={m.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="flex flex-col gap-2"
              >
                <span
                  className="text-4xl md:text-5xl font-bold text-white"
                  style={{ letterSpacing: '-0.04em' }}
                >
                  <Counter value={m.value} suffix={m.suffix} />
                </span>
                <span className="text-sm text-gray-500 leading-snug">{m.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── FEATURED PROJECT ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label mb-10"
          >
            Featured Work
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="glass-card p-8 md:p-14"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: text */}
              <div>
                <div
                  className="text-3xl md:text-5xl font-bold text-white mb-6"
                  style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}
                >
                  {featuredProject.impact}
                </div>
                <h3 className="text-base font-semibold text-gray-300 mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-sm">
                  {featuredProject.problem}
                </p>
                <div className="flex flex-wrap gap-2 mb-10">
                  {featuredProject.tags.map((tag) => (
                    <span key={tag} className="chip">{tag}</span>
                  ))}
                </div>
                <Link to="/projects" className="btn-secondary" style={{ width: 'fit-content' }}>
                  See All Projects
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
                  </svg>
                </Link>
              </div>

              {/* Right: visual */}
              <div
                className="hidden md:flex items-center justify-center rounded-xl aspect-video bg-white/[0.03] border border-white/10"
              >
                <span
                  className="font-bold text-white select-none"
                  style={{ fontSize: 'clamp(4rem, 12vw, 8rem)', letterSpacing: '-0.05em', lineHeight: 1 }}
                >
                  {featuredProject.outcome}
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <hr className="divider" />

      {/* ── ABOUT ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="label mb-6">About</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-8"
              style={{ letterSpacing: '-0.03em', lineHeight: 1.1 }}
            >
              From engineering roots<br />to AI product leadership.
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-400 leading-relaxed mb-6">
              I started as an engineer and grew into a product thinker — building AI agents,
              credit risk models, and cross-functional product releases.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              My edge: I can go deep into the technical stack and come back up with a clear product
              narrative that ships into measurable outcomes.
            </p>
            <Link to="/journey" className="btn-secondary" style={{ width: 'fit-content' }}>
              Read My Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 md:p-20 text-center"
          >
            <p className="label mb-6">Open to Opportunities</p>
            <h2
              className="text-3xl md:text-5xl font-bold text-white mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              Let's build something<br />worth measuring.
            </h2>
            <p className="text-gray-400 mb-10 max-w-md mx-auto">
              Currently accepting strategic PM engagements and AI product partnerships.
            </p>
            <Link to="/contact" className="btn-primary">
              Start a Conversation
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
