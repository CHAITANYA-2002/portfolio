const ProjectCard = ({ project }) => (
  <article className="glass-card p-8 flex flex-col gap-6">
    <div>
      <p className="label mb-3">{project.tags?.[0]}</p>
      <h3 className="text-2xl font-bold text-white tracking-tighter leading-tight">{project.impact}</h3>
    </div>
    <div>
      <p className="text-sm font-semibold text-gray-300 mb-2">{project.title}</p>
      <p className="text-sm text-gray-500 leading-relaxed">{project.problem}</p>
    </div>
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.tags?.map((tag) => <span key={tag} className="chip">{tag}</span>)}
    </div>
  </article>
);

export default ProjectCard;
