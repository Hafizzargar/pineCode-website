const Process = () => {
  const steps = [
    {
      num: "01",
      title: "Discovery call",
      desc: "We understand your business, your workflow, and what problem the software must solve. Free consultation, no commitment."
    },
    {
      num: "02",
      title: "Proposal & quote",
      desc: "We give you a clear breakdown — features, timeline, and fixed price. No hidden costs. You approve before we write a single line."
    },
    {
      num: "03",
      title: "Build & review",
      desc: "We build in sprints and share live previews. You give feedback at every stage so the final product is exactly what you imagined."
    },
    {
      num: "04",
      title: "Launch & support",
      desc: "We deploy, train your team, and stay on for support. Your business doesn't stop — neither do we."
    }
  ];

  return (
    <section id="process" className="bg-[var(--pine)] px-[5%] py-32 relative overflow-hidden text-white">
      {/* Glow Effect */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_50%_80%_at_90%_50%,rgba(64,145,108,0.3)_0%,transparent_70%)]"></div>

      <div className="relative z-10">
        <span className="section-tag !text-[var(--pine-glow)]">How we work</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8">From idea to live<br/>in 4 steps</h2>
        <p className="text-lg text-white/60 font-light max-w-[440px] mb-20">
          A straightforward process built around your timeline and budget. No surprises, no jargon.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden">
          {steps.map((step, i) => (
            <div key={i} className="p-10 bg-white/5 border-r border-white/10 last:border-0 hover:bg-white/10 transition-colors group">
              <div className="font-serif text-5xl text-white/10 group-hover:text-[var(--pine-glow)] transition-colors mb-8 leading-none">
                {step.num}
              </div>
              <h4 className="text-xl font-bold mb-4">{step.title}</h4>
              <p className="text-sm text-white/50 leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
