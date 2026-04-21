'use client';

const AnnouncementBar = () => {
  return (
    <div className="bg-[var(--pine)] text-[var(--pine-glow)] py-2.5 overflow-hidden relative z-[60] border-b border-white/5 w-full">
      <div className="flex animate-marquee whitespace-nowrap">
        <span className="mx-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex-shrink-0">🛠️ Currently developing new features — some tools may be unavailable</span>
        <span className="mx-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex-shrink-0">🌲 PineCode Solutions — Coming Soon to Full Production</span>
        <span className="mx-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex-shrink-0">🛠️ Currently developing new features — some tools may be unavailable</span>
        <span className="mx-8 text-[9px] md:text-[10px] font-bold uppercase tracking-[0.3em] flex-shrink-0">🌲 PineCode Solutions — Coming Soon to Full Production</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
