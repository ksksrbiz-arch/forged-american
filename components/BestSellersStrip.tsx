import Link from 'next/link';
import { getProducts } from '@/lib/data';

export async function BestSellersStrip() {
  const products = (await getProducts({ limit: 4 })).slice(0, 4);
  return (
    <section className="bg-bg pb-20">
      <div className="mx-auto max-w-7xl px-5 text-center mb-10">
        <h2 className="heading-mega text-3xl md:text-5xl star-divider">
          <span className="text-accent-2">★</span>
          <span>BEST SELLERS</span>
          <span className="text-accent-2">★</span>
        </h2>
      </div>
      <div className="mx-auto max-w-7xl px-5 grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <Link href={`/shop/${p.slug}`} key={p.slug} className="group relative aspect-[4/5] bg-card border border-border overflow-hidden">
            {p.image_url ? (
              <img src={p.image_url} alt={p.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center p-6">
                <span className="font-display tracking-wider-3 uppercase text-ink text-center text-xl leading-tight">{p.name}</span>
              </div>
            )}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 to-transparent p-4">
              <p className="font-display tracking-wider-3 uppercase text-sm text-ink">{p.name}</p>
              <p className="font-display tracking-wider-3 text-xs text-accent mt-1">${Number(p.price).toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="text-center mt-10">
        <Link href="/shop" className="btn-secondary">VIEW ALL PRODUCTS</Link>
      </div>
    </section>
  );
}
