'use client';
import { ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="min-h-[85vh] md:min-h-[90vh] flex flex-col justify-center px-[5%] pt-28 md:pt-20 pb-20 relative overflow-hidden bg-[var(--cream)]">
      {/* Background Decor */}
      <div className="pine-blur-orb bg-[var(--pine)] w-[300px] md:w-[500px] h-[300px] md:h-[500px] -top-20 -left-20 animate-pulse"></div>
      <div className="pine-blur-orb bg-[var(--pine-glow)] w-[250px] md:w-[400px] h-[250px] md:h-[400px] bottom-0 right-0 opacity-10"></div>
      
      <div className="absolute inset-0 z-0 opacity-[0.03] grid-lines"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
            <span className="section-tag mb-0">Software for Startups</span>
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-6 h-6 rounded-full border-2 border-[var(--cream)] bg-[var(--pine-light)] flex items-center justify-center text-[8px] text-white">
                  {i}
                </div>
              ))}
            </div>
            <span className="text-[10px] text-[var(--pine-mid)] font-bold uppercase tracking-widest opacity-40">Trusted in J&K</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-serif text-[var(--pine)] leading-[1.1] mb-8">
            Digital tools <br />
            <span className="text-gradient italic">crafted for</span> <br />
            growth.
          </h1>

          <p className="text-base md:text-xl text-[var(--ink)]/60 font-light max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
            We build high-performance software and websites that help local businesses scale. From CRM systems to premium web design.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#contact" className="btn-primary flex items-center justify-center gap-3 w-full sm:w-auto">
              Start your project <ArrowRight size={20} />
            </a>
            <a href="#products" className="px-8 py-4 rounded-full font-bold border border-[var(--pine)]/10 flex items-center justify-center gap-3 hover:bg-[var(--pine)]/5 transition-all w-full sm:w-auto">
              Our Products
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center lg:justify-start gap-6 md:gap-8 opacity-40">
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">Next.js 15</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles size={16} />
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest">MongoDB</span>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 glass-card p-4 aspect-square flex items-center justify-center overflow-hidden group">
             <div className="absolute inset-0 bg-gradient-to-tr from-[var(--pine)] to-[var(--pine-light)] opacity-5 group-hover:opacity-10 transition-opacity"></div>
             <div className="text-center">
                <div className="text-[10rem] font-serif text-[var(--pine)] leading-none opacity-10">🌲</div>
                <div className="mt-[-2rem] font-serif text-3xl text-[var(--pine)]">PineCode</div>
                <div className="text-[10px] uppercase tracking-[0.4em] text-[var(--pine-mid)] opacity-40 mt-2">Solutions</div>
             </div>
          </div>

          {/* Floating badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-[var(--pine)]/5 flex items-center gap-4 z-20"
          >
            <div className="w-10 h-10 bg-[var(--pine-pale)] rounded-xl flex items-center justify-center text-[var(--pine)] font-bold">₹</div>
            <div>
              <div className="text-[10px] uppercase font-bold opacity-40">Starting from</div>
              <div className="font-bold text-[var(--pine)] text-sm">₹999/month</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
