'use client';
import { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Clock, MessageSquare, Zap } from 'lucide-react';

const WhyUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const reasons = [
    {
      title: "Fixed price, no surprises",
      desc: "We quote upfront and stick to it. You know exactly what you're paying before we start.",
      icon: ShieldCheck
    },
    {
      title: "Fast delivery",
      desc: "Most products delivered in 2–4 weeks. We don't drag projects out.",
      icon: Clock
    },
    {
      title: "Support in Hindi & English",
      desc: "We're based in Jammu. You can call us, meet us, and explain your needs in the language you're comfortable in.",
      icon: MessageSquare
    },
    {
      title: "Modern tech stack",
      desc: "React, Next.js, Node.js, MongoDB — built to scale as your business grows. Not outdated tools.",
      icon: Zap
    }
  ];

  const metrics = [
    { label: 'Client satisfaction', val: '96%' },
    { label: 'On-time delivery', val: '90%' },
    { label: 'Repeat clients', val: '78%' },
  ];

  return (
    <section id="why" ref={sectionRef} className="bg-white px-[5%] py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Visual Box */}
        <div className="bg-[var(--pine)] rounded-[40px] p-12 relative overflow-hidden text-white shadow-2xl shadow-[var(--pine)]/20">
          <div className="absolute top-[-40px] right-[-40px] w-52 h-52 bg-white/5 rounded-full"></div>
          
          <div className="font-serif text-6xl leading-[0.9] mb-4">Pine<br/>Code</div>
          <p className="text-white/40 text-[13px] uppercase tracking-[0.2em] mb-12">Jammu, J&K · Est. 2024</p>
          
          <div className="space-y-8">
            {metrics.map((m, i) => (
              <div key={i}>
                <div className="flex justify-between text-[11px] uppercase tracking-widest text-white/50 mb-2">
                  <span>{m.label}</span>
                  <span className="text-[var(--pine-glow)] font-bold">{m.val}</span>
                </div>
                <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-[var(--pine-glow)] rounded-full transition-all duration-[1500ms] ease-out" 
                    style={{ width: isVisible ? m.val : '0%' }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Content Box */}
        <div>
          <span className="section-tag">Why choose us</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-12">We understand<br/>local business</h2>
          
          <div className="space-y-2">
            {reasons.map((r, i) => (
              <div key={i} className="flex gap-6 py-6 border-b border-[var(--pine)]/10 last:border-0 group">
                <div className="w-12 h-12 bg-[var(--pine-pale)] rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-[var(--pine)] group-hover:text-white transition-all duration-300">
                  <r.icon size={22} strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-[var(--ink)] mb-1">{r.title}</h4>
                  <p className="text-sm text-[var(--ink-soft)] font-light leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
