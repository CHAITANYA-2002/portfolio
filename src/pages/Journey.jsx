import { motion } from 'framer-motion';

const phases = [
  {
    period: "2018 \u2013 2021",
    title: "Early Curiosity",
    subtitle: "School \u2192 Engineering Entrance",
    narrative:
      "I was drawn to how things worked \u2014 not the surface, but the logic underneath. Math and physics were not subjects; they were puzzles. That pull toward understanding systems became the foundation for everything after.",
    milestone: "Chose Computer Science Engineering for the depth, not the trend.",
    learned: "Systems thinking starts before the code.",
  },
  {
    period: "2021 \u2013 2023",
    title: "Engineering Foundation",
    subtitle: "B.Tech \u00b7 AI/ML Exposure \u00b7 Cloud Internships",
    narrative:
      "College pushed me into deep technical territory \u2014 AI/ML coursework, a Microsoft Azure internship, and a MERN + Docker cloud project at Celebal. Building is easy; building things that hold together under pressure is the actual skill.",
    milestone: "Published peer-reviewed research on digital watermarking at IEEE ICFIRTP 2022.",
    learned: "Technical credibility is not given. It is built line by line.",
  },
  {
    period: "Aug 2023 \u2013 Jan 2024",
    title: "Data Science Phase",
    subtitle: "Aru Technologies \u2014 Applied ML & Analytics",
    narrative:
      "My first real-world model shipped into a financial system that affected loan decisions. Watching a 20% reduction in default rates come from code I wrote changed how I thought about impact. Data without decisions is just storage.",
    milestone: "Reduced loan default rates by 20% using a TensorFlow-based credit scoring model.",
    learned: "ML impact lives in the business metric, not the accuracy score.",
  },
  {
    period: "Feb 2024 \u2013 Jul 2024",
    title: "QA to Product Shift",
    subtitle: "Cyntexa \u2014 CRM Releases & Product Quality",
    narrative:
      "QA gave me a product lens I did not expect. Owning the full quality cycle for CRM releases \u2014 8+ features, 12 client-driven enhancements \u2014 forced me to think like a PM: constraints, trade-offs, and the cost of a bug in production.",
    milestone: "Achieved 95% pre-launch issue resolution across all releases.",
    learned: "The bridge from engineer to PM is built in QA.",
  },
  {
    period: "Jul 2024 \u2013 Present",
    title: "Building AI Products",
    subtitle: "Freelance PM \u00d7 AI Developer",
    narrative:
      "Now I ship end-to-end \u2014 from scoping to deployment. Three AI products in production. Each built on RAG architectures with real retrieval pipelines, not demo-ware. The goal is always the same: something measurable, not just impressive.",
    milestone: "3 AI products shipped. 30% reduction in manual reporting time.",
    learned: "The best PM tools are technical fluency and a bias for outcomes.",
  },
];

const Journey = () => {
  return (
    <div className="pt-24 pb-32 px-6">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-24"
        >
          <p className="label mb-6">The Story</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{ letterSpacing: '-0.04em', lineHeight: 1.1 }}
          >
            From curiosity to<br />
            <span className="premium-text">measurable outcomes.</span>
          </h1>
          <p className="text-gray-400 mt-6 max-w-lg leading-relaxed">
            Not a resume. A sequence of decisions, lessons, and results — each step leading clearly to the next.
          </p>
        </motion.div>

        {/* Phase blocks */}
        <div className="flex flex-col">
          {phases.map((phase, index) => (
            <motion.div
              key={phase.title}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="grid md:grid-cols-[200px_1fr] gap-8 md:gap-16 py-16 border-b border-white/[0.06] last:border-0 group"
            >
              {/* Left: period + number */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-mono text-gray-600">{String(index + 1).padStart(2, '0')}</span>
                <span className="text-xs text-gray-500 leading-relaxed">{phase.period}</span>
                <span className="text-xs text-gray-600 leading-relaxed">{phase.subtitle}</span>
              </div>

              {/* Right: content */}
              <div>
                <h2
                  className="text-2xl md:text-4xl font-bold text-white mb-6"
                  style={{ letterSpacing: '-0.03em', lineHeight: 1.15 }}
                >
                  {phase.title}
                </h2>

                <p className="text-gray-400 leading-relaxed mb-8 max-w-2xl">
                  {phase.narrative}
                </p>

                {/* Milestone highlight */}
                <div
                  className="inline-flex items-start gap-4 p-5 rounded-xl mb-8 bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-white/60 mt-1.5 shrink-0" />
                  <p className="text-sm text-gray-300 leading-relaxed">{phase.milestone}</p>
                </div>

                {/* What was learned */}
                <div className="flex items-start gap-3">
                  <span className="label mt-0.5 shrink-0">Takeaway</span>
                  <p className="text-sm text-gray-500 italic leading-relaxed">{phase.learned}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Journey;
