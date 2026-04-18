import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1], delay: i * 0.08 },
  }),
};

const ArrowUpRight = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="17" x2="17" y2="7"/>
    <polyline points="7 7 17 7 17 17"/>
  </svg>
);

const ProjectCard = ({ project, index, featured }) => (
  <motion.div
    initial={{ opacity: 0, y: 32 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.06, duration: 0.55, ease: [0.25, 0.1, 0.25, 1] }}
    className={`glass-card p-8 md:p-10 flex flex-col gap-6 group ${featured ? 'md:col-span-2' : ''}`}
    style={{ cursor: 'default' }}
  >
    {/* Impact — always visible, always dominant */}
    <div>
      <span className="label block mb-3">{project.tags[0]}</span>
      <p
        className={`font-bold text-white mb-1 ${featured ? 'text-2xl md:text-3xl' : 'text-xl md:text-2xl'}`}
        style={{ letterSpacing: '-0.03em', lineHeight: 1.2 }}
      >
        {project.impact}
      </p>
    </div>

    <div>
      <h3 className="text-base font-semibold text-gray-300 mb-2">{project.title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{project.problem}</p>
    </div>

    {featured && (
      <div>
        <p className="label mb-2">Approach</p>
        <p className="text-sm text-gray-500 leading-relaxed">{project.approach}</p>
      </div>
    )}

    <div className="flex flex-wrap gap-2">
      {project.tags.map((tag) => (
        <span key={tag} className="chip">{tag}</span>
      ))}
    </div>

    <div className="mt-auto pt-4 border-t border-white/[0.06] flex items-center justify-between">
      <span className="text-xs text-gray-500 font-medium">{project.outcome}</span>
      <motion.a
        href={`https://github.com/CHAITANYA-2002`}
        target="_blank"
        rel="noreferrer"
        whileHover={{ x: 2, y: -2 }}
        transition={{ duration: 0.15 }}
        className="flex items-center gap-1.5 text-xs font-medium text-gray-400 hover:text-white transition-colors"
      >
        GitHub <ArrowUpRight />
      </motion.a>
    </div>
  </motion.div>
);

const Projects = () => {
  const { projects } = portfolioData;
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          className="mb-20"
        >
          <motion.p variants={fadeUp} custom={0} className="label mb-6">
            Selected Work
          </motion.p>
          <motion.h1
            variants={fadeUp}
            custom={1}
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            Projects & Impact
          </motion.h1>
          <motion.p
            variants={fadeUp}
            custom={2}
            className="text-gray-400 mt-6 max-w-lg leading-relaxed"
          >
            Each project led with the outcome it produced.
          </motion.p>
        </motion.div>

        {/* Featured row */}
        {featured.length > 0 && (
          <div className="mb-6">
            {featured.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} featured />
            ))}
          </div>
        )}

        {/* Grid */}
        {rest.length > 0 && (
          <div className="grid md:grid-cols-2 gap-6">
            {rest.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + featured.length} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
