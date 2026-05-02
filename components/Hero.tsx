import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-[78vh] md:min-h-[88vh] flex items-center overflow-hidden -mt-20">
      {/* Background — video on capable devices, JPG fallback otherwise.
          The poster attribute paints the first frame instantly while the
          video downloads, so there's no black flash on slow networks. */}
      <div className="absolute inset-0">
        {/* CSS-painted fallback: the poster JPG is set as a background-image
            so the hero is never blank, even before the <video> mounts or if
            the browser blocks autoplay. The <video> sits on top of it. */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/video/forged-hero-poster.jpg')" }}
          aria-hidden="true"
        />
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/forged-hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/video/forged-hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/70 to-bg/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent" />
        <div className="absolute inset-0 grain pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pt-24 pb-14 md:pt-28 md:pb-20 w-full">
        <div className="max-w-3xl">
          <h1 className="heading-mega text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-ink mb-1 md:mb-2 grunge-text">
            NO APOLOGIES.
          </h1>
          <h1 className="heading-mega text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-accent mb-6 md:mb-8 grunge-text">
            JUST REAL.
          </h1>
          <p className="font-body text-sm sm:text-base md:text-lg text-ink/85 max-w-md leading-relaxed mb-7 md:mb-9 whitespace-pre-line">{`Built for the ones who work hard, live loud,
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
