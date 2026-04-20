const Testimonials = () => {
  const stories = [
    {
      text: "PineCode built our clinic software in just 3 weeks. Now we manage 80+ appointments a day without any paper. The team was always available on WhatsApp.",
      author: "Dr. Rakesh Sharma",
      role: "Physician, Jammu",
      initials: "DR"
    },
    {
      text: "We were using an Excel sheet to track inventory. Now the PineCode system gives us real-time alerts and supplier reports. Should have done this years ago.",
      author: "Anil Singh",
      role: "Medical Store Owner, Srinagar",
      initials: "AS"
    },
    {
      text: "Our billing used to take 10 minutes per customer. The POS system they built handles it in 30 seconds. Our staff loves it.",
      author: "Pooja Koul",
      role: "Retail Shop Owner, Jammu",
      initials: "PK"
    }
  ];

  return (
    <section id="testimonials" className="bg-[var(--cream-dark)] px-[5%] py-32">
      <span className="section-tag">Client stories</span>
      <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-20">Trusted by businesses<br/>across J&K</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stories.map((s, i) => (
          <div key={i} className="bg-white p-10 rounded-[32px] border border-[var(--pine)]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div className="font-serif text-6xl text-[var(--pine-glow)] mb-6 leading-none">"</div>
            <p className="text-[17px] text-[var(--ink-mid)] font-light italic leading-relaxed mb-10">
              {s.text}
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[var(--pine)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                {s.initials}
              </div>
              <div>
                <div className="font-bold text-[var(--ink)] text-sm">{s.author}</div>
                <div className="text-xs text-[var(--ink-soft)] uppercase tracking-wider">{s.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
