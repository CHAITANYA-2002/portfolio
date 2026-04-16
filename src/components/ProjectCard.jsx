import { motion } from 'framer-motion';
import { ArrowUpRight } from './Icons';

const ProjectCard = ({ project, index }) => {
  const isStaggered = index % 2 !== 0;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98, filter: "blur(15px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className={`group relative flex flex-col gap-12 py-20 md:py-32 border-b border-white/5 last:border-0 ${
        isStaggered ? 'md:flex-row-reverse' : 'md:flex-row'
      }`}
    >
      <div className="md:w-1/2 flex flex-col justify-center">
        <div className="annotation">
           CASE_STUDY_0{index + 1} // {project.tags[0]}
        </div>
        
        <h3 className="text-editorial-sub mb-8 uppercase">
          {project.outcome}
        </h3>

        <div className="flex items-center gap-4 mb-10">
           <span className="text-[12px] md:text-[14px] font-mono text-vibrant-sky font-bold uppercase tracking-widest italic">{project.title}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-4">
            <h4 className="text-[11px] md:text-[13px] font-mono font-black uppercase tracking-widest text-vibrant-violet/80">The Problem</h4>
            <p className="text-sm md:text-base text-vibrant-sky/80 leading-relaxed font-medium">{project.problem}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[11px] md:text-[13px] font-mono font-black uppercase tracking-widest text-vibrant-cyan">The Impact</h4>
            <p className="text-sm md:text-base text-white font-black leading-relaxed">{project.impact}</p>
          </div>
        </div>

        <div className="flex gap-8">
          <button className="impact-link text-[12px] md:text-[13px] font-mono font-black uppercase tracking-[0.3em] flex items-center gap-2">
            System_Deep_Dive <ArrowUpRight size={14} className="inline" />
          </button>
        </div>
      </div>

      {/* Visual Artifact (Vivid Navy Upgrade) */}
      <div className="md:w-1/2 relative bg-[#020617] rounded-[2rem] md:rounded-[3rem] overflow-hidden aspect-video transition-all duration-1000 border border-white/10 group-hover:border-vibrant-violet/50 shadow-2xl">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-full h-full opacity-30 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vibrant-violet/20 via-transparent to-transparent group-hover:from-vibrant-violet/40 transition-all duration-1000" />
           <div className="relative z-10 p-12 text-center">
              <span className="font-serif italic text-white/10 text-[8rem] md:text-[15rem] select-none group-hover:text-vibrant-violet/20 transition-all duration-1000 drop-shadow-2xl">{project.id[0].toUpperCase()}</span>
           </div>
        </div>
        
        {/* Detail Annotation (High-Contrast Sky) */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10 flex justify-between items-end opacity-60 group-hover:opacity-100 transition-all duration-1000">
           <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-vibrant-sky/70 font-bold">
              LOG_GEN // {project.id}
           </div>
           <div className="font-mono text-[10px] uppercase tracking-[0.4em] text-vibrant-sky/70 group-hover:text-vibrant-violet transition-colors font-bold">
              CORE_V.2026
           </div>
        </div>
      </div>
    </motion.div>

  );
};

export default ProjectCard;
