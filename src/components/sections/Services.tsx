import { 
  Monitor, 
  Users, 
  CreditCard, 
  Calendar, 
  Package, 
  Layers 
} from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Business Websites",
    desc: "Fast, beautiful websites built with Next.js. SEO-optimised, mobile-first, with a simple admin panel so you can update your own content.",
    icon: Monitor,
    tags: ["Next.js", "SEO", "CMS", "Mobile"]
  },
  {
    title: "CRM Systems",
    desc: "Manage your customers, track leads, schedule follow-ups and generate invoices — all in one place, built for how your team works.",
    icon: Users,
    tags: ["Leads", "Pipeline", "Invoices", "Reports"]
  },
  {
    title: "POS & Billing",
    desc: "Blazing-fast billing screens for shops, restaurants, and retail. GST calculations, Razorpay payments, thermal receipt printing.",
    icon: CreditCard,
    tags: ["GST", "Razorpay", "Barcode", "Print"]
  },
  {
    title: "Clinic Management",
    desc: "Appointment scheduling, patient records, prescription writing, and billing — designed for doctors and healthcare professionals.",
    icon: Calendar,
    tags: ["Appointments", "Patients", "Prescriptions"]
  },
  {
    title: "Inventory Systems",
    desc: "Track stock levels, manage suppliers, create purchase orders, and get low-stock alerts before you run out. Multi-warehouse support.",
    icon: Package,
    tags: ["Stock", "Suppliers", "Alerts", "Reports"]
  },
  {
    title: "Custom Software",
    desc: "Have a unique idea that doesn't fit standard products? We build completely bespoke software from scratch — your idea, our engineering.",
    icon: Layers,
    tags: ["React", "Node.js", "MongoDB", "Custom"]
  }
];

const Services = () => {
  return (
    <section id="services" className="bg-white px-[5%] py-32 relative">
      <div className="pine-blur-orb bg-[var(--pine-glow)] w-[600px] h-[600px] -top-40 -right-40 opacity-5"></div>
      
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 relative z-10">
        <div>
          <span className="section-tag">What we build</span>
          <h2 className="text-5xl lg:text-7xl font-serif text-[var(--pine)] leading-[1.1]">
            Software for every<br/>
            <span className="text-gradient italic">kind of business</span>
          </h2>
        </div>
        <p className="text-lg text-[var(--ink)]/60 font-light max-w-[480px] leading-relaxed">
          Whether you're a clinic in Jammu or a startup in Delhi, we build exactly what you need with premium engineering.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
        {services.map((service, i) => (
          <div 
            key={i} 
            className="group p-10 bg-[var(--cream)] border border-[var(--pine)]/5 rounded-[40px] transition-all duration-500 hover:bg-white hover:shadow-[0_40px_80px_-15px_rgba(10,47,31,0.08)] relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity">
              <service.icon size={120} />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-10 shadow-sm border border-[var(--pine)]/5 group-hover:bg-[var(--pine)] group-hover:text-white transition-colors duration-500">
                <service.icon size={28} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-serif text-[var(--pine)] mb-4">{service.title}</h3>
              <p className="text-[16px] text-[var(--ink)]/60 leading-relaxed mb-10 min-h-[100px]">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-[9px] font-bold uppercase tracking-widest text-[var(--pine-mid)]/60 bg-white/50 px-4 py-2 rounded-full border border-[var(--pine)]/5">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
