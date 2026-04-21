'use client';
import { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Process', href: '#process' },
  ];

  return (
    <header
      className={`fixed z-70 transition-all duration-500 
        left-1/2 -translate-x-1/2 w-[92%] md:w-[90%] md:max-w-7xl
        ${scrolled ? 'top-2 md:top-4' : 'top-14 md:top-10'}`}
    >
      <nav className={`bg-white/95 backdrop-blur-xl border border-white/20 rounded-full 
        px-5 md:px-8 py-2.5 md:py-3.5 
        flex items-center justify-between 
        shadow-2xl shadow-[var(--pine)]/10 transition-all duration-500
        ${scrolled ? 'scale-95 md:scale-100' : ''}`}
      >
        {/* Logo - Always Visible */}
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 md:w-11 md:h-11 bg-[var(--pine)] rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-lg shadow-[var(--pine)]/20">
            <span className="font-serif text-lg md:text-xl">P</span>
          </div>
          <div>
            <span className="font-serif text-lg md:text-xl tracking-tighter text-[var(--pine)]">PineCode</span>
            <span className="hidden md:block text-[8px] uppercase tracking-[0.2em] font-black text-[var(--pine-mid)] opacity-40">Solutions</span>
          </div>
        </Link>

        {/* Minimalist Actions - Logo + Menu */}
        <div className="flex items-center gap-3 md:gap-5">
          <Link
            href="#contact"
            className="bg-[var(--pine)] text-white text-[10px] md:text-xs font-bold px-5 py-2.5 rounded-full hover:bg-[var(--pine-mid)] transition-all active:scale-95 shadow-lg shadow-[var(--pine)]/20"
          >
            Get in touch
          </Link>
          <button
            className="p-2 text-[var(--pine)] rounded-full hover:bg-[var(--pine)]/5 transition-colors group"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} className="group-hover:scale-110 transition-transform" />}
          </button>
        </div>
      </nav>

      {/* Full Menu Overlay */}
      {isOpen && (
        <div className="absolute top-[calc(100%+0.75rem)] left-0 right-0 bg-white border border-[var(--pine)]/10 rounded-[40px] p-8 shadow-2xl animate-in fade-in slide-in-from-top-6 duration-500">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="flex flex-col gap-6">
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--pine)]/30">Navigation</p>
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl md:text-3xl font-serif text-[var(--pine)] hover:translate-x-2 transition-transform inline-block"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-8 border-t md:border-t-0 md:border-l border-[var(--pine)]/5 pt-8 md:pt-0 md:pl-10">
              <div className="space-y-4">
                <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[var(--pine)]/30">Contact PineCode</p>
                <a href="tel:+9194191" className="flex items-center gap-4 text-lg font-medium text-[var(--pine)] hover:text-[var(--pine-mid)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-2xl flex items-center justify-center"><Phone size={18} /></div>
                  Call Team
                </a>
                <a href="mailto:pinecode47@gmail.com" className="flex items-center gap-4 text-lg font-medium text-[var(--pine)] hover:text-[var(--pine-mid)] transition-colors">
                  <div className="w-10 h-10 bg-[var(--cream)] rounded-2xl flex items-center justify-center"><Mail size={18} /></div>
                  Email Us
                </a>
              </div>
              
              <div className="bg-[var(--pine)] p-6 rounded-[32px] text-white">
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold opacity-50 mb-2">Based in</p>
                <p className="font-serif text-lg">Jammu & Kashmir</p>
                <div className="mt-4 h-1 w-12 bg-[var(--pine-glow)] rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
