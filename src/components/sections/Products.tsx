import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

const products = [
  { name: 'CRM System', sub: 'Leads & customers', color: 'bg-[var(--pine)]' },
  { name: 'POS & Billing', sub: 'Shops & retail', color: 'bg-[var(--pine)]' },
  { name: 'Clinic Manager', sub: 'Doctors & labs', color: 'bg-[var(--pine)]' },
  { name: 'Inventory', sub: 'Stock & suppliers', color: 'bg-[var(--pine)]' },
  { name: 'Business Website', sub: 'Next.js + CMS', color: 'bg-[var(--pine)]' },
  { name: 'Full Bundle', sub: 'All products, one price', color: 'bg-[var(--gold)]' },
];

const Products = () => {
  return (
    <section id="products" className="bg-[var(--cream)] px-[5%] py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <span className="section-tag">Ready-made products</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ink)] mb-8">
            Buy off-the-shelf,<br/>customise to fit
          </h2>
          <p className="text-lg text-[var(--ink-soft)] font-light leading-relaxed max-w-[480px] mb-12">
            Don't want to wait for a full custom build? Our ready products can be set up in days and customised for your brand and workflow.
          </p>
          <Link href="#contact" className="btn-primary">
            See a live demo
            <ArrowRight size={20} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products.map((p, i) => (
            <div key={i} className="bg-white p-6 rounded-full border border-[var(--pine)]/10 flex items-center gap-5 hover:border-[var(--pine)] hover:bg-[var(--pine-pale)] transition-all cursor-default group">
              <div className={`w-3 h-3 rounded-full ${p.color} shrink-0 shadow-lg shadow-[var(--pine)]/20`}></div>
              <div>
                <div className="font-bold text-[var(--ink)] leading-none mb-1 group-hover:text-[var(--pine)] transition-colors">{p.name}</div>
                <div className="text-[11px] text-[var(--ink-soft)] uppercase tracking-wider font-bold">{p.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
