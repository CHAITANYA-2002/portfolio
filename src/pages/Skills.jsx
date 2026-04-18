import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const categoryConfig = {
  'Product Leadership': {
    label: 'Product',
  },
  'AI & Data Engineering': {
    label: 'AI / Data',
  },
  'Cloud & Ecosystem': {
    label: 'Cloud & Engineering',
  },
};

const Skills = () => {
  const { skills } = portfolioData;

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <p className="label mb-6">Capabilities</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            Skills & Expertise
          </h1>
          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            Across product, engineering, and AI — the full stack of what I bring.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="flex flex-col gap-16">
          {Object.entries(skills).map(([category, items], catIndex) => {
            const config = categoryConfig[category] || { label: category };
            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-2 rounded-full bg-white/60" />
                  <h2 className="text-sm font-semibold text-gray-300 tracking-wide">
                    {config.label}
                  </h2>
                  <div className="flex-1 h-px bg-white/[0.06]" />
                </div>

                <div className="flex flex-wrap gap-3">
                  {items.map((skill, i) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: catIndex * 0.05 + i * 0.03, duration: 0.3 }}
                      whileHover={{ y: -2 }}
                      className="chip"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Skills;
