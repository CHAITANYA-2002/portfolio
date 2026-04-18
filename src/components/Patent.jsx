const Patent = ({ patent }) => (
  <article className="glass-card p-8">
    <p className="label mb-4">{patent.status}</p>
    <h3 className="text-2xl font-bold text-white mb-4">{patent.title}</h3>
    <p className="text-sm text-gray-400 leading-relaxed mb-5">{patent.description}</p>
    <p className="text-xs text-gray-500">{patent.authority}</p>
    <p className="text-xs text-gray-500 mt-2">{patent.id}</p>
  </article>
);

export default Patent;
