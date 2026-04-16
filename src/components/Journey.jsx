import { motion } from 'framer-motion';

const Journey = () => {
  const chapters = [
    {
      year: "2021",
      title: "The Mathematical Foundation",
      role: "Engineering at Heart",
      description: "My journey started with a deep obsession with how systems move. Before I was a Product Manager, I was an engineer building gait prediction systems and movement analysis tools. This technical bedrock informs every product decision I make today.",
      stats: "83% mAP Accuracy"
    },
    {
      year: "2023",
      title: "The Risk Paradigm",
      role: "Associate at FinTech",
      description: "In the high-stakes world of credit risk, I learned that product management is about navigating probability. I shipped ML models that directly reduced default rates by 20%, learning to balance the 'black box' of AI with the clarity of business value.",
      stats: "20% Default Reduction"
    },
    {
      year: "2024",
      title: "The Product Orchestrator",
      role: "TPM (AI/ML)",
      description: "Today, I bridge the gap. I orchestrate complex RAG pipelines and AI agents that serve thousands of users. My role is to ensure that AI is not just a gimmick, but a scalable foundation for business growth.",
      stats: "50k+ Daily Users"
    }
  ];

  return (
    <section id="journey" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="annotation mb-12">
           <span className="w-8 h-px bg-accent" /> Evolution of a Builder
        </div>

        <div className="space-y-32">
          {chapters.map((chapter, index) => (
            <motion.div
              key={chapter.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className={`grid md:grid-cols-12 gap-12 items-center ${
                index % 2 === 0 ? '' : 'md:text-right'
              }`}
            >
              <div className={`md:col-span-1 hidden md:block font-serif italic text-6xl text-white/10 ${
                index % 2 === 0 ? '' : 'md:order-last'
              }`}>
                0{index + 1}
              </div>

              <div className={`md:col-span-7 ${
                index % 2 === 0 ? 'stagger-left' : 'stagger-right md:order-2'
              }`}>
                <span className="text-xs font-mono text-accent uppercase tracking-widest block mb-4">
                  {chapter.year} — {chapter.role}
                </span>
                <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tightest">
                  {chapter.title}
                </h2>
                <p className="text-story mb-8 mx-auto md:mx-0">
                  {chapter.description}
                </p>
                <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'justify-end'}`}>
                  <span className="p-2 rounded bg-white/[0.03] border border-white/5 font-mono text-[10px] text-white/50 uppercase">
                    Key Impact: {chapter.stats}
                  </span>
                </div>
              </div>

              <div className="md:col-span-4 hidden md:flex justify-center items-center">
                 {/* Visual placeholder for journey artifacts */}
                 <div className="w-48 h-48 rounded-full border border-accent/10 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-accent/5 blur-3xl" />
                    <div className="w-24 h-24 rounded-full border border-accent/30 flex items-center justify-center font-serif italic text-accent opacity-50">
                       Chapter {index + 1}
                    </div>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
