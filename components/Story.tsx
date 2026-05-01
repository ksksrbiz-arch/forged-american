import Link from 'next/link';

export function Story() {
  return (
    <section className="bg-bg border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div className="aspect-square bg-card border border-border relative grain rounded-sm overflow-hidden order-2 md:order-1">
          <img
            src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&q=80"
            alt="The maker's bench"
            className="w-full h-full object-cover opacity-90"
          />
        </div>
        <div className="order-1 md:order-2">
          <p className="text-accent font-display tracking-wider-3 uppercase text-sm mb-4">★ THE FORGED STORY</p>
          <h2 className="heading-mega text-4xl md:text-6xl whitespace-pre-line">BUILT FROM\nTHE BACK ROADS UP.</h2>
          <p className="mt-6 text-muted text-base leading-relaxed">We started in a Big Sky garage with a heat press, a soldering iron, and an attitude. No marketing department. No focus groups. Just a take on Americana that doesn't apologize. Lifted trucks, cold beer, hard work, two lanes, and the kind of pride you don't have to explain.</p>
          <Link href="/about" className="mt-8 inline-block btn-secondary">READ THE STORY</Link>
        </div>
      </div>
    </section>
  );
}
