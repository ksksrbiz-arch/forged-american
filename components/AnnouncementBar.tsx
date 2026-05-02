export function AnnouncementBar() {
  return (
    <div className="bg-accent text-white border-b border-black/30 overflow-hidden">
      <div className="marquee-track py-2">
        <div className="flex gap-16 px-8 shrink-0">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🔥</span>FREE SHIPPING ON ORDERS OVER $50</span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🇺🇸</span>BUILT FOR REAL AMERICA</span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🔥</span>LIMITED RUN DESIGNS — DON'T MISS OUT</span>
        </div>
        <div className="flex gap-16 px-8 shrink-0" aria-hidden="true">
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🔥</span>FREE SHIPPING ON ORDERS OVER $50</span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🇺🇸</span>BUILT FOR REAL AMERICA</span>
            <span className="inline-flex items-center gap-2 text-xs md:text-sm font-display tracking-wider-3 uppercase"><span aria-hidden>🔥</span>LIMITED RUN DESIGNS — DON'T MISS OUT</span>
        </div>
      </div>
    </div>
  );
}
