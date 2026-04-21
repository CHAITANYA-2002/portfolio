import { portfolioData } from '../data/portfolio';

const Experience = () => (
  <section id="experience" className="section-shell">
    <div className="max-w-[1200px] mx-auto">
      <p className="section-kicker mb-8">Professional History</p>
      <h2 className="editorial-heading mb-16">
        Building outcomes through engineering & product.
      </h2>
      <div className="flex flex-col border-t border-white/[0.06]">
        {portfolioData.experience.map((exp) => (
          <article key={`${exp.company}-${exp.duration}`} className="grid md:grid-cols-[280px_1fr] gap-12 py-16 border-b border-white/[0.06] group">
            <div>
              <p className="text-xl font-bold text-white tracking-tight">{exp.company}</p>
              <p className="text-xs font-mono text-stone-500 mt-2 uppercase tracking-widest">{exp.duration}</p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-gold transition-colors">{exp.role}</h3>
              <p className="text-lg text-stone-400 leading-relaxed max-w-2xl mb-8 font-medium">{exp.summary}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((item) => (
                  <span key={item} className="tech-pill tone-ivory font-mono text-[10px] uppercase tracking-wider">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
