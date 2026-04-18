import { portfolioData } from '../data/portfolio';

const Experience = () => (
  <section id="experience" className="py-24 px-6">
    <div className="max-w-[1200px] mx-auto">
      <p className="label mb-6">Experience</p>
      <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tightest mb-12">
        Outcomes over time.
      </h2>
      <div className="flex flex-col border-t border-white/[0.06]">
        {portfolioData.experience.map((exp) => (
          <article key={`${exp.company}-${exp.duration}`} className="grid md:grid-cols-[240px_1fr] gap-6 py-10 border-b border-white/[0.06]">
            <div>
              <p className="text-sm text-white font-semibold">{exp.company}</p>
              <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-3">{exp.role}</h3>
              <p className="text-sm text-gray-400 leading-relaxed max-w-2xl mb-5">{exp.summary}</p>
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((item) => <span key={item} className="chip">{item}</span>)}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
