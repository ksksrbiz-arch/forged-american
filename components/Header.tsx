'use client';
import Link from 'next/link';
import { ShoppingCart, Search, User, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useCart } from '@/lib/cart-store';
import { Logo } from './Logo';

export function Header() {
  const { items } = useCart();
  const count = items.reduce((s, i) => s + i.qty, 0);
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-40 transition-colors duration-300 ${
      scrolled ? 'bg-bg/95 backdrop-blur-md border-b border-border' : 'bg-transparent'
    }`}>
      <div className="mx-auto max-w-7xl px-5 h-20 flex items-center justify-between">
        <Logo />

        <nav className="hidden md:flex items-center gap-8 text-sm font-display tracking-wider-3 uppercase">
          <Link href="/" className="hover:text-accent transition-colors">Home</Link>
          <details className="relative group">
            <summary className="list-none cursor-pointer hover:text-accent">Shop ▾</summary>
            <div className="absolute left-0 top-full mt-2 bg-bg-alt border border-border min-w-[180px] py-2">
              <Link href="/shop" className="block px-4 py-2 text-xs hover:bg-card hover:text-accent">All Products</Link>
              <Link href="/shop?category=Tees" className="block px-4 py-2 text-xs hover:bg-card hover:text-accent">Tees</Link>
              <Link href="/shop?category=Hoodies" className="block px-4 py-2 text-xs hover:bg-card hover:text-accent">Hoodies</Link>
              <Link href="/shop?category=Hats" className="block px-4 py-2 text-xs hover:bg-card hover:text-accent">Hats</Link>
            </div>
          </details>
          <Link href="/shop" className="hover:text-accent transition-colors">Collections ▾</Link>
          <Link href="/about" className="hover:text-accent transition-colors">About Us</Link>
          <Link href="/contact" className="hover:text-accent transition-colors">Contact</Link>
        </nav>

        <div className="flex items-center gap-5">
          <button aria-label="Search" className="hover:text-accent transition-colors hidden md:block"><Search size={20} /></button>
          <Link href="/orders" aria-label="Orders" className="hover:text-accent transition-colors hidden md:block">
            <User size={20} />
          </Link>
          <Link href="/cart" aria-label="Cart" className="relative hover:text-accent transition-colors">
            <ShoppingCart size={20} />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-[10px] font-display tracking-wider-2 rounded-full w-5 h-5 flex items-center justify-center">
                {count}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-bg">
          <nav className="flex flex-col p-5 gap-4 font-display tracking-wider-3 uppercase">
            <Link href="/" onClick={() => setOpen(false)}>Home</Link>
            <Link href="/shop" onClick={() => setOpen(false)}>Shop</Link>
            <Link href="/about" onClick={() => setOpen(false)}>About Us</Link>
            <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
            <Link href="/orders" onClick={() => setOpen(false)}>Track Order</Link>
          </nav>
        </div>
      )}
    </header>
  );
}
