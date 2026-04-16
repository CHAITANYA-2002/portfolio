import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight } from './Icons';

const IntellectualProperty = () => {
  const { publications, patents } = portfolioData;

  return (
    <section id="scholarship" className="py-20 md:py-32 px-6 bg-background border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
          
          {/* Patents Side */}
          <div>
            <div className="annotation mb-12 text-vibrant-amber">
               INTELLECTUAL PROPERTY // DESIGNS
            </div>
            <div className="space-y-16">
              {patents.map((patent, index) => (
                <motion.div
                  key={patent.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <span className="font-mono text-[11px] text-zinc-500 mb-4 block">REGISTRY_ENTRY_0{index + 1}</span>
                  <h3 className="text-editorial-sub mb-6 group-hover:text-vibrant-amber transition-colors duration-700">
                    {patent.title.split(' — ')[1]}
                  </h3>
                  <div className="flex flex-col gap-2 mb-8">
                     <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-300">{patent.authority}</span>
                     <span className="text-[11px] font-mono text-vibrant-amber uppercase tracking-widest font-semibold">{patent.status}</span>
                  </div>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed mb-6 italic font-serif">
                    {patent.description}
                  </p>
                  <div className="inline-block px-4 py-2 border border-white/10 rounded-lg bg-vibrant-amber/5 font-mono text-[10px] text-vibrant-amber tracking-widest uppercase">
                    ID: {patent.id}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Side */}
          <div className="lg:border-l lg:border-white/10 lg:pl-32">
            <div className="annotation mb-12 text-vibrant-cyan">
               SCHOLARLY ARTIFACTS // PUBLICATIONS
            </div>
            <div className="space-y-16">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.doi}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <span className="font-mono text-[11px] text-zinc-500 mb-4 block">ARCHIVE_NODE_0{index + 1}</span>
                  <h3 className="text-editorial-sub mb-6 group-hover:text-vibrant-cyan transition-colors duration-700">
                    {pub.title}
                  </h3>
                  <div className="flex flex-col gap-2 mb-8">
                     <span className="text-[12px] md:text-[13px] font-bold uppercase tracking-widest text-zinc-300">{pub.venue}</span>
                     <a 
                       href={`https://doi.org/${pub.doi}`} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="text-[11px] font-mono text-vibrant-cyan uppercase tracking-widest flex items-center gap-2 hover:underline font-semibold"
                     >
                       DOI: {pub.doi} <ArrowUpRight size={10} />
                     </a>
                  </div>
                  <p className="text-sm md:text-base text-zinc-400 leading-relaxed italic font-serif">
                    {pub.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default IntellectualProperty;
