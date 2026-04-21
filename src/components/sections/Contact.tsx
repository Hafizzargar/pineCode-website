'use client';
import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send, ChevronDown } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [status, setStatus] = useState('Send message');
  const [isSent, setIsSent] = useState(false);
  const [selectedService, setSelectedService] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const services = [
    'Business Website',
    'CRM System',
    'POS & Billing Software',
    'Clinic Management',
    'Inventory System',
    'Full Bundle (all products)',
    'Custom Software'
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus('Sending...');
    
    const formData = new FormData(formRef.current);
    const data = {
      name: formData.get('name'),
      businessName: formData.get('businessName'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      service: selectedService || 'Not specified',
      message: formData.get('message'),
    };

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001';
      const response = await axios.post(`${apiUrl}/api/contact`, data);
      
      if (response.data.success) {
        setStatus("Message sent! ✓");
        setIsSent(true);
        formRef.current.reset();
        setSelectedService('');
      } else {
        setStatus("Error. Try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("Error. Try again.");
    } finally {
      setTimeout(() => {
        setStatus('Send message');
        setIsSent(false);
      }, 5000);
    }
  };

  return (
    <section id="contact" className="bg-[var(--pine)] px-[5%] py-32 relative overflow-hidden text-white">
      <div className="absolute bottom-[-5%] right-[5%] font-serif text-[12rem] text-white/[0.03] leading-none pointer-events-none select-none hidden lg:block">
        PineCode
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start relative z-10">
        <div>
          <span className="section-tag !text-[var(--pine-glow)]">Get in touch</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-white mb-8">Let's build<br/>something great</h2>
          <p className="text-lg text-white/50 font-light max-w-[460px] mb-12">
            Tell us about your business and what you need. We'll get back to you within 24 hours.
          </p>

          <div className="space-y-8">
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Phone size={20} className="text-[var(--pine-glow)]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Phone / WhatsApp</div>
                <div className="text-lg font-medium">+91 94191 XXXXX</div>
              </div>
            </div>
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <Mail size={20} className="text-[var(--pine-glow)]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Email</div>
                <div className="text-lg font-medium">pinecode47@gmail.com</div>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 p-8 md:p-10 rounded-[40px] border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input name="name" type="text" placeholder="Your name" required className="form-input" />
            <input name="businessName" type="text" placeholder="Business name" className="form-input" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input name="email" type="email" placeholder="Email address" required className="form-input" />
            <input name="phone" type="tel" placeholder="Phone / WhatsApp" className="form-input" />
          </div>
          
          {/* Custom Premium Dropdown */}
          <div className="mb-6 relative">
            <div 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className={`w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 flex items-center justify-between cursor-pointer transition-all hover:border-white/20 ${isDropdownOpen ? 'border-[var(--pine-glow)]' : ''}`}
            >
              <span className={selectedService ? 'text-white' : 'text-white/30'}>
                {selectedService || 'What do you need?'}
              </span>
              <ChevronDown size={20} className={`text-white/20 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
              <div className="absolute top-[calc(100%+8px)] left-0 right-0 bg-[#2d3a30] border border-white/10 rounded-2xl overflow-hidden z-50 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
                {services.map((service) => (
                  <div 
                    key={service}
                    onClick={() => {
                      setSelectedService(service);
                      setIsDropdownOpen(false);
                    }}
                    className="px-6 py-4 text-white/70 hover:text-white hover:bg-white/5 cursor-pointer transition-colors border-b border-white/5 last:border-0"
                  >
                    {service}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="mb-8">
            <textarea name="message" rows={4} placeholder="Tell us about your business..." className="form-input resize-none"></textarea>
          </div>
          
          <button 
            type="submit"
            disabled={isSent || status === 'Sending...'}
            className={`w-full py-5 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 active:scale-[0.98] ${
              isSent ? 'bg-[var(--pine-glow)] text-[var(--pine)]' : 'bg-white text-[var(--pine)] hover:bg-[var(--pine-glow)]'
            }`}
          >
            {status}
            {!isSent && <Send size={20} />}
          </button>
        </form>
      </div>

      <style jsx>{`
        .form-input {
          width: 100%;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 16px 24px;
          outline: none;
          color: white;
          transition: all 0.2s;
        }
        .form-input:focus {
          border-color: var(--pine-glow);
          background: rgba(255, 255, 255, 0.08);
        }
        .form-input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </section>
  );
};

export default Contact;
