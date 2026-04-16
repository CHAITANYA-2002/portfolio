import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 pt-32 pb-20 overflow-hidden bg-[#020617]">
      {/* High-Impact Vibrant Background */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{ x: mousePosition.x, y: mousePosition.y }}
          transition={{ type: 'spring', damping: 25, stiffness: 100 }}
          className="w-full h-full"
        >
          <img 
            src="/hero-vibrant.png" 
            alt="Vibrant Technical Background" 
            className="w-full h-full object-cover opacity-60 scale-110"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#020617]/40 to-[#020617]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -20, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            transition={{ duration: 1 }}
          >
            <div className="annotation text-vibrant-sky mb-8">
              // ARCHITECTING THE CONNECTED INTELLIGENCE //
            </div>
            
            <h1 className="text-editorial mb-10">
              Defining <br />
              The AI <br />
              Standard.
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-story mb-14 text-vibrant-sky font-medium"
          >
            Chaitanya Khurana — Technical Product Manager orchestrating the intersection of Generative AI, Saturated Data, and Strategic Impact.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap gap-8"
          >
            <a href="#projects" className="group relative px-10 py-5 bg-white text-black font-black uppercase tracking-[0.3em] text-[12px] hover:rounded-none transition-all duration-500 overflow-hidden rounded-xl">
              <span className="relative z-10">System_Portfolio</span>
              <div className="absolute inset-0 bg-vibrant-violet translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </a>
            <a href="#contact" className="px-10 py-5 border-2 border-white/20 text-white font-black uppercase tracking-[0.3em] text-[12px] hover:bg-white hover:text-black transition-all rounded-xl">
              Initiate_Contact
            </a>
          </motion.div>

          <div className="mt-20 flex flex-wrap gap-12 md:gap-16 pt-12 border-t border-white/10">
             <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest text-vibrant-violet font-black mb-2">Focus</span>
                <span className="font-mono text-sm text-vibrant-sky font-bold">RAG · Agents · MLPs</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest text-vibrant-emerald font-black mb-2">Metrics</span>
                <span className="font-mono text-sm text-vibrant-sky font-bold">Impact Driven</span>
             </div>
             <div className="flex flex-col">
                <span className="text-[11px] uppercase tracking-widest text-vibrant-cyan font-black mb-2">Current</span>
                <span className="font-mono text-sm text-vibrant-sky font-bold">Available for Strategy</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
