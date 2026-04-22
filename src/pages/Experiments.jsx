import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';

const GitHubIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
);

const TerminalIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/>
  </svg>
);

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

const HighlightText = ({ text, highlight }) => {
  if (!highlight.trim()) return <span>{text}</span>;
  const regex = new RegExp(`(${highlight})`, 'gi');
  const parts = text.split(regex);
  return (
    <span>
      {parts.map((part, i) => 
        regex.test(part) ? (
          <span key={i} className="search-highlight">{part}</span>
        ) : (
          <span key={i}>{part}</span>
        )
      )}
    </span>
  );
};

const Experiments = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const repoAugmentations = {
    'portfolio': {
      architecture: 'React // SPA // Framer Motion // Tailwind',
      rationale: 'The portfolio was architected to solve the paradox of complex professional identity—how to maintain high technical density while delivering a clean, luxury product narrative. It serves as a live demonstration of frontend orchestration.',
      capabilities: ['Dynamic Multi-page Routing', 'Premium CSS Orchestration', 'Real-time GitHub API Sync'],
      offerings: ['React', 'Framer Motion', 'Tailwind CSS', 'Vite']
    },
    'flask': {
      architecture: 'Python // REST // WSGI',
      rationale: 'This repository exists to deconstruct the friction between rapid backend development and architectural scalability. It explores how modular patterns can simplify the delivery of robust microservices.',
      capabilities: ['Scalable Endpoint Design', 'Middleware Logic', 'Stateless Architecture'],
      offerings: ['Python', 'Flask', 'SQLAlchemy', 'REST API']
    },
    'chatbot': {
      architecture: 'RAG // LLM // LangChain // Vector DB',
      rationale: 'Created to push the boundaries of LLM grounding. This experiment focuses on minimizing hallucination by bridging unstructured data with structured retrieval pipelines using modern RAG architectures.',
      capabilities: ['Semantic Data Retrieval', 'Context-aware Prompting', 'Vector Database Integration'],
      offerings: ['LangChain', 'Python', 'OpenAI', 'Pinecone']
    },
    'nlp': {
      architecture: 'BERT // Python // Transformer // NLP',
      rationale: 'A deep dive into advanced Natural Language Processing pipelines, focusing on BERT architectures, subword tokenization, and semantic alignment for high-fidelity sequence labeling.',
      capabilities: ['Bert Feature Extraction', 'Subword Alignment', 'Deep Learning Pipeline'],
      offerings: ['Python', 'BERT', 'PyTorch', 'HuggingFace', 'NLP']
    },
    'mern': {
      architecture: 'MongoDB // Express // React // Node',
      rationale: 'Orchestrating complex full-stack architectures using the MERN stack. This repository explores scalable service design, state synchronization, and robust API contracts.',
      capabilities: ['Full-stack Integration', 'RESTful Middleware', 'State Orchestration'],
      offerings: ['MongoDB', 'Express', 'React', 'Node.js']
    },
    'city-trail': {
      architecture: 'TypeScript // Leaflet // GeoJSON',
      rationale: 'An exploration of geographic data systems and pathfinding algorithms, delivering performant spatial visualizations and interactive trail mapping logic.',
      capabilities: ['Spatial Data Rendering', 'Pathfinding Algorithms', 'Interactive Geospatial UI'],
      offerings: ['TypeScript', 'Leaflet', 'GeoJSON', 'React']
    },
    'machine-learning': {
      architecture: 'Scikit-Learn // Pandas // Matplotlib',
      rationale: 'A comprehensive laboratory of core ML algorithms, from statistical regression to deep neural ensembles, focused on theoretical validation and model performance benchmarking.',
      capabilities: ['Algorithmic Prototyping', 'Performance Analytics', 'Statistical Modeling'],
      offerings: ['Jupyter', 'Scikit-Learn', 'Pandas', 'MLOps']
    },
    'bad_data': {
      architecture: 'EDA // Pandas // Seaborn',
      rationale: 'Engineering robustness for messy datasets. This experiment focuses on outlier detection, data imputation, and high-integrity EDA pipelines to ensure model reliability.',
      capabilities: ['Anomaly Detection', 'Data Cleaning Pipeline', 'Exploratory Visualization'],
      offerings: ['Python', 'EDA', 'Data Science', 'Statistics']
    },
    'leetcode-problems': {
      architecture: 'C++ // DSA // Optimization',
      rationale: 'Performance-first algorithmic implementations and data structure optimizations, focused on time-complexity minimization and clean engineering patterns.',
      capabilities: ['Algorithm Optimization', 'Data Structure Mastery', 'Competitive Engineering'],
      offerings: ['C++', 'DSA', 'Problem Solving', 'Algorithms']
    }
  };

  const getLanguageStyles = (lang) => {
    // Consistent Golden Dossier Accents - Force text-gold globally
    return { text: 'text-gold', border: 'border-gold/20', glow: 'from-gold/10', color: '#C7B27A' };
  };

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch('https://api.github.com/users/CHAITANYA-2002/repos?sort=updated&per_page=100');
        const data = await response.json();
        setRepos(data);
      } catch (error) {
        console.error('Error fetching repos:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRepos();
  }, []);

  const filteredRepos = useMemo(() => {
    const query = search.toLowerCase();
    return repos.filter(repo => {
      const aug = repoAugmentations[repo.name.toLowerCase()] || 
                  Object.entries(repoAugmentations).find(([k]) => repo.name.toLowerCase().includes(k))?.[1] ||
                  { 
                    architecture: `${repo.language || 'Data'} // Logic`, 
                    rationale: 'This repository functions as a modular component within the technical ecosystem, focused on engineering stability and specific operational outcomes.',
                    capabilities: ['Technical Logic Archival', 'System Prototyping', 'Pattern Validation'],
                    offerings: repo.topics?.length ? repo.topics : [repo.language || 'Logic']
                  };

      const searchableString = [
        repo.name,
        repo.language,
        repo.description,
        aug.architecture,
        aug.rationale,
        ...aug.capabilities,
        ...aug.offerings
      ].join(' ').toLowerCase();

      return searchableString.includes(query);
    });
  }, [repos, search]);

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e, repoId) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      id: repoId
    });
  };

  return (
    <div className="pt-24 pb-48 px-6 bg-[#08080A]">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Diagnostic Scanline */}
        <div className="fixed inset-0 pointer-events-none z-50 overflow-hidden opacity-[0.01]">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="w-full h-[1px] bg-white shadow-[0_0_20px_rgba(255,255,255,1)]"
          />
        </div>

        {/* Console Header */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-24 border-b border-white/[0.04] pb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-12"
        >
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/40" />
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/20" />
              </div>
              <p className="font-mono text-[9px] uppercase tracking-[0.3em] text-emerald-500/80">LAB_STATUS: OPERATIONAL // SYNC_ACTIVE</p>
            </div>
            <h1 className="text-display text-5xl md:text-9xl font-bold text-white mb-8 tracking-tighter leading-[0.85]">
              Technical <span className="premium-text italic">Dossier</span>
            </h1>
            <p className="text-stone-400 max-w-2xl text-lg md:text-xl leading-relaxed font-medium">
              A comprehensive archival of engineering artifacts, experiments, and architectural patterns developed within the private lab ecosystem.
            </p>
          </div>

          <div className="relative max-w-md w-full group">
            <div className="absolute left-5 top-1/2 -translate-y-1/2 p-2 rounded-lg bg-white/[0.02] border border-white/5 text-stone-600 group-focus-within:text-gold transition-all">
              <TerminalIcon />
            </div>
            <input
              type="text"
              placeholder="$ search_logic --query"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-[#0B0B0F] border border-white/10 rounded-2xl py-5 pl-16 pr-8 text-sm font-mono text-white focus:outline-none focus:ring-1 focus:ring-gold/20 focus:border-gold/50 transition-all placeholder:text-stone-700 font-sans"
            />
          </div>
        </motion.div>

        {/* Asset Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {loading ? (
              Array(6).fill(0).map((_, i) => (
                <div key={i} className="h-[480px] border border-white/[0.04] p-12 flex flex-col animate-pulse bg-white/[0.01] rounded-[2rem]">
                  <div className="w-32 h-2 bg-white/5 mb-10" />
                  <div className="flex-1 w-full bg-white/[0.02] rounded-2xl mb-8" />
                </div>
              ))
            ) : (
              filteredRepos.map((repo, i) => {
                const styles = getLanguageStyles(repo.language);
                const aug = repoAugmentations[repo.name.toLowerCase()] || 
                            Object.entries(repoAugmentations).find(([k]) => repo.name.toLowerCase().includes(k))?.[1] ||
                            { 
                              architecture: `${repo.language || 'Data'} // Logic`, 
                              rationale: 'This repository functions as a modular component within the technical ecosystem, focused on engineering stability and specific operational outcomes.',
                              capabilities: ['Technical Logic Archival', 'System Prototyping', 'Pattern Validation'],
                              offerings: repo.topics?.length ? repo.topics : [repo.language || 'Logic']
                            };

                return (
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    onMouseMove={(e) => handleMouseMove(e, repo.id)}
                    transition={{ duration: 0.8, delay: i * 0.05 }}
                    key={repo.id}
                    className="research-card group flex flex-col h-full relative overflow-hidden"
                    style={{
                      background: 'rgba(255, 255, 255, 0.08)',
                      backdropFilter: 'blur(24px)',
                      WebkitBackdropFilter: 'blur(24px)',
                      boxShadow: '0 24px 60px rgba(0, 0, 0, 0.5)',
                      padding: '40px'
                    }}
                  >
                    {/* Atmospheric Background Lighting */}
                    <div className="premium-card-glow" aria-hidden="true" />
                    
                    {/* Language Accent Glow */}
                    <div className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${styles.glow} to-transparent opacity-50 z-20`} />
                    
                    {/* Swiping Light Interaction */}
                    <motion.div 
                      className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                      style={{
                        background: mousePosition.id === repo.id ? `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, ${styles.color}20, transparent 40%)` : ''
                      }}
                    />
                    
                    <div className="flex items-center justify-between mb-10 z-20 w-full relative">
                      <div className="flex items-center gap-3">
                        <span className={`px-3 py-1 rounded-full font-mono text-[9px] font-bold border ${styles.border} ${styles.text}`}>
                          {repo.language?.toUpperCase() || 'TECHNICAL'}
                        </span>
                        <span className="text-[10px] font-mono text-stone-600 tracking-widest">#{repo.id.toString().slice(-4)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        {repo.stargazers_count > 0 && (
                          <span className="text-[10px] font-mono text-gold flex items-center gap-1.5">
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                            {repo.stargazers_count}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex-1 w-full text-left z-20 space-y-10 relative">
                      <div>
                        <h3 className="research-title group-hover:text-gold transition-colors duration-500">
                          <HighlightText text={repo.name.replace(/-/g, '_')} highlight={search} />
                        </h3>
                        <p className="research-abstract italic">
                          "<HighlightText text={repo.description || 'A systematic archival of engineering logic and experimental implementation.'} highlight={search} />"
                        </p>
                      </div>

                      <div className="border-t border-white/5 pt-10 space-y-10">
                        <div className="space-y-4">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-[#C7B27A]">Strategic Rationale</p>
                          <p className="text-lg text-stone-300 leading-relaxed font-display italic">
                            <HighlightText text={aug.rationale} highlight={search} />
                          </p>
                        </div>

                        <div className="space-y-6">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                             <span className="w-[1px] h-3 bg-stone-600/60" /> STACK
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {aug.offerings.map((tech, idx) => (
                              <span key={idx} className={`tech-pill ${tagTone(tech)}`}>
                                <HighlightText text={tech} highlight={search} />
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-6">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                             <span className="w-[1px] h-3 bg-stone-600/60" /> CORE
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {aug.capabilities.map((cap, idx) => (
                              <span key={idx} className={`tech-pill ${tagTone(cap)}`}>
                                <HighlightText text={cap} highlight={search} />
                              </span>
                            ))}
                          </div>
                        </div>

                        {aug.lead && aug.lead.length > 0 && (
                          <div className="space-y-6">
                            <p className="text-[10px] font-bold uppercase tracking-widest text-stone-500 mb-3 flex items-center gap-2">
                               <span className="w-[1px] h-3 bg-stone-600/60" /> LEAD
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {aug.lead.map((item, idx) => (
                                <span key={idx} className={`tech-pill ${tagTone(item)}`}>
                                  <HighlightText text={item} highlight={search} />
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      <a 
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="w-full flex items-center justify-between p-6 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-gold/30 hover:bg-gold/5 transition-all duration-500 group/btn"
                      >
                        <div className="flex items-center gap-4">
                          <GitHubIcon className="w-5 h-5 text-stone-400 group-hover/btn:text-gold transition-colors duration-500" />
                          <span className="text-xs font-mono text-stone-300 group-hover/btn:text-white uppercase tracking-widest">Access Repository Artifact</span>
                        </div>
                        <span className="text-gold opacity-0 group-hover/btn:opacity-100 transition-all duration-500 translate-x-[-10px] group-hover/btn:translate-x-0">
                          →
                        </span>
                      </a>
                    </div>

                    <div className="mt-10 pt-10 border-t border-white/[0.04] w-full flex items-center justify-between opacity-60 z-20 relative">
                        <span className="text-[10px] font-mono text-stone-600 tracking-widest uppercase">Sync: {new Date(repo.updated_at).toLocaleDateString()}</span>
                        <span className="text-[10px] font-mono text-emerald-500/80 font-bold uppercase tracking-widest">System OK</span>
                    </div>

                    <div className="research-card-line" style={{ background: styles.color, opacity: 0.3 }} />
                  </motion.article>
                );
              })
            )}
        </div>

        {!loading && (
          <motion.section 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="mt-48 pt-24 border-t border-white/[0.04]"
          >
            <div className="grid lg:grid-cols-3 gap-20">
              <div className="col-span-1">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-gold/10 border border-gold/20 flex items-center justify-center text-gold font-mono text-xs">LOG</div>
                  <h2 className="text-display text-3xl font-bold text-white tracking-tight">Ecosystem Intelligence</h2>
                </div>
                <p className="text-stone-500 leading-relaxed text-lg">
                  Aggregated performance metrics and technical health check across the active engineering lab.
                </p>
              </div>

              <div className="col-span-1 lg:col-span-2 grid sm:grid-cols-2 gap-8">
                {[
                  { label: 'Artifacts Logged', value: repos.length, color: 'text-white' },
                  { label: 'Core Archetypes', value: 4, color: 'text-gold' },
                  { label: 'Global Uptime', value: '99.9%', color: 'text-emerald-500' },
                  { label: 'Verification Level', value: 'L3_GEN', color: 'text-stone-400' }
                ].map((stat, idx) => (
                  <div key={idx} className="p-10 rounded-[2rem] bg-white/[0.02] border border-white/0.05 flex flex-col justify-between aspect-video">
                    <span className="text-[10px] font-mono text-stone-600 uppercase tracking-widest">{stat.label}</span>
                    <span className={`text-4xl md:text-5xl font-bold tabular-nums ${stat.color}`}>{stat.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>
        )}
      </div>
    </div>
  );
};

export default Experiments;
