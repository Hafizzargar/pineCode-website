'use client';

const AnnouncementBar = () => {
  return (
    <div className="bg-[var(--pine)] text-[var(--pine-glow)] py-2 overflow-hidden whitespace-nowrap relative z-[60] border-b border-white/5">
      <div className="inline-block animate-marquee">
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">🌲 Limited Slots for April Available</span>
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">🚀 Premium Websites starting from ₹14,999</span>
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">✨ POS Systems for J&K Businesses</span>
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">🌲 Limited Slots for April Available</span>
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">🚀 Premium Websites starting from ₹14,999</span>
        <span className="mx-4 text-[10px] font-bold uppercase tracking-[0.3em]">✨ POS Systems for J&K Businesses</span>
      </div>
    </div>
  );
};

export default AnnouncementBar;
