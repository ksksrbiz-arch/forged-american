import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { FeatureGrid } from '@/components/FeatureGrid';
import { ProductGrid } from '@/components/ProductGrid';
import { Story } from '@/components/Story';
import { Footer } from '@/components/Footer';
import { getProducts } from '@/lib/data';

export default async function HomePage() {
  const products = await getProducts({ limit: 4 });

  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <section className="border-t border-border bg-bg">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <div className="text-center mb-10">
              <h2 className="heading-mega text-3xl md:text-5xl">
                <span className="text-accent">★</span> THIS AIN&apos;T FOR EVERYONE <span className="text-accent">★</span>
              </h2>
              <p className="mt-4 max-w-2xl mx-auto text-muted">
                If you like things polished and politically correct, you&apos;re in the wrong place. This brand is for the ones who get dirty, stay loyal, and mean what they say. No filters. No fake. No apologies.
              </p>
            </div>
          </div>
        </section>
        <FeatureGrid />
        <section className="border-t border-border bg-bg">
          <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="heading-mega text-center text-3xl md:text-5xl mb-10">
              <span className="text-accent">★</span> BEST SELLERS <span className="text-accent">★</span>
            </h2>
            <ProductGrid products={products} />
            <div className="mt-10 text-center">
              <a href="/shop" className="btn-secondary">SHOP ALL</a>
            </div>
          </div>
        </section>
        <Story />
      </main>
      <Footer />
    </>
  );
}
