export function FeatureGrid() {
  return (
    <section className="bg-bg pb-20">
      <div className="mx-auto max-w-7xl px-5 grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="group relative aspect-[4/5] md:aspect-auto md:h-80 overflow-hidden border border-border bg-card">
          <img src="https://images.unsplash.com/photo-1605723517503-3cadb5818a0c?auto=format&fit=crop&w=900&q=80" alt="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-between p-5">
            <h3 className="heading-mega text-3xl md:text-4xl text-ink whitespace-pre-line leading-none">NO
APOLOGIES</h3>
            <div>
              <div className="inline-block bg-accent text-white text-[10px] font-display tracking-wider-3 uppercase px-2.5 py-1 mb-1">
                ★ FORGED
              </div>
              <p className="font-body text-xs md:text-sm text-ink/90 whitespace-pre-line leading-snug">Say it how it is.
Wear it like you mean it.</p>
            </div>
          </div>
        </div>
        <div className="group relative aspect-[4/5] md:aspect-auto md:h-80 overflow-hidden border border-border bg-card">
          <img src="https://images.unsplash.com/photo-1542856204-00585d97c9be?auto=format&fit=crop&w=900&q=80" alt="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-between p-5">
            <h3 className="heading-mega text-3xl md:text-4xl text-ink whitespace-pre-line leading-none">BACKWOODS
BUILT</h3>
            <div>
              <div className="inline-block bg-accent text-white text-[10px] font-display tracking-wider-3 uppercase px-2.5 py-1 mb-1">
                ★ FORGED
              </div>
              <p className="font-body text-xs md:text-sm text-ink/90 whitespace-pre-line leading-snug">Raised tough.
Built tougher.</p>
            </div>
          </div>
        </div>
        <div className="group relative aspect-[4/5] md:aspect-auto md:h-80 overflow-hidden border border-border bg-card">
          <img src="https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&w=900&q=80" alt="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-between p-5">
            <h3 className="heading-mega text-3xl md:text-4xl text-ink whitespace-pre-line leading-none">LOUD &
PROUD</h3>
            <div>
              <div className="inline-block bg-accent text-white text-[10px] font-display tracking-wider-3 uppercase px-2.5 py-1 mb-1">
                ★ FORGED
              </div>
              <p className="font-body text-xs md:text-sm text-ink/90 whitespace-pre-line leading-snug">If they can hear
you coming — you're
doing it right.</p>
            </div>
          </div>
        </div>
        <div className="group relative aspect-[4/5] md:aspect-auto md:h-80 overflow-hidden border border-border bg-card">
          <img src="https://images.unsplash.com/photo-1565017228812-9d2a83c3e2a7?auto=format&fit=crop&w=900&q=80" alt="" className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
          <div className="absolute inset-0 grain pointer-events-none" />
          <div className="relative z-10 h-full flex flex-col justify-between p-5">
            <h3 className="heading-mega text-3xl md:text-4xl text-ink whitespace-pre-line leading-none">REAL
AMERICA</h3>
            <div>
              <div className="inline-block bg-accent text-white text-[10px] font-display tracking-wider-3 uppercase px-2.5 py-1 mb-1">
                ★ FORGED
              </div>
              <p className="font-body text-xs md:text-sm text-ink/90 whitespace-pre-line leading-snug">No spotlight.
No shortcuts.
Just real life.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
