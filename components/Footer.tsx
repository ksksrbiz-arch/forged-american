import Link from 'next/link';
import { SocialIcons } from './SocialIcons';

export function Footer() {
  return (
    <footer className="bg-bg-alt border-t border-border mt-auto">
      <div className="mx-auto max-w-7xl px-5 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 md:gap-8">
        {/* Brand block — wider on md+ */}
        <div className="md:col-span-4">
          <p className="font-display tracking-wider-3 uppercase text-2xl text-ink mb-1">FORGED</p>
          <p className="font-display tracking-wider-5 text-xs text-ink/80 mb-5">
            <span className="text-accent-2">★</span> AMERICAN <span className="text-accent-2">★</span>
          </p>
          <p className="text-muted text-sm leading-relaxed max-w-xs mb-6">
            Hard-working apparel for the ones who don&apos;t ask permission. Made for the road, the range,
            and every dirt path in between.
          </p>
          <SocialIcons />
        </div>

        {/* Shop */}
        <div className="md:col-span-2">
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-4">Shop</p>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link href="/shop?sort=best-selling" className="hover:text-accent transition-colors">Best Sellers</Link></li>
            <li><Link href="/shop?sort=newest" className="hover:text-accent transition-colors">New Drops</Link></li>
            <li><Link href="/shop?category=Apparel" className="hover:text-accent transition-colors">Tees &amp; Hoodies</Link></li>
            <li><Link href="/shop?category=Hats" className="hover:text-accent transition-colors">Hats</Link></li>
            <li><Link href="/shop?on_sale=1" className="hover:text-accent transition-colors">Last Chance</Link></li>
          </ul>
        </div>

        {/* Support */}
        <div className="md:col-span-2">
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-4">Help</p>
          <ul className="space-y-2.5 text-sm text-muted">
            <li><Link href="/orders" className="hover:text-accent transition-colors">Track Order</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Shipping &amp; Returns</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Size Guide</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Care Instructions</Link></li>
            <li><Link href="/contact" className="hover:text-accent transition-colors">Contact</Link></li>
            <li><Link href="/about" className="hover:text-accent transition-colors">About Us</Link></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4">
          <p className="font-display tracking-wider-3 uppercase text-sm text-ink mb-2">Join the Family</p>
          <p className="text-sm text-muted mb-4 leading-relaxed">
            First crack at limited drops. Plain talk, no filler. Unsubscribe whenever — we won&apos;t take it personally.
          </p>
          <form className="flex" method="POST" action="/api/subscribe">
            <input
              type="email"
              required
              name="email"
              placeholder="your@email.com"
              autoComplete="email"
              className="flex-1 bg-bg border border-border px-3 py-2.5 text-sm focus:outline-none focus:border-accent text-ink placeholder:text-muted/60"
            />
            <button type="submit" className="bg-accent px-5 text-xs font-display tracking-wider-3 uppercase text-white hover:bg-[#9a1a1a] transition-colors">
              SIGN ME UP
            </button>
          </form>
          <p className="text-[10px] text-muted/70 mt-3 leading-relaxed uppercase tracking-wider-2">
            By subscribing you agree to receive marketing emails. We don&apos;t share your email. Ever.
          </p>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="mx-auto max-w-7xl px-5 py-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted">
          <p>© {new Date().getFullYear()} Forged American · 1Commerce LLC. All rights reserved.</p>
          <p className="font-display tracking-wider-3 uppercase">
            <span className="text-accent-2">★</span> Designed in the USA <span className="text-accent-2">★</span>
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <Link href="/privacy" className="hover:text-accent">Privacy</Link>
            <span className="opacity-30">·</span>
            <Link href="/terms" className="hover:text-accent">Terms</Link>
            <span className="opacity-30">·</span>
            <Link href="/accessibility" className="hover:text-accent">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
