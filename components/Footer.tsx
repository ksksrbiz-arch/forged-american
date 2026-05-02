import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-5 py-14 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="font-display tracking-wider-3 uppercase text-xl text-ink mb-1">FORGED</p>
          <p className="font-display tracking-wider-5 text-xs text-ink/80 mb-4"><span className="text-accent-2">★</span> AMERICAN <span className="text-accent-2">★</span></p>
          <p className="text-muted text-sm leading-relaxed">Hard-working apparel for the ones who don&apos;t ask permission.</p>
        </div>
        <div>
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-4">SHOP</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/shop" className="hover:text-accent">All Products</Link></li>
            <li><Link href="/shop?category=Tees" className="hover:text-accent">Tees</Link></li>
            <li><Link href="/shop?category=Hoodies" className="hover:text-accent">Hoodies</Link></li>
            <li><Link href="/shop?category=Hats" className="hover:text-accent">Hats</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-4">SUPPORT</p>
          <ul className="space-y-2 text-sm text-muted">
            <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            <li><Link href="/orders" className="hover:text-accent">Track Order</Link></li>
            <li><Link href="/about" className="hover:text-accent">About Us</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-4">JOIN UP</p>
          <p className="text-sm text-muted mb-3">No spam. Just real drops.</p>
          <form className="flex">
            <input type="email" required placeholder="your@email.com"
              className="flex-1 bg-bg border border-border px-3 py-2 text-sm focus:outline-none focus:border-accent text-ink" />
            <button type="submit" className="bg-accent px-4 text-xs font-display tracking-wider-3 uppercase text-white hover:bg-[#9a1a1a]">GO</button>
          </form>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-4 flex flex-wrap items-center justify-between gap-3 text-xs text-muted">
          <p>© {new Date().getFullYear()} Forged American. All rights reserved.</p>
          <p className="font-display tracking-wider-3 uppercase"><span className="text-accent-2">★</span> Built in the USA</p>
        </div>
      </div>
    </footer>
  );
}
