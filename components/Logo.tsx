export function Logo() {
  return (
    <a href="/" className="inline-flex flex-col items-start leading-none select-none">
      <span className="font-display tracking-wider-3 text-2xl md:text-3xl font-bold text-ink"
            style={{ textShadow: '1px 1px 0 rgba(0,0,0,0.6)' }}>
        FORGED
      </span>
      <span className="flex items-center gap-1 text-[10px] md:text-xs font-display tracking-wider-5 text-ink/90 mt-0.5">
        <span className="text-accent-2">★</span>
        AMERICAN
        <span className="text-accent-2">★</span>
      </span>
    </a>
  );
}
