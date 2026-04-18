import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { ArrowUpRight } from './Icons';

const IntellectualProperty = () => {
  const { publications, patents } = portfolioData;

  return (
    <section id="scholarship" className="py-24 md:py-40 px-6 bg-[#020617] border-b border-white/10 relative overflow-hidden">
      <div className="aurora-backdrop opacity-30" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 md:gap-32">
          
          {/* Patents Side */}
          <div>
            <div className="annotation mb-12 text-vibrant-amber font-black">
               INTELLECTUAL_PROPERTY.sys // DESIGNS
            </div>
            <div className="space-y-20">
              {patents.map((patent, index) => (
                <motion.div
                  key={patent.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <span className="font-mono text-[11px] text-vibrant-sky/50 mb-4 block font-black">REGISTRY_ENTRY_0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8 group-hover:text-vibrant-amber transition-colors duration-700 text-white">
                    {patent.title.split(' — ')[1]}
                  </h3>
                  <div className="flex flex-col gap-3 mb-10">
                     <span className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.2em] text-vibrant-sky">{patent.authority}</span>
                     <span className="text-[11px] font-mono text-vibrant-amber uppercase tracking-[0.4em] font-black">{patent.status}</span>
                  </div>
                  <p className="text-base md:text-xl text-vibrant-sky/80 leading-relaxed mb-10 italic font-serif font-medium">
                    {patent.description}
                  </p>
                  <div className="inline-block px-6 py-3 border border-vibrant-amber/30 rounded-2xl bg-vibrant-amber/10 font-mono text-[11px] text-vibrant-amber tracking-[0.4em] uppercase font-black">
                    ID_TOKEN: {patent.id}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Publications Side */}
          <div className="lg:border-l lg:border-white/10 lg:pl-32">
            <div className="annotation mb-12 text-vibrant-cyan font-black">
               SCHOLARLY_ARTIFACTS.sys // PUBLICATIONS
            </div>
            <div className="space-y-20">
              {publications.map((pub, index) => (
                <motion.div
                  key={pub.doi}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative"
                >
                  <span className="font-mono text-[11px] text-vibrant-sky/50 mb-4 block font-black">ARCHIVE_NODE_0{index + 1}</span>
                  <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tight leading-tight mb-8 group-hover:text-vibrant-cyan transition-colors duration-700 text-white">
                    {pub.title}
                  </h3>
                  <div className="flex flex-col gap-3 mb-10">
                     <span className="text-[14px] md:text-[16px] font-black uppercase tracking-[0.2em] text-vibrant-sky">{pub.venue}</span>
                     <a 
                       href={`https://doi.org/${pub.doi}`} 
                       target="_blank" 
                       rel="noreferrer" 
                       className="text-[11px] font-mono text-vibrant-cyan uppercase tracking-[0.4em] flex items-center gap-3 hover:underline font-black"
                     >
                       IDENTIFIER: {pub.doi} <ArrowUpRight size={14} />
                     </a>
                  </div>
                  <p className="text-base md:text-xl text-vibrant-sky/80 leading-relaxed italic font-serif font-medium">
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
