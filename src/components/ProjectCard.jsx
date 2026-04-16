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
           <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-widest italic">{project.title}</span>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 md:gap-16 mb-12 md:mb-16">
          <div className="space-y-4">
            <h4 className="text-[10px] md:text-[11px] font-mono font-black uppercase tracking-widest text-zinc-500">The Problem</h4>
            <p className="text-sm md:text-base text-zinc-400 leading-relaxed">{project.problem}</p>
          </div>
          <div className="space-y-4">
            <h4 className="text-[10px] md:text-[11px] font-mono font-black uppercase tracking-widest text-vibrant-cyan">The Impact</h4>
            <p className="text-sm md:text-base text-white font-medium leading-relaxed">{project.impact}</p>
          </div>
        </div>

        <div className="flex gap-8">
          <button className="impact-link text-[11px] font-mono font-bold uppercase tracking-[0.2em] flex items-center gap-2">
            Deep Dive <ArrowUpRight size={14} className="inline" />
          </button>
        </div>
      </div>

      {/* Monochromatic Visual Artifact with vibrant glow */}
      <div className="md:w-1/2 relative bg-white/[0.02] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden aspect-video transition-all duration-1000 border border-white/10 group-hover:border-vibrant-violet/30">
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-vibrant-violet/40 via-transparent to-transparent group-hover:from-vibrant-violet/60 transition-all duration-1000" />
           <div className="relative z-10 p-12 text-center">
              <span className="font-serif italic text-white/5 text-[8rem] md:text-[15rem] select-none group-hover:text-vibrant-violet/10 transition-all duration-1000">{project.id[0].toUpperCase()}</span>
           </div>
        </div>
        
        {/* Detail Annotation */}
        <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 right-6 md:right-10 flex justify-between items-end opacity-40 group-hover:opacity-100 transition-all duration-1000">
           <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-500">
              LOG_GEN // {project.id}
           </div>
           <div className="font-mono text-[9px] uppercase tracking-[0.4em] text-zinc-500 group-hover:text-vibrant-violet">
              CORE_V.2026
           </div>
        </div>
      </div>
    </motion.div>

  );
};

export default ProjectCard;
