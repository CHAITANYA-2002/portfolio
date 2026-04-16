import { motion } from 'framer-motion';

const techColors = {
  "Python": "text-vibrant-cyan",
  "TensorFlow": "text-vibrant-amber",
  "LangChain": "text-vibrant-emerald",
  "Flask": "text-vibrant-violet",
  "Power BI": "text-vibrant-rose",
  "Raspberry Pi": "text-vibrant-rose",
  "Salesforce": "text-vibrant-cyan",
  "Selenium": "text-vibrant-emerald",
  "JIRA": "text-vibrant-cyan",
  "SQL": "text-vibrant-amber",
  "MERN": "text-vibrant-emerald",
  "Azure": "text-vibrant-cyan",
  "Docker": "text-vibrant-cyan",
  "Azure DevOps": "text-vibrant-cyan",
};

const TimelineItem = ({ exp, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center justify-center w-full mb-12 md:mb-20 last:mb-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* 1. Content Card (Vibrant & High-Contrast) */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -10 : 10, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className={`w-full md:w-[48%] flex flex-col justify-center p-8 md:p-12 bespoke-card group bg-[#020617]/40 ${isLeft ? 'md:text-left' : 'md:text-right'}`}
      >
        <div className={`flex flex-col mb-8 ${isLeft ? '' : 'md:items-end'}`}>
          <span className="font-mono text-[11px] uppercase tracking-[0.3em] text-vibrant-sky/50 mb-3 group-hover:text-vibrant-cyan transition-colors duration-500 font-black">{exp.duration}</span>
          <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tightest leading-[1] mb-3 text-white">{exp.role}</h3>
          <span className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.2em] text-vibrant-sky italic">{exp.company}</span>
        </div>

        <ul className={`space-y-4 md:space-y-6 mb-12 ${isLeft ? 'text-left' : 'md:text-right'}`}>
          {exp.bullets.slice(0, 3).map((bullet, i) => (
            <li key={i} className={`flex gap-4 md:gap-6 group/bullet ${isLeft ? 'text-left' : 'md:flex-row-reverse md:text-right'}`}>
              <span className="text-vibrant-violet font-mono text-[11px] opacity-20 group-hover/bullet:opacity-100 transition-opacity font-black">
                // 0{i + 1}
              </span>
              <p className="text-sm md:text-base text-vibrant-sky/80 leading-relaxed group-hover/bullet:text-white transition-colors font-medium">
                {bullet}
              </p>
            </li>
          ))}
        </ul>

        {/* Tech Footer */}
        <div className={`flex flex-wrap gap-x-6 gap-y-3 pt-10 border-t border-white/10 ${isLeft ? '' : 'md:justify-end'}`}>
          {exp.tech.map((t) => (
            <span key={t} className={`text-[10px] md:text-[11px] font-mono tracking-[0.2em] uppercase font-black transition-all duration-500 hover:scale-110 cursor-default ${techColors[t] || 'text-vibrant-sky/30'}`}>
              {t}
            </span>
          ))}
        </div>
      </motion.div>

      {/* 2. Middle Node */}
      <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center z-10 hidden md:flex">
         <motion.div 
           initial={{ scale: 0 }}
           whileInView={{ scale: 1 }}
           className="w-3 h-3 rounded-full bg-vibrant-cyan shadow-[0_0_20px_rgba(34,211,238,0.5)] border-2 border-background" 
         />
      </div>

      {/* 3. Spacer */}
      <div className="w-full md:w-[48%] hidden md:block" />

    </div>
  );
};

export default TimelineItem;
