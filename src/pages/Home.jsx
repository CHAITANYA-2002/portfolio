import { lazy, Suspense, useState } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';
import { GitHubIcon, LinkedInIcon } from '../components/BrandIcons';

const ThreeHeroScene = lazy(() => import('../components/ThreeHeroScene'));

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

const SectionHeader = ({ kicker, title, copy, align = 'left' }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
    className={`mb-14 ${align === 'center' ? 'text-center mx-auto flex flex-col items-center' : ''}`}
  >
    <motion.p variants={fadeUp} className="section-kicker mb-5">{kicker}</motion.p>
    <motion.h2 variants={fadeUp} custom={0.08} className="editorial-heading max-w-4xl">
      {title}
    </motion.h2>
    {copy && (
      <motion.p variants={fadeUp} custom={0.16} className="mt-6 max-w-2xl text-base md:text-lg text-stone-400 leading-relaxed">
        {copy}
      </motion.p>
    )}
  </motion.div>
);

const metricNotes = {
  "AI Products Shipped": "End-to-end AI products delivered from scope to deployment, not just prototypes.",
  "Reduction in Loan Defaults": "Credit scoring work translated into a measurable risk outcome.",
  "Pre-launch Bug Resolution": "Release quality work focused on catching issues before users did.",
  "Experience": "Hands-on work across AI, data, QA, cloud, and product delivery.",
};

const ProjectCard = ({ project, index, active, onSelect }) => (
  <motion.button
    type="button"
    onClick={onSelect}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }}
    transition={{ duration: 0.55, delay: index * 0.035 }}
    whileHover={{ y: -8, scale: 1.018, rotateX: 2 }}
    whileTap={{ scale: 0.985 }}
    className={`project-card text-left ${active ? 'is-active' : ''}`}
    aria-pressed={active}
  >
    <motion.span
      className="project-card-sheen"
      initial={{ x: '-130%', opacity: 0 }}
      whileHover={{ x: '130%', opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    />
    <div className="flex items-start justify-between gap-6">
      <span className="section-kicker">{project.tags[0]}</span>
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
    </div>
    <div className="mt-10">
      <p className="text-sm text-stone-400 mb-3">{project.outcome}</p>
      <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-normal leading-tight">
        {project.title}
      </h3>
      <p className="mt-5 text-sm text-stone-400 leading-relaxed max-w-xl">{project.impact}</p>
    </div>
    <p className="mt-8 text-sm text-stone-500 leading-relaxed">{project.approach}</p>
    <div className="mt-8 flex flex-wrap gap-2">
      {project.tags.map((tag) => <span key={tag} className="chip">{tag}</span>)}
    </div>
  </motion.button>
);

const JourneyTheater = ({ activeIndex, setActiveIndex }) => {
  const active = portfolioData.experience[activeIndex];
  const progress = portfolioData.experience.length > 1
    ? (activeIndex / (portfolioData.experience.length - 1)) * 100
    : 0;

  return (
    <div className="journey-theater">
      <div className="zigzag-timeline" role="tablist" aria-label="Experience timeline">
        <div className="zigzag-line" aria-hidden="true">
          <motion.div
            className="zigzag-line-progress"
            animate={{ height: `${progress}%` }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          />
        </div>
        {portfolioData.experience.map((exp, index) => (
          <motion.button
            key={`${exp.company}-${exp.duration}`}
            type="button"
            role="tab"
            aria-selected={activeIndex === index}
            onClick={() => setActiveIndex(index)}
            whileHover={{ y: -6, scale: 1.01 }}
            whileTap={{ scale: 0.985 }}
            className={`zigzag-card ${index % 2 === 0 ? 'is-left' : 'is-right'} ${activeIndex === index ? 'is-active' : ''}`}
          >
            <span className="timeline-node-wrap">
              <span className="timeline-node" />
              <span className="story-number">{String(index + 1).padStart(2, '0')}</span>
            </span>
            <span className="zigzag-copy">
              <span className="section-kicker mb-3">{exp.duration}</span>
              <span className="block text-xl md:text-2xl font-semibold text-white">{exp.company}</span>
              <span className="block mt-2 text-sm text-stone-400">{exp.role}</span>
            </span>
          </motion.button>
        ))}
      </div>

      <motion.article
        key={`${active.company}-${active.duration}`}
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 0.45 }}
        className="journey-stage"
      >
        <motion.div
          className="journey-stage-meter"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: (activeIndex + 1) / portfolioData.experience.length }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
        <p className="section-kicker mb-5">{active.company}</p>
        <h3 className="text-3xl md:text-5xl font-semibold text-white leading-tight">
          {active.role}
        </h3>
        <p className="mt-5 max-w-2xl text-stone-300 leading-relaxed">{active.summary}</p>

        <div className="mt-8 grid md:grid-cols-3 gap-3">
          {active.bullets.map((bullet, index) => (
            <motion.div
              key={bullet}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08, duration: 0.35 }}
              whileHover={{ y: -4 }}
              className="impact-tile"
            >
              {bullet}
            </motion.div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {active.tech.map((item) => <span key={item} className="chip">{item}</span>)}
        </div>
      </motion.article>
    </div>
  );
};

