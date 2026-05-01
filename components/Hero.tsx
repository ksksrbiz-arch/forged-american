import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative overflow-hidden grain">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?w=1600&q=80"
          alt=""
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 md:py-36 lg:py-44">
        <h1 className="heading-mega text-5xl sm:text-7xl md:text-8xl lg:text-9xl fade-in" dangerouslySetInnerHTML={{ __html: `<span className="text-ink block">NO APOLOGIES.</span><span className="text-accent block">JUST REAL.</span>` }} />
        <p className="mt-6 max-w-md text-ink/85 leading-relaxed fade-in">
          Built for the ones who work hard, live loud, and don&apos;t ask permission. Backwoods raised. American made. This isn&apos;t fashion — it&apos;s who you are.
        </p>
        <div className="mt-8 flex flex-wrap gap-3 fade-in">
          <Link href="/shop" className="btn-primary">★ SHOP BEST SELLERS</Link>
          <Link href="/shop" className="btn-secondary">🇺🇸 SHOP ALL</Link>
        </div>
      </div>
    </section>
  );
}
