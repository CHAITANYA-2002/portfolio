import { portfolioData } from '../data/portfolio';

const Metrics = () => (
  <section className="py-20 px-6 border-y border-white/[0.06]">
    <div className="max-w-[1200px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
      {portfolioData.metrics.map((metric) => (
        <div key={metric.label} className="flex flex-col gap-2">
          <span className="text-4xl md:text-5xl font-bold text-white tracking-tightest">
            {metric.value}{metric.suffix}
          </span>
          <span className="text-sm text-gray-500 leading-snug">{metric.label}</span>
        </div>
      ))}
    </div>
  </section>
);

export default Metrics;
