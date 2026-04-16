import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { Brain, TrendingUp, Cloud, Code } from './Icons';

const BentoCard = ({ title, items, icon: Icon, colorClass, gridClass, index }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = ({ currentTarget, clientX, clientY }) => {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      className={`group relative ${gridClass} bespoke-card p-10 flex flex-col justify-between overflow-hidden`}
    >
      {/* Interactive Spotlight Effect */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: useTransform(
            [mouseX, mouseY],
            ([x, y]) => `radial-gradient(400px circle at ${x}px ${y}px, rgba(139, 92, 246, 0.12), transparent 80%)`
          ),
        }}
      />

      <div className="relative z-10 w-full">
        <div className="flex justify-between items-start mb-8">
          <div className={`p-4 rounded-2xl bg-white/5 border border-white/10 ${colorClass}`}>
            <Icon size={24} />
          </div>
          <span className="font-mono text-[11px] text-white/20 uppercase tracking-widest">SEGMENT_0{index + 1}</span>
        </div>

        <h3 className="text-3xl md:text-4xl font-black mb-10 tracking-tight leading-none text-white uppercase break-words">
          {title.split(' ').map((word, i) => (
            <span key={i} className="block">{word}</span>
          ))}
        </h3>
      </div>

      <div className="relative z-10 flex flex-wrap gap-3">
        {items.map((skill) => (
          <span 
            key={skill} 
            className="px-4 py-2 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono uppercase tracking-widest text-vibrant-sky hover:border-white/20 hover:bg-white/10 transition-all cursor-default font-bold"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { skills } = portfolioData;

  const categoryIcons = {
    "Product Leadership": TrendingUp,
    "AI & Data Engineering": Brain,
    "Cloud & Ecosystem": Cloud
  };

  const categoryColors = {
    "Product Leadership": "text-vibrant-cyan",
    "AI & Data Engineering": "text-vibrant-violet",
    "Cloud & Ecosystem": "text-vibrant-emerald"
  };

  const gridMapping = {
    "Product Leadership": "md:col-span-12 lg:col-span-7 lg:row-span-1",
    "AI & Data Engineering": "md:col-span-6 lg:col-span-5 lg:row-span-2",
    "Cloud & Ecosystem": "md:col-span-6 lg:col-span-7 lg:row-span-1"
  };

  return (
    <section id="skills" className="py-24 md:py-40 px-6 bg-[#020617] relative">
      <div className="aurora-backdrop" />
      
      <div className="max-w-7xl mx-auto">
        <div className="annotation mb-20 text-vibrant-violet">
           // TECHNICAL_INVENTORY.sys // V.2026.04
        </div>

        <div className="bento-grid">
          {Object.entries(skills).map(([category, items], index) => (
            <BentoCard
              key={category}
              index={index}
              title={category}
              items={items}
              icon={categoryIcons[category] || Code}
              colorClass={categoryColors[category]}
              gridClass={gridMapping[category]}
            />
          ))}
        </div>

        <div className="mt-20 pt-12 border-t border-white/5">
           <p className="max-w-3xl font-mono text-[11px] text-white/30 leading-relaxed uppercase tracking-[0.3em] italic">
              Experience depth verified through multiple zero-to-one product architectural delivery cycles and cross-functional leadership outcomes.
           </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
