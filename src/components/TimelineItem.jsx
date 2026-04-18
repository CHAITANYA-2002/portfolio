const TimelineItem = ({ exp }) => (
  <article className="grid md:grid-cols-[220px_1fr] gap-6 py-10 border-b border-white/[0.06]">
    <div>
      <p className="text-sm font-semibold text-white">{exp.company}</p>
      <p className="text-xs text-gray-500 mt-1">{exp.duration}</p>
    </div>
    <div>
      <h3 className="text-xl font-semibold text-white mb-3">{exp.role}</h3>
      <p className="text-sm text-gray-400 leading-relaxed mb-5">{exp.summary}</p>
      <div className="flex flex-wrap gap-2">
        {exp.tech?.map((item) => <span key={item} className="chip">{item}</span>)}
      </div>
    </div>
  </article>
);

export default TimelineItem;
