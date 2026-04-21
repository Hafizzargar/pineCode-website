'use client';
import { ArrowRight, Box, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

const products = [
  { 
    name: 'CRM System', 
    sub: 'Leads & customers', 
    features: ['Lead Tracking', 'Automatic Invoicing', 'Client Portal']
  },
  { 
    name: 'POS & Billing', 
    sub: 'Shops & retail', 
    features: ['GST Ready', 'Inventory Sync', 'Barcode Support']
  },
  { 
    name: 'Clinic Manager', 
    sub: 'Doctors & labs', 
    features: ['Appointments', 'Patient History', 'Digital Rx']
  },
  { 
    name: 'Full Bundle', 
    sub: 'All-in-one suite', 
    features: ['Everything included', 'Priority Support', 'Cloud Backup'],
    premium: true
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-[var(--cream)] px-[5%] py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <span className="section-tag">Ready-to-launch</span>
          <h2 className="text-5xl lg:text-7xl font-serif text-[var(--pine)] mb-6">
            Off-the-shelf <span className="text-gradient italic">solutions</span>
          </h2>
          <p className="text-xl text-[var(--ink)]/50 font-light max-w-2xl mx-auto">
            Scale your business in days, not months. Our pre-built products are battle-tested and ready to deploy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p, i) => (
            <div key={i} className={`p-8 rounded-[40px] border transition-all duration-500 group ${
              p.premium 
                ? 'bg-[var(--pine)] text-white border-[var(--pine)] shadow-2xl shadow-[var(--pine)]/20' 
                : 'bg-white border-[var(--pine)]/5 hover:border-[var(--pine)]/20 hover:-translate-y-2'
            }`}>
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-8 ${
                p.premium ? 'bg-white/10 text-white' : 'bg-[var(--pine-pale)] text-[var(--pine)]'
              }`}>
                <Box size={24} strokeWidth={1.5} />
              </div>
              
              <h3 className="text-2xl font-serif mb-2">{p.name}</h3>
              <p className={`text-xs uppercase tracking-widest font-bold mb-8 ${
                p.premium ? 'text-white/60' : 'text-[var(--pine)]/40'
              }`}>{p.sub}</p>

              <div className="space-y-4 mb-10">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-3">
                    <CheckCircle2 size={16} className={p.premium ? 'text-[var(--pine-glow)]' : 'text-[var(--pine)]'} />
                    <span className={`text-sm ${p.premium ? 'text-white/80' : 'text-[var(--ink)]/60'}`}>{f}</span>
                  </div>
                ))}
              </div>

              <Link 
                href="#contact" 
                className={`w-full py-4 rounded-2xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${
                  p.premium 
                    ? 'bg-white text-[var(--pine)] hover:bg-[var(--pine-glow)]' 
                    : 'bg-[var(--pine)] text-white hover:bg-[var(--pine-mid)]'
                }`}
              >
                Learn More <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
