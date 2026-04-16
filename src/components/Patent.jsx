import { motion } from 'framer-motion';
import { Award, ShieldCheck } from './Icons';
import { portfolioData } from '../data/portfolio';

const Patent = () => {
  const { patent } = portfolioData;

  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="relative group p-12 overflow-hidden rounded-2xl border border-primary-purple/20 bg-gradient-to-br from-primary-purple/5 to-transparent"
        >
          {/* Subtle Background Glow */}
          <div className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary-purple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12 text-center md:text-left">
            <div className="p-6 rounded-2xl bg-primary-purple/10 border border-primary-purple/20 shadow-[0_0_30px_rgba(139,92,246,0.15)]">
              <Award size={64} className="text-primary-purple" />
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mb-6">
                <span className="px-3 py-1 rounded-full bg-primary-purple/10 border border-primary-purple/20 text-[10px] font-bold tracking-widest uppercase text-primary-purple">
                  {patent.label}
                </span>
                <span className="flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-muted">
                  <ShieldCheck size={14} className="text-primary-blue" />
                  Verified Innovation
                </span>
              </div>

              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tightest leading-tight">
                {patent.title}
              </h2>
              
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-8 gap-y-2 text-sm">
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Authority</span>
                  <span className="font-medium text-white">{patent.authority}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">Date</span>
                  <span className="font-medium text-white">{patent.date}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-muted font-bold mb-1">ID</span>
                  <span className="font-mono text-primary-blue">{patent.id}</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Patent;
