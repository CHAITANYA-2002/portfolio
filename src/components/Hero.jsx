import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 px-6">
      {/* 8k Ultra-High Resolution Asset */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero-8k.png" 
          alt="Technical Product Manager Portfolio Background" 
          className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-12 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.99, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center lg:items-start"
            >
              <div className="annotation">
                Technical Product Management // AI & Data Orchestration
              </div>
              <h1 className="text-editorial mb-12 uppercase">
                Architecting <br />
                <span className="italic font-serif text-vibrant-violet/50 lowercase">the</span> <br />
                Connected Intelligence.
              </h1>
              <p className="text-story max-w-2xl text-zinc-300">
                A builder-first Product Manager defining the intersection of <span className="text-white font-semibold italic underline decoration-vibrant-cyan/60 underline-offset-8">Machine Intelligence</span> and scalable enterprise ecosystems. Clean code. High-impact outcomes.
              </p>

              <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-12 md:gap-16 pt-12 border-t border-white/10 w-full">
                 <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-vibrant-violet font-bold mb-2">Focus</span>
                    <span className="font-mono text-sm text-white">RAG · Agents · MLPs</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-vibrant-emerald font-bold mb-2">Metrics</span>
                    <span className="font-mono text-sm text-white">Impact Driven</span>
                 </div>
                 <div className="flex flex-col">
                    <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-vibrant-cyan font-bold mb-2">Current</span>
                    <span className="font-mono text-sm text-white">Available for Strategy</span>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with subtle color pulse */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20">
        <motion.div 
          animate={{ scaleY: [1, 1.5, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-px h-12 bg-primary-blue" 
        />
      </div>
    </section>
  );
};

export default Hero;
