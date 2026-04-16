import { motion, useSpring, useTransform, animate } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { portfolioData } from '../data/portfolio';

// Monochromatic Stroke Icons
const BrainIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .52 8.125A3 3 0 1 0 11 18a3 3 0 1 0 5.997-.125 4 4 0 0 0 2.526-5.77 4 4 0 0 0-.52-8.125A3 3 0 1 0 13 6a3 3 0 1 0-1 0Z"/><path d="M9 13a4.5 4.5 0 0 0 3-4"/><path d="M12 13a4.5 4.5 0 0 1-3-4"/><path d="M12 13a4.5 4.5 0 0 0 3-4"/><path d="M15 13a4.5 4.5 0 0 1-3-4"/>
  </svg>
);

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>
  </svg>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const ClockIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
  </svg>
);

const iconMap = {
  "AI Products Shipped": { Icon: BrainIcon, color: "text-vibrant-emerald", bg: "bg-vibrant-emerald/10" },
  "Reduction in Loan Defaults": { Icon: TrendingIcon, color: "text-vibrant-amber", bg: "bg-vibrant-amber/10" },
  "Pre-launch Bug Resolution": { Icon: CheckIcon, color: "text-vibrant-violet", bg: "bg-vibrant-violet/10" },
  "Experience": { Icon: ClockIcon, color: "text-vibrant-cyan", bg: "bg-vibrant-cyan/10" },
};

const SafeCountUp = ({ value, suffix }) => {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: 2.5,
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
      ease: [0.32, 0.23, 0.4, 0.9]
    });
    return () => controls.stop();
  }, [value]);

  return <span>{displayValue}{suffix}</span>;
};

const Metrics = () => {
  return (
    <section className="py-32 px-6 border-y border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24">
          {portfolioData.metrics.map((metric, index) => {
            const config = iconMap[metric.label] || { Icon: CheckIcon, color: "text-vibrant-violet", bg: "bg-vibrant-violet/10" };
            const { Icon, color, bg } = config;
            
            return (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                className="flex flex-col items-center text-center group"
              >
                <div className={`p-4 mb-8 rounded-2xl border border-white/10 ${bg} ${color} transition-transform duration-500 group-hover:scale-110`}>
                  <Icon />
                </div>
                <div className={`text-4xl md:text-6xl font-black tracking-tighter mb-4 ${color}`}>
                  <SafeCountUp value={metric.value} suffix={metric.suffix} />
                </div>
                <div className="text-[11px] md:text-[12px] font-mono font-bold text-zinc-400 uppercase tracking-[0.2em] leading-tight max-w-[140px]">
                  {metric.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