const SkillsConstellation = () => {
  const entries = Object.entries(portfolioData.skills);
  const [activeCategory, setActiveCategory] = useState(entries[0][0]);

  return (
    <div className="grid lg:grid-cols-3 gap-6">
      {entries.map(([category, skills], categoryIndex) => (
        <motion.button
          type="button"
          key={category}
          onClick={() => setActiveCategory(category)}
          initial={{ opacity: 0, rotateX: 8, y: 24 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: categoryIndex * 0.08 }}
          whileHover={{ y: -6, rotateX: 3 }}
          className={`skill-constellation text-left ${activeCategory === category ? 'is-active' : ''}`}
          aria-pressed={activeCategory === category}
        >
          <div className="absolute inset-0 opacity-40">
            <div className="skill-orbit skill-orbit-one" />
            <div className="skill-orbit skill-orbit-two" />
          </div>
          <div className="relative z-10">
            <span className="section-kicker">Constellation {categoryIndex + 1}</span>
            <h3 className="mt-4 text-2xl font-semibold text-white tracking-normal">{category}</h3>
            <div className="mt-8 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.88 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.28, delay: index * 0.025 }}
                  whileHover={{ scale: 1.05 }}
                  className="skill-node"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.button>
      ))}
    </div>
  );
};

const ResearchCard = ({ item, label }) => (
  <motion.article
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -6, scale: 1.01 }}
    className="glass-card interactive-card p-8 md:p-10"
  >
    <p className="section-kicker mb-5">{label}</p>
    <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-normal leading-tight">
      {item.title}
    </h3>
    <p className="mt-5 text-sm text-stone-400 leading-relaxed">{item.description}</p>
    <div className="mt-8 grid gap-2 text-sm text-stone-500">
      {'venue' in item && <p>{item.venue}</p>}
      {'doi' in item && <p>{item.doi}</p>}
      {'authority' in item && <p>{item.authority}</p>}
      {'status' in item && <p>{item.status}</p>}
      {'id' in item && <p>{item.id}</p>}
    </div>
  </motion.article>
);

