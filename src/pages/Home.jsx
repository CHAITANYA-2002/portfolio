import { lazy, Suspense, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
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

const tagTone = (tag) => {
  const value = tag.toLowerCase();
  
  // STACK (Tools / Languages / Frameworks) -> Sapphire
  if (value.includes('python') || value.includes('tensorflow') || value.includes('flask') || value.includes('sql') || 
      value.includes('react') || value.includes('javascript') || value.includes('vite') || value.includes('typescript') ||
      value.includes('node') || value.includes('express') || value.includes('mongo') || value.includes('mern') ||
      value.includes('azure') || value.includes('docker') || value.includes('github actions') || value.includes('devops') ||
      value.includes('c++') || value.includes('cpp') || value.includes('jupyter') || value.includes('notebook') ||
      value.includes('html') || value.includes('css') || value.includes('selenium') || value.includes('jira') ||
      value.includes('langchain') || value.includes('opencv') || value.includes('embedded c')) 
    return 'tone-sapphire';
    
  // CORE (Hard Skills / Techniques / Hard Skills / Methodologies) -> Emerald
  if (value.includes('modeling') || value.includes('risk') || value.includes('data engineering') || value.includes('dashboarding') ||
      value.includes('rag') || value.includes('prompt') || value.includes('statistical') || value.includes('analytics') || 
      value.includes('eda') || value.includes('optimization') || value.includes('testing') || value.includes('qa') ||
      value.includes('benchmarking') || value.includes('watermarking') || value.includes('steganography') || 
      value.includes('retinal') || value.includes('biomedical'))
    return 'tone-emerald';
    
  // LEAD (Product / Strategy / Soft Skills / Vision) -> Violet
  if (value.includes('strategy') || value.includes('vision') || value.includes('product') || value.includes('fintech') ||
      value.includes('ux') || value.includes('mapping') || value.includes('monetization') || value.includes('pricing') ||
      value.includes('requirement') || value.includes('stakeholder') || value.includes('management') || value.includes('leadership') ||
      value.includes('innovation') || value.includes('academic') || value.includes('research') || value.includes('collaboration') ||
      value.includes('communication') || value.includes('presentation') || value.includes('storytelling') || value.includes('roadmapping'))
    return 'tone-violet';

  return 'tone-ivory';
};

const skillNotes = {
  "Product & Business Strategy": "The executive bridge—merging market-shifting strategy with PRD governance, stakeholder buy-in, and MECE-based problem solving.",
  "AI & Data Engineering": "Building production AI systems at scale—from Vector DB orchestration to prompt optimization and full-lifecycle MLOps deployment.",
  "Data & Business Intelligence": "Hard data as a product lens—using deep SQL, cohort analysis, and BI dashboards to drive every strategic decision.",
  "Cloud & System Architecture": "The high-level foundation—focused on microservices scalability, RESTful API design, and robust infrastructure-as-code.",
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
    layout
  >
    <div className="premium-card-glow" aria-hidden="true" />
    <motion.span
      className="project-card-sheen"
      initial={{ x: '-130%', opacity: 0 }}
      whileHover={{ x: '130%', opacity: 1 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    />
    <div className="flex items-start justify-between gap-6">
      <span className="section-kicker">{project.hardSkills[0]}</span>
      <span className="project-index">{String(index + 1).padStart(2, '0')}</span>
    </div>
    <div className="mt-10 project-card-main">
      <p className="text-sm text-stone-400 mb-3">{project.outcome}</p>
      <h3 className="text-2xl md:text-3xl font-semibold text-white tracking-normal leading-tight">
        {project.title}
      </h3>
      <p className="mt-5 text-sm text-stone-400 leading-relaxed max-w-xl">{project.impact}</p>
    </div>
    <AnimatePresence initial={false}>
      {active && (
        <motion.div
          initial={{ opacity: 0, height: 0, y: -8 }}
          animate={{ opacity: 1, height: 'auto', y: 0 }}
          exit={{ opacity: 0, height: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="project-expanded"
        >
          <div className="grid gap-3 mb-8">
            <p><span>Problem</span>{project.problem}</p>
            <p><span>Approach</span>{project.approach}</p>
            <p><span>Outcome</span>{project.outcome}</p>
          </div>

          {/* Categorized Skills (Mirroring Experience section) */}
          <div className="space-y-5 pt-5 border-t border-white/5">
            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((item) => (
                  <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                ))}
              </div>
            </motion.div>

            {/* Hard Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> CORE
              </p>
              <div className="flex flex-wrap gap-2">
                {project.hardSkills.map((item) => (
                  <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                ))}
              </div>
            </motion.div>

            {/* Soft Skills */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> LEAD
              </p>
              <div className="flex flex-wrap gap-2">
                {project.softSkills.map((item) => (
                  <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.button>
);

const JourneyTheater = ({ activeIndex, setActiveIndex }) => {
  const progress = portfolioData.experience.length > 1
    ? (activeIndex / (portfolioData.experience.length - 1)) * 100
    : 0;

  return (
    <div className="s-journey-theater">
      {/* Mobile progress line */}
      <div className="s-line-mobile" aria-hidden="true">
        <motion.div
          className="s-line-mobile-progress"
          animate={{ height: `${progress}%` }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>

      <motion.div
        className="s-timeline"
        role="tablist"
        aria-label="Experience timeline"
        layout
      >
        {/* S-curve — purely decorative, sits behind cards */}
        <svg
          className="s-timeline-path"
          viewBox="0 0 400 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <motion.path
            d="M200 2 C40 15 40 38 200 52 S360 78 200 92 S40 108 200 98"
            pathLength="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>

        {portfolioData.experience.map((exp, index) => {
          const isActive = activeIndex === index;
          return (
            <motion.button
              key={`${exp.company}-${exp.duration}`}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveIndex(index)}
              layout
              layoutId={`s-card-${index}`}
              whileHover={!isActive ? { y: -5, scale: 1.008 } : {}}
              whileTap={{ scale: 0.99 }}
              transition={{ layout: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }}
              className={`s-card s-card-${index + 1} ${index % 2 === 0 ? 'is-left' : 'is-right'} ${isActive ? 'is-active' : ''}`}
            >
              {/* Left column: node + number */}
              <span className="timeline-node-wrap">
                <motion.span
                  className="timeline-node"
                  animate={isActive
                    ? { scale: [1, 1.3, 1], opacity: 1 }
                    : { scale: 1, opacity: 1 }
                  }
                  transition={{ duration: 0.4, ease: 'easeOut' }}
                />
                <span className="story-number">{String(index + 1).padStart(2, '0')}</span>
              </span>

              {/* Right column: text content */}
              <span className="zigzag-copy">
                <span className="section-kicker mb-3">{exp.duration}</span>
                <span className="block text-xl md:text-2xl font-semibold text-white leading-tight">
                  {exp.company}
                </span>
                <span className="block mt-1.5 text-sm text-stone-400 font-medium">{exp.role}</span>
                <span className="block mt-3 text-sm text-stone-500 leading-relaxed">{exp.summary}</span>

                {/* Expanded content — animates in/out with layout */}
                <AnimatePresence initial={false} mode="sync">
                  {isActive && (
                    <motion.span
                      key="expanded"
                      initial={{ opacity: 0, height: 0, y: -6 }}
                      animate={{ opacity: 1, height: 'auto', y: 0 }}
                      exit={{ opacity: 0, height: 0, y: -6 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
                        opacity: { duration: 0.3, delay: 0.08 },
                        y: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
                      }}
                      className="block overflow-hidden"
                    >
                      {/* Bullets with stagger */}
                      <span className="mt-5 grid gap-2.5">
                        {exp.bullets.map((bullet, bi) => (
                          <motion.span
                            key={bullet}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.12 + bi * 0.06, duration: 0.3, ease: 'easeOut' }}
                            className="timeline-detail-line"
                          >
                            {bullet}
                          </motion.span>
                        ))}
                      </span>

                      {/* Categorized Skills */}
                      <div className="mt-6 space-y-5">
                        {/* Tech Stack */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.25 }}
                        >
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                            <span className="w-[1px] h-3 bg-stone-600/60" /> STACK
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.techStack.map((item) => (
                              <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Hard Skills */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.35 }}
                        >
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                            <span className="w-[1px] h-3 bg-stone-600/60" /> CORE
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.hardSkills.map((item) => (
                              <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                            ))}
                          </div>
                        </motion.div>

                        {/* Soft Skills */}
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.45 }}
                        >
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-2 flex items-center gap-2">
                            <span className="w-[1px] h-3 bg-stone-600/60" /> LEAD
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {exp.softSkills.map((item) => (
                              <span key={item} className={`tech-pill ${tagTone(item)}`}>{item}</span>
                            ))}
                          </div>
                        </motion.div>
                      </div>
                    </motion.span>
                  )}
                </AnimatePresence>
              </span>
            </motion.button>
          );
        })}
      </motion.div>
    </div>
  );
};

const SkillsConstellation = () => {
  const entries = Object.entries(portfolioData.skills);
  const [activeCategory, setActiveCategory] = useState(entries[0][0]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {entries.map(([category, skills], categoryIndex) => (
        <motion.button
          type="button"
          key={category}
          onClick={() => setActiveCategory(category)}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: categoryIndex * 0.08 }}
          whileHover={{ y: -8, scale: 1.018, rotateX: 2 }}
          className={`skill-constellation text-left ${activeCategory === category ? 'is-active' : ''}`}
          aria-pressed={activeCategory === category}
        >
          <div className="premium-card-glow" aria-hidden="true" />
          
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="skill-orbit skill-orbit-one" />
            <div className="skill-orbit skill-orbit-two" />
          </div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-start justify-between">
              <span className="section-kicker">Constellation {String(categoryIndex + 1).padStart(2, '0')}</span>
            </div>
            
            <h3 className="mt-8 text-2xl md:text-3xl font-semibold text-white tracking-normal leading-tight flex items-center gap-3">
              <span className="w-[1.5px] h-8 bg-[#C7B27A]/40" /> {category}
            </h3>

            <AnimatePresence initial={false}>
              {activeCategory === category && (
                <motion.p
                  initial={{ opacity: 0, height: 0, y: -6 }}
                  animate={{ opacity: 1, height: 'auto', y: 0 }}
                  exit={{ opacity: 0, height: 0, y: -6 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="skill-expanded-copy"
                >
                  {skillNotes[category]}
                </motion.p>
              )}
            </AnimatePresence>

            <div className="mt-auto pt-10 flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  className={`skill-node ${tagTone(skill)}`}
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

/* ── Research / IP Showcase ───────────────────────────────── */
const TypeBadge = ({ type }) => {
  const map = {
    'Conference Paper': { color: '#A8C5FF', bg: 'rgba(82,113,164,0.18)', border: 'rgba(113,146,201,0.34)', icon: '◈' },
    'Design Patent':    { color: '#E8D39A', bg: 'rgba(199,178,122,0.16)', border: 'rgba(199,178,122,0.34)', icon: '◇' },
  };
  const s = map[type] || map['Conference Paper'];
  return (
    <span style={{ color: s.color, background: s.bg, border: `1px solid ${s.border}` }}
      className="research-type-badge">
      <span>{s.icon}</span>{type}
    </span>
  );
};

const ResearchShowcase = () => {
  const all = [
    ...portfolioData.publications.map(p => ({ ...p, label: 'Research Paper' })),
    ...portfolioData.patents.map(p  => ({ ...p, label: 'Design Patent'  })),
  ];

  return (
    <div className="research-showcase">
      {all.map((item, i) => (
        <motion.a
          key={item.href}
          href={item.href}
          target="_blank"
          rel="noreferrer noopener"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          whileHover="hover"
          className="research-card"
          aria-label={`Open ${item.title}`}
        >
          {/* Glow orb */}
          <div className="premium-card-glow" aria-hidden="true" />

          {/* Top bar */}
          <div className="research-card-topbar">
            <TypeBadge type={item.type} />
            <span className="research-year">{item.year}</span>
          </div>

          {/* Title */}
          <h3 className="research-title">{item.title}</h3>

          {/* Abstract / description */}
          <p className="research-abstract">{item.description}</p>

          {/* Metadata grid */}
          <dl className="research-meta">
            {item.publisher && (
              <>
                <dt>Published in</dt>
                <dd>{item.publisher}</dd>
              </>
            )}
            {item.venue && (
              <>
                <dt>Conference</dt>
                <dd>{item.venue}</dd>
              </>
            )}
            {item.doi && (
              <>
                <dt>DOI</dt>
                <dd className="research-doi">{item.doi}</dd>
              </>
            )}
            {item.authority && (
              <>
                <dt>Authority</dt>
                <dd>{item.authority}</dd>
              </>
            )}
            {item.id && (
              <>
                <dt>Application</dt>
                <dd>{item.id}</dd>
              </>
            )}
            {item.status && (
              <>
                <dt>Status</dt>
                <dd className="research-status">
                  <span className="research-status-dot" />
                  {item.status}
                </dd>
              </>
            )}
            <dt>Contribution</dt>
            <dd>{item.coAuthors}</dd>
          </dl>

          {/* Categorized Skills (Unified Model) */}
          <div className="space-y-5 pt-8 mt-5 border-t border-white/5">
            {/* Tech Stack */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> STACK
              </p>
              <div className="flex flex-wrap gap-2">
                {item.techStack.map((v) => (
                  <span key={v} className={`tech-pill ${tagTone(v)}`}>{v}</span>
                ))}
              </div>
            </div>

            {/* Hard Skills */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> CORE
              </p>
              <div className="flex flex-wrap gap-2">
                {item.hardSkills.map((v) => (
                  <span key={v} className={`tech-pill ${tagTone(v)}`}>{v}</span>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                <span className="w-[1px] h-3 bg-stone-600/60" /> LEAD
              </p>
              <div className="flex flex-wrap gap-2">
                {item.softSkills.map((v) => (
                  <span key={v} className={`tech-pill ${tagTone(v)}`}>{v}</span>
                ))}
              </div>
            </div>
          </div>

          {/* CTA footer */}
          <div className="research-cta">
            <span>View {item.label}</span>
            <motion.span
              variants={{ hover: { x: 5 } }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="research-arrow"
            >
              →
            </motion.span>
          </div>

          {/* Animated accent line on hover */}
          <motion.div
            className="research-card-line bg-[#C7B27A]"
            variants={{ hover: { scaleX: 1 } }}
            initial={{ scaleX: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          />
        </motion.a>
      ))}
    </div>
  );
};

const CredentialsShowcase = () => {
  const certifications = portfolioData.certifications || [];
  const education = portfolioData.education || [];

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e, cardId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: cardId
    });
  };

  return (
    <div className="space-y-12">
      {education.map((edu) => (
        <div
          key={edu.degree}
          onMouseMove={(e) => handleMouseMove(e, edu.degree)}
          className="research-card cursor-default border-white/10 relative overflow-hidden group transition-all duration-500 hover:border-[#C7B27A]/40"
          style={{ 
            background: 'rgba(255, 255, 255, 0.08)',
            padding: '56px',
            boxShadow: '0 32px 80px rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)'
          }}
        >
          {/* Atmospheric Background Lighting */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-40" />
          
          {/* Swiping Light Interaction */}
          <motion.div 
            className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            style={{
              background: mousePosition.id === edu.degree ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(16, 185, 129, 0.06), transparent 40%)` : ''
            }}
          />

          <div className="grid lg:grid-cols-[0.4fr_0.6fr] gap-20 relative z-10 items-center">
            {/* Left Column: Academic Authority */}
            <div className="relative">
              <div className="flex flex-col gap-4 mb-10">
                <div className="flex items-center gap-3">
                  <span className="tech-pill tone-emerald w-fit text-[11px] px-5 py-2 font-bold uppercase tracking-widest border-emerald-500/40 bg-emerald-500/5">
                    {edu.university}
                  </span>
                  <div className="h-[1px] w-12 bg-emerald-500/30" />
                </div>
                <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-emerald-500/60 font-bold group-hover:text-emerald-500 transition-colors duration-500">ACADEMIC_FOUNDATION // PEDIGREE</p>
              </div>

              <h3 className="hero-heading !text-5xl lg:!text-6xl !leading-[1.1] text-white mb-8 tracking-tight">
                {edu.degree}
              </h3>
              
              <div className="flex items-center gap-6">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                  <p className="text-stone-300 text-sm leading-relaxed max-w-sm">
                    Strategic B.Tech core focused on **enterprise algorithms**, **cloud orchestration**, and **distributed system architecture**.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column: Coursework & Dissertation */}
            <div className="space-y-12 border-l border-white/5 pl-12">
              <div className="p-8 rounded-[2rem] bg-black/60 border border-emerald-500/10 backdrop-blur-2xl relative group-hover:border-[#C7B27A]/30 transition-colors duration-500">
                <div className="absolute top-4 right-6 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-400 mb-5 flex items-center gap-2">
                  TECHNICAL_DISSERTATION / CAPSTONE
                </p>
                <p className="text-xl text-stone-100 font-medium leading-relaxed italic mb-6">
                  "{edu.dissertation}"
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[9px] uppercase tracking-widest text-emerald-500/60 font-mono">
                  <span className="px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">Logic: QR Orchestration</span>
                  <span className="px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">Stack: AI // Computer Vision</span>
                  <span className="px-3 py-1.5 bg-emerald-500/5 border border-emerald-500/10 rounded-lg">Scope: Real-time Retrieval</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between items-center mb-5 px-1">
                  <p className="text-[10px] font-bold uppercase tracking-widest text-stone-400 flex items-center gap-2">
                    <span className="w-[1px] h-3 bg-stone-600/60" /> Coursework Pipeline
                  </p>
                  <p className="text-[9px] font-mono text-emerald-500/60 uppercase">CORE_MODULES // SYNCED</p>
                </div>
                <div className="flex flex-wrap gap-3">
                  {edu.modules.map((mod) => (
                    <span key={mod} className={`tech-pill text-[11px] font-bold ${tagTone(mod)} px-4 py-2 border-white/10 hover:brightness-125 cursor-default transition-all duration-300`}>
                      {mod}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <motion.div
            className="research-card-line bg-[#C7B27A]"
            style={{ scaleX: 1, opacity: 0.2, height: '1px' }}
          />
        </div>
      ))}

      {/* ── Industry Certifications Grid ────────────────────────── */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
        {certifications.map((cert) => {
          const brandThemes = {
            microsoft: { color: '#00A4EF', pill: 'tone-sapphire', glow: 'rgba(0, 164, 239, 0.1)' },
            databricks: { color: '#FF3621', pill: 'tone-amber', glow: 'rgba(255, 54, 33, 0.1)' },
            oracle: { color: '#F80000', pill: 'tone-red', glow: 'rgba(248, 0, 0, 0.1)' }
          };
          const theme = brandThemes[cert.vendor] || { color: '#C7B27A', pill: 'tone-gold', glow: 'rgba(199, 178, 122, 0.1)' };

          return (
            <div
              key={cert.title}
              onMouseMove={(e) => handleMouseMove(e, cert.title)}
              className="research-card flex flex-col cursor-default group transition-all duration-500 hover:border-[#C7B27A]/40"
              style={{ 
                background: 'rgba(255, 255, 255, 0.08)',
                boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)'
              }}
            >
              {/* Swiping Brand Light */}
              <motion.div 
                className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: mousePosition.id === cert.title ? `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, ${theme.glow}, transparent 60%)` : ''
                }}
              />
              
              <div className="research-card-topbar items-start relative z-10">
                <div className="flex flex-col gap-2">
                  <span className={`tech-pill transition-all duration-500 w-fit border-white/5 ${theme.pill} opacity-60 group-hover:opacity-100`}>
                    {cert.issuer}
                  </span>
                  <span className="research-year opacity-50">{cert.year}</span>
                </div>
                {cert.logo && (
                  <div className="relative w-10 h-10">
                    <img 
                      src={cert.logo} 
                      alt={`${cert.issuer} Logo`} 
                      className="w-full h-full object-contain invert grayscale brightness-200 transition-all duration-500 group-hover:grayscale-0 group-hover:brightness-100"
                      style={{ 
                        filter: 'sepia(1) saturate(5) hue-rotate(5deg) brightness(0.8)' 
                      }}
                    />
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full blur-[4px]"
                      style={{ background: theme.color, mixBlendMode: 'color' }}
                    />
                  </div>
                )}
              </div>

              <div className="relative z-10 flex-1 flex flex-col">
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-stone-500 mb-2 mt-4">
                  {cert.foundation}
                </p>

                <h3 className="research-title" style={{ fontSize: '1.45rem', marginBottom: '12px' }}>{cert.title}</h3>
                
                {cert.id && (
                  <p className="font-mono text-[10px] text-[#C7B27A] uppercase tracking-widest mb-6 opacity-60">
                    Cred ID: {cert.id}
                  </p>
                )}

                <div className="flex-1">
                  <div className="mb-8">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-[#C7B27A] mb-3 opacity-80">Strategic Rationale</p>
                    <p className="text-sm text-stone-400 leading-relaxed italic">
                      {cert.rationale}
                    </p>
                  </div>

                  <div className="mb-6">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 group-hover:text-[#C7B27A]/80 transition-colors flex items-center gap-2">
                       <span className="w-[1px] h-3 bg-stone-600/60" /> Validated Competencies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cert.competencies.map((comp) => (
                        <span key={comp} className={`tech-pill text-[10px] ${tagTone(comp)} group-hover:brightness-110`}>
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                className="research-card-line bg-[#C7B27A] group-hover:bg-opacity-100 group-hover:opacity-100 transition-all duration-500"
                style={{ scaleX: 1, opacity: 0.2, height: '1px' }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Home = () => {
  const featuredMetric = portfolioData.metrics;
  const [activeProjectIndex, setActiveProjectIndex] = useState(0);
  const [activeJourneyIndex, setActiveJourneyIndex] = useState(0);
  const [activeMetric, setActiveMetric] = useState(portfolioData.metrics[0].label);
  const [loadScene, setLoadScene] = useState(false);

  useEffect(() => {
    const load = () => setLoadScene(true);
    if ('requestIdleCallback' in window) {
      const id = window.requestIdleCallback(load, { timeout: 1200 });
      return () => window.cancelIdleCallback(id);
    }
    const id = window.setTimeout(load, 700);
    return () => window.clearTimeout(id);
  }, []);

  return (
    <div id="home" className="overflow-hidden">
      <section className="relative min-h-screen px-6 pt-28 pb-20 flex items-center hero-section">
        <div className="absolute inset-0 z-0">
          {loadScene ? (
            <Suspense fallback={<div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(199,178,122,0.12),transparent_28rem)]" />}>
              <ThreeHeroScene />
            </Suspense>
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_35%,rgba(199,178,122,0.12),transparent_28rem)]" />
          )}
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
        <ResearchShowcase />
      </section>

      <section id="credentials" className="section-shell py-24">
        <SectionHeader
          kicker="Credentials"
          title="Academic foundation and industry authority."
          copy="Validated expertise across AI systems, data engineering, and cloud architecture from global leaders in the space."
        />
        <CredentialsShowcase />
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
            <a href="https://linkedin.com/in/chaitanya-khurana" target="_blank" rel="noreferrer" className="contact-link accent-linkedin">
              <LinkedInIcon className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/CHAITANYA-2002" target="_blank" rel="noreferrer" className="contact-link accent-github">
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
