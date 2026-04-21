'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
  ];

  return (
    <header 
      className={`fixed top-10 left-1/2 -translate-x-1/2 w-[90%] max-w-7xl z-50 transition-all duration-500 ${
        scrolled ? 'top-4' : ''
      }`}
    >
      <nav className={`bg-white/80 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 flex items-center justify-between shadow-lg shadow-[var(--pine)]/5 transition-all ${
        scrolled ? 'py-2 px-4 scale-95' : ''
      }`}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[var(--pine)] rounded-full flex items-center justify-center text-white transition-transform group-hover:rotate-12">
            <span className="font-serif text-xl">P</span>
          </div>
          <div className="hidden sm:block">
            <span className="font-serif text-xl tracking-tighter text-[var(--pine)]">PineCode</span>
            <span className="block text-[8px] uppercase tracking-[0.2em] font-black text-[var(--pine-mid)] opacity-40">Solutions</span>
          </div>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href}
              className="text-sm font-medium text-[var(--pine)]/70 hover:text-[var(--pine)] transition-colors"
            >
              {link.name}
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="bg-[var(--pine)] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[var(--pine-mid)] transition-all active:scale-95 shadow-md shadow-[var(--pine)]/10"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-[var(--pine)]"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[calc(100%+1rem)] left-0 right-0 bg-white border border-[var(--pine)]/5 rounded-3xl p-6 shadow-2xl md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-[var(--pine)]"
              >
                {link.name}
              </Link>
            ))}
            <Link 
              href="#contact" 
              onClick={() => setIsOpen(false)}
              className="bg-[var(--pine)] text-white text-center py-4 rounded-2xl font-bold"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
