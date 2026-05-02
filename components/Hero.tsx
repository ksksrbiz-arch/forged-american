import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[88vh] flex items-center overflow-hidden -mt-20">
      {/* Background photo */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?auto=format&fit=crop&w=2000&q=80"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Layered scrim for legibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-28 pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="heading-mega text-7xl md:text-9xl text-ink mb-2 grunge-text">
            NO APOLOGIES.
          </h1>
          <h1 className="heading-mega text-7xl md:text-9xl text-accent mb-8 grunge-text">
            JUST REAL.
          </h1>
          <p className="font-body text-base md:text-lg text-ink/85 max-w-md leading-relaxed mb-9 whitespace-pre-line">{`Built for the ones who work hard, live loud,
and don't ask permission.
Backwoods raised. American made.
This isn't fashion—it's who you are.`}</p>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/shop?sort=best-selling" className="btn-primary">
              <span className="text-accent-2">★</span> SHOP BEST SELLERS
            </Link>
            <Link href="/shop" className="btn-secondary">
              <span aria-hidden className="inline-block">🇺🇸</span> SHOP ALL
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
