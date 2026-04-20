import { 
  Monitor, 
  Users, 
  CreditCard, 
  Calendar, 
  Package, 
  Layers 
} from 'lucide-react';

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
    <section id="services" className="bg-white px-[5%] py-32">
      <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20">
        <div>
          <span className="section-tag">What we build</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-[var(--ink)]">Software for every<br/>kind of business</h2>
        </div>
        <p className="text-lg text-[var(--ink-soft)] font-light max-w-[480px]">
          Whether you're a clinic in Jammu or a startup in Delhi, we build exactly what you need.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, i) => (
          <div key={i} className="group p-8 bg-[var(--cream)] border border-[var(--pine)]/10 rounded-3xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[var(--pine)]/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--pine-pale)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-[var(--pine-pale)] rounded-2xl flex items-center justify-center mb-8">
                <service.icon size={28} className="text-[var(--pine)]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-bold text-[var(--ink)] mb-4">{service.title}</h3>
              <p className="text-[15px] text-[var(--ink-soft)] leading-relaxed mb-8">
                {service.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, j) => (
                  <span key={j} className="text-[10px] font-bold uppercase tracking-widest text-[var(--ink-soft)] bg-white border border-[var(--pine)]/10 px-3 py-1.5 rounded-full">
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
