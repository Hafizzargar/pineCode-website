'use client';
import { useState, useRef } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import axios from 'axios';

const Contact = () => {
  const [status, setStatus] = useState('Send message');
  const [isSent, setIsSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

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
      service: formData.get('service'),
      message: formData.get('message'),
    };

    try {
      // Connect to the new Node.js backend
      const response = await axios.post('http://localhost:5001/api/contact', data);
      
      if (response.data.success) {
        setStatus("Message sent! We'll call you soon ✓");
        setIsSent(true);
        formRef.current.reset();
      } else {
        setStatus("Error sending message. Try again.");
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus("Error sending message. Try again.");
    } finally {
      // Reset button after 5 seconds if sent
      if (isSent) {
        setTimeout(() => {
          setStatus('Send message');
          setIsSent(false);
        }, 5000);
      }
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
            Tell us about your business and what you need. We'll get back to you within 24 hours with a free consultation.
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
            <div className="flex gap-5">
              <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10">
                <MapPin size={20} className="text-[var(--pine-glow)]" strokeWidth={1.5} />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</div>
                <div className="text-lg font-medium">Jammu, Jammu & Kashmir, India</div>
              </div>
            </div>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 p-10 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input 
              name="name"
              type="text" 
              placeholder="Your name" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all placeholder:text-white/20" 
            />
            <input 
              name="businessName"
              type="text" 
              placeholder="Business name" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all placeholder:text-white/20" 
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <input 
              name="email"
              type="email" 
              placeholder="Email address" 
              required
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all placeholder:text-white/20" 
            />
            <input 
              name="phone"
              type="tel" 
              placeholder="Phone / WhatsApp" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all placeholder:text-white/20" 
            />
          </div>
          <div className="mb-6 relative">
            <select 
              name="service"
              defaultValue="" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all text-white/40 appearance-none cursor-pointer"
            >
              <option value="" disabled>What do you need?</option>
              <option>Business Website</option>
              <option>CRM System</option>
              <option>POS & Billing Software</option>
              <option>Clinic Management</option>
              <option>Inventory System</option>
              <option>Full Bundle (all products)</option>
              <option>Custom Software</option>
            </select>
            <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-white/20">
              <Send size={16} className="rotate-90" />
            </div>
          </div>
          <div className="mb-8">
            <textarea 
              name="message"
              rows={4} 
              placeholder="Tell us about your business and what you're looking for..." 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-[var(--pine-glow)] transition-all placeholder:text-white/20 resize-none"
            ></textarea>
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
    </section>
  );
};

export default Contact;
