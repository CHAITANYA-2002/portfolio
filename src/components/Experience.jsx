import { motion } from 'framer-motion';
import TimelineItem from './TimelineItem';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <section id="experience" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Section header - Centered for Zigzag layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-32 flex flex-col items-center"
        >
          <div className="annotation mb-6">
            <span className="w-8 h-px bg-accent" /> THE CHRONICLE // IMPACT OVER TIME
          </div>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tightest leading-[0.9] mb-8">
            The Arc of <br />
            <span className="italic font-serif text-white/90">Execution.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl leading-relaxed">
            From deep technical engineering to orchestrating AI product strategy. A sequence of measurable outcomes and technical foundations.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Centered Vertical Line - Desktop Only */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent/5 via-accent/30 to-transparent hidden md:block" />

          <div className="flex flex-col gap-0 relative">
            {experience.map((exp, index) => (
              <TimelineItem
                key={`${exp.company}-${index}`}
                exp={exp}
                index={index}
                isLast={index === experience.length - 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
