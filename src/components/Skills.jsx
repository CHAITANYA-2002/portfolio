import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const categoryAccents = {
  "Product Leadership": "text-vibrant-cyan",
  "AI & Data Engineering": "text-vibrant-violet",
  "Cloud & Ecosystem": "text-vibrant-emerald"
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <section id="skills" className="py-20 md:py-32 px-6 border-b border-white/5 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="annotation mb-24">
           // TECHNICAL INVENTORY // V.2026.04
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-32">
          {Object.entries(skills).map(([category, items], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              whileInView={{ opacity: 1, filter: "blur(0px)" }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
              className={`space-y-12 md:space-y-16 group ${index % 2 === 0 ? '' : 'lg:pt-32'}`}
            >
              <div className="flex flex-col gap-4">
                 <span className="font-mono text-[11px] text-zinc-500 font-bold group-hover:text-white transition-colors duration-700">INVENTORY_SEGMENT_0{index+1}</span>
                 <h3 className={`text-editorial-sub transition-colors duration-700 ${categoryAccents[category] || 'text-white'}`}>
                    {category.split(' ').map((word, i) => (
                      <span key={i} className="block">{word}</span>
                    ))}
                 </h3>
              </div>
              
              <div className="flex flex-col gap-6">
                {items.map((skill, i) => (
                  <motion.div 
                    key={skill}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + i * 0.05 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <span className={`w-1 h-3 transition-all duration-500 bg-white/10 group-hover/item:scale-y-150 group-hover/item:bg-white`} />
                    <span className="text-[12px] md:text-[13px] font-mono font-bold tracking-[0.2em] uppercase text-zinc-400 group-hover/item:text-white transition-all duration-500 cursor-default">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="pt-12 border-t border-white/5 opacity-40 group-hover:opacity-100 transition-opacity duration-1000">
                 <p className="font-mono text-[10px] text-zinc-600 leading-relaxed uppercase tracking-[0.3em] italic font-semibold">
                    Capability established through end-to-end orchestration and verified production impact.
                 </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