const Home = () => {
  const featuredMetric = portfolioData.metrics;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [activeMetric, setActiveMetric] = useState(portfolioData.metrics[0].label);
  const activeProject = portfolioData.projects[activeProjectIndex];

  return (
    <div id="home" className="overflow-hidden">
      <section className="relative min-h-screen px-6 pt-28 pb-20 flex items-center hero-section">
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(199,178,122,0.12),transparent_28rem)]" />}>
            <ThreeHeroScene />
          </Suspense>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(199,178,122,0.16),transparent_28%),linear-gradient(90deg,#0B0B0F_0%,rgba(11,11,15,0.92)_38%,rgba(11,11,15,0.52)_100%)]" />
        </div>

        <div className="relative z-10 max-w-[1200px] mx-auto w-full grid lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
          <motion.div initial="hidden" animate="show">
            <motion.p variants={fadeUp} className="section-kicker mb-6">
              Product strategy · AI systems · FinTech intelligence
            </motion.p>
            <motion.h1 variants={fadeUp} custom={0.08} className="hero-heading max-w-5xl">
              I build products that feel inevitable.
            </motion.h1>
            <motion.p variants={fadeUp} custom={0.16} className="mt-8 max-w-xl text-lg text-stone-300 leading-relaxed">
              Chaitanya Khurana turns raw technical systems into sharp product stories, working across AI, data, healthcare, and fintech.
            </motion.p>
            <motion.div variants={fadeUp} custom={0.24} className="mt-10 flex flex-wrap gap-4">
              <a href="#projects" className="btn-primary">See the work</a>
              <a href="#journey" className="btn-secondary">Read the journey</a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="hidden lg:block"
          >
            <div className="hero-manifesto">
              <p className="section-kicker mb-6">Operating principle</p>
              <p className="text-3xl font-semibold tracking-normal text-white leading-tight">
                Make the complex usable, the measurable memorable, and the product impossible to ignore.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="px-6 py-12 border-y border-white/10 bg-white/[0.025]">
        <div className="max-w-[1200px] mx-auto grid lg:grid-cols-[1fr_320px] gap-8 items-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {featuredMetric.map((metric) => (
            <button
              type="button"
              key={metric.label}
              onClick={() => setActiveMetric(metric.label)}
              className={`metric-button text-left ${activeMetric === metric.label ? 'is-active' : ''}`}
            >
              <p className="text-4xl md:text-5xl font-semibold text-white tracking-normal">
                {metric.value}{metric.suffix}
              </p>
              <p className="mt-2 text-sm text-stone-500">{metric.label}</p>
            </button>
          ))}
          </div>
          <motion.p
            key={activeMetric}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="metric-note"
          >
            {metricNotes[activeMetric]}
          </motion.p>
        </div>
      </section>

      <section id="projects" className="section-shell">
        <SectionHeader
          kicker="Selected projects"
          title="A portfolio of useful systems, not template case studies."
          copy="The work spans fintech decisioning, edge AI, healthcare operations, business intelligence, and web experiences."
        />
        <div className="project-lab">
          <motion.aside
            key={activeProject.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="project-detail-panel"
          >
            <div className="project-preview-orbit" aria-hidden="true">
              <motion.div
                className="project-preview-core"
                animate={{ rotate: 360 }}
                transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
              />
              <motion.div
                className="project-preview-ring"
                animate={{ rotate: -360 }}
                transition={{ duration: 26, repeat: Infinity, ease: 'linear' }}
              />
            </div>
            <div>
              <p className="section-kicker mb-5">Selected case</p>
              <h3 className="text-3xl md:text-4xl font-semibold text-white">{activeProject.title}</h3>
              <p className="mt-4 text-stone-300 leading-relaxed">{activeProject.problem}</p>
              <div className="mt-6 grid gap-3">
                <p><span>Outcome</span>{activeProject.outcome}</p>
                <p><span>Impact</span>{activeProject.impact}</p>
                <p><span>Approach</span>{activeProject.approach}</p>
              </div>
            </div>
          </motion.aside>
          <div className="project-grid">
            {portfolioData.projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                active={activeProjectIndex === index}
                onSelect={() => setActiveProjectIndex(index)}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="journey" className="section-shell">
        <SectionHeader
          kicker="Journey + experience"
          title="The path from engineer to product operator."
          copy="Each role added a new layer: cloud foundations, data science, release quality, and now end-to-end AI product delivery."
        />
        <JourneyTheater activeIndex={activeJourneyIndex} setActiveIndex={setActiveJourneyIndex} />
      </section>

      <section id="skills" className="section-shell">
        <SectionHeader
          kicker="Skills"
          title="A creative toolkit for product work with technical depth."
          copy="Built around three constellations: product leadership, AI/data engineering, and cloud ecosystem execution."
        />
        <SkillsConstellation />
      </section>

      <section id="research" className="section-shell">
        <SectionHeader
          kicker="Research + patent"
          title="The technical foundation is part of the character."
          copy="Peer-reviewed research and registered design IP stay visible because credibility should have a paper trail."
        />
        <div className="grid lg:grid-cols-2 gap-6">
          {portfolioData.publications.map((publication) => (
            <ResearchCard key={publication.doi} item={publication} label="Research Paper" />
          ))}
          {portfolioData.patents.map((patent) => (
            <ResearchCard key={patent.id} item={patent} label="Design Patent" />
          ))}
        </div>
      </section>

      <section id="contact" className="section-shell pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="contact-panel"
        >
          <div>
            <p className="section-kicker mb-6">Contact</p>
            <h2 className="editorial-heading max-w-3xl">Have a system worth shaping?</h2>
            <p className="mt-6 max-w-xl text-stone-400 leading-relaxed">
              Open to strategic PM engagements, AI product partnerships, and consulting across product, data, and automation.
            </p>
          </div>
          <div className="grid gap-3">
            <a href={`mailto:${portfolioData.email}`} className="contact-link">{portfolioData.email}</a>
            <a href="https://linkedin.com/in/chaitanya-khurana" target="_blank" rel="noreferrer" className="contact-link brand-link">
              <LinkedInIcon className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/CHAITANYA-2002" target="_blank" rel="noreferrer" className="contact-link brand-link">
              <GitHubIcon className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://wa.me/917976989699" target="_blank" rel="noreferrer" className="whatsapp-button mt-3">
              <span className="whatsapp-dot" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
