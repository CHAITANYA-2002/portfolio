import { portfolioData } from '../data/portfolio';

const IntellectualProperty = () => (
  <section className="py-24 px-6">
    <div className="max-w-[1200px] mx-auto">
      <p className="label mb-6">Research & IP</p>
      <div className="grid md:grid-cols-2 gap-6">
        {portfolioData.patents.map((patent) => (
          <article key={patent.id} className="glass-card p-8">
            <p className="label mb-4">{patent.status}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{patent.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{patent.description}</p>
            <p className="text-xs text-gray-500">{patent.authority}</p>
            <p className="text-xs text-gray-500 mt-2">{patent.id}</p>
          </article>
        ))}
        {portfolioData.publications.map((publication) => (
          <article key={publication.doi} className="glass-card p-8">
            <p className="label mb-4">{publication.venue}</p>
            <h3 className="text-2xl font-bold text-white mb-4">{publication.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed mb-5">{publication.description}</p>
            <p className="text-xs text-gray-500">{publication.doi}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default IntellectualProperty;
