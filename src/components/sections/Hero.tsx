import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center px-[5%] pt-20 pb-20 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_20%,rgba(64,145,108,0.13)_0%,transparent_70%),radial-gradient(ellipse_40%_60%_at_10%_80%,rgba(26,71,49,0.08)_0%,transparent_60%)]"></div>
      <div className="absolute inset-0 z-0 opacity-[0.04] grid-lines"></div>

      <div className="relative z-10 max-w-[800px]">
        <div className="inline-flex items-center gap-2 bg-[var(--pine-pale)] text-[var(--pine)] px-4 py-1.5 rounded-full text-[13px] font-bold tracking-wide uppercase mb-8 animate-fade-up">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--pine-light)] animate-pulse"></span>
          Based in Jammu, J&K — Serving businesses across India
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[var(--ink)] leading-[1.05] tracking-tighter mb-8 animate-fade-up delay-100">
          Custom software<br/>
          <em className="italic text-[var(--pine)]">built for your</em><br/>
          business
        </h1>

        <p className="text-lg md:text-xl text-[var(--ink-soft)] font-light leading-relaxed max-w-[540px] mb-12 animate-fade-up delay-200">
          We build websites, CRM systems, billing software, clinic management tools, and more — crafted exactly to how your business works. No templates. No compromise.
        </p>

        <div className="flex flex-wrap gap-4 animate-fade-up delay-300">
          <Link href="#contact" className="btn-primary">
            Start your project
            <ArrowRight size={20} />
          </Link>
          <Link href="#products" className="btn-secondary">
            See our products
          </Link>
        </div>

        <div className="flex gap-12 mt-20 pt-10 border-t border-[var(--pine)]/10 animate-fade-up delay-400">
          <div>
            <div className="font-serif text-4xl text-[var(--pine)]">50+</div>
            <div className="text-[13px] text-[var(--ink-soft)] uppercase tracking-wider mt-1">Projects delivered</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-[var(--pine)]">5</div>
            <div className="text-[13px] text-[var(--ink-soft)] uppercase tracking-wider mt-1">Ready-made products</div>
          </div>
          <div>
            <div className="font-serif text-4xl text-[var(--pine)]">100%</div>
            <div className="text-[13px] text-[var(--ink-soft)] uppercase tracking-wider mt-1">Custom built</div>
          </div>
        </div>
      </div>

      {/* Floating Card Visual */}
      <div className="hidden lg:block absolute right-[5%] top-1/2 -translate-y-1/2 z-10 w-[420px] animate-float">
        <div className="relative p-10">
          <div className="absolute top-0 left-8 right-8 bottom-4 bg-[var(--pine-glow)] rounded-3xl opacity-30 -rotate-3"></div>
          <div className="absolute top-4 left-4 right-4 bottom-0 bg-[var(--pine-pale)] rounded-3xl opacity-60 -rotate-1"></div>
          
          <div className="relative bg-white border border-[var(--pine)]/10 rounded-3xl p-8 shadow-2xl shadow-[var(--pine)]/10">
            <div className="text-[11px] font-bold uppercase tracking-widest text-[var(--pine)] mb-6 border-b border-[var(--cream-dark)] pb-4">
              PineCode CRM — Live demo
            </div>
            
            <div className="space-y-4">
              {[
                { label: 'New leads this week', value: '24' },
                { label: 'Appointments today', value: '8' },
                { label: 'Revenue (this month)', value: '₹1.4L' },
              ].map((row, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-b border-[var(--cream-dark)] last:border-0">
                  <span className="text-sm text-[var(--ink-mid)]">{row.label}</span>
                  <span className="text-sm font-bold text-[var(--pine)]">{row.value}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-2">
                <span className="text-sm text-[var(--ink-mid)]">Project status</span>
                <span className="text-[11px] font-bold bg-[var(--pine-pale)] text-[var(--pine)] px-3 py-1 rounded-full uppercase tracking-wider">
                  On track
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
