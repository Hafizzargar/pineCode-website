const AnnouncementBar = () => {
  return (
    <div className="bg-[var(--pine)] text-white/90 py-2.5 overflow-hidden border-b border-white/10 sticky top-0 z-[60]">
      <div className="flex whitespace-nowrap animate-marquee">
        {[1, 2, 3, 4].map((i) => (
          <span key={i} className="text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] px-10">
            🌲 PineCode Solutions: We are currently building and optimizing our digital suite for your business. Stay tuned for full functionality! 🚀
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBar;
