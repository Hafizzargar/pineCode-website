import { Check } from 'lucide-react';
import Link from 'next/link';

const plans = [
  {
    name: "Starter",
    price: "₹999",
    period: "per month · single product",
    desc: "Perfect for small shops or solo practitioners starting with one product.",
    features: [
      "1 product (CRM, POS, or Clinic)",
      "Up to 2 staff users",
      "Hosted on our servers",
      "Email support"
    ],
    cta: "Get started",
    featured: false
  },
  {
    name: "Business",
    price: "₹2,999",
    period: "per month · all products",
    desc: "For growing businesses that need the full PineCode suite — CRM, POS, Clinic, and Inventory together.",
    features: [
      "All 5 products included",
      "Up to 10 staff users",
      "Custom branding",
      "WhatsApp + call support",
      "Monthly data backup"
    ],
    cta: "Get started",
    featured: true
  },
  {
    name: "One-time License",
    price: "₹25k+",
    period: "one-time · self-hosted",
    desc: "Buy the software once, install on your own server. Full source code, no monthly fees.",
    features: [
      "Full source code",
      "Unlimited users",
      "Installation & training",
      "1 year free support"
    ],
    cta: "Get a quote",
    featured: false
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="bg-white px-[5%] py-32">
      <div className="text-center mb-20">
        <span className="section-tag">Transparent pricing</span>
        <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-4">Simple plans,<br/>real value</h2>
        <p className="text-lg text-[var(--ink-soft)] font-light max-w-[500px] mx-auto">
          Choose a monthly SaaS plan, or pay once for a self-hosted license. No lock-in.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {plans.map((p, i) => (
          <div key={i} className={`relative p-10 rounded-[40px] border transition-all duration-500 hover:-translate-y-2 ${
            p.featured 
              ? 'bg-[var(--pine)] border-[var(--pine)] text-white shadow-2xl shadow-[var(--pine)]/30' 
              : 'bg-white border-[var(--pine)]/10 text-[var(--ink)]'
          }`}>
            {p.featured && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[var(--gold)] text-[var(--ink)] px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest whitespace-nowrap shadow-xl">
                Most popular
              </div>
            )}
            
            <div className={`text-[10px] font-black uppercase tracking-widest mb-6 ${p.featured ? 'text-white/50' : 'text-[var(--ink-soft)]'}`}>
              {p.name}
            </div>
            
            <div className="font-serif text-5xl mb-2">{p.price}</div>
            <div className={`text-xs mb-8 ${p.featured ? 'text-white/40' : 'text-[var(--ink-soft)]'}`}>{p.period}</div>
            
            <p className={`text-sm leading-relaxed mb-10 pb-10 border-b ${p.featured ? 'text-white/60 border-white/10' : 'text-[var(--ink-soft)] border-[var(--pine)]/5'}`}>
              {p.desc}
            </p>
            
            <ul className="space-y-4 mb-12">
              {p.features.map((f, j) => (
                <li key={j} className="flex items-start gap-3 text-sm font-light">
                  <Check size={18} className={`shrink-0 ${p.featured ? 'text-[var(--pine-glow)]' : 'text-[var(--pine)]'}`} strokeWidth={3} />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <Link href="#contact" className={`block w-full py-4 rounded-full text-center font-bold text-sm transition-all ${
              p.featured 
                ? 'bg-white text-[var(--pine)] hover:bg-[var(--pine-pale)]' 
                : 'bg-[var(--pine-pale)] text-[var(--pine)] hover:bg-[var(--pine)] hover:text-white'
            }`}>
              {p.cta}
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
