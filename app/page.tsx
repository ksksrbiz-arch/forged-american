import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { SectionIntro } from '@/components/SectionIntro';
import { FeatureGrid } from '@/components/FeatureGrid';
import { BestSellersStrip } from '@/components/BestSellersStrip';
import { Footer } from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <SectionIntro />
        <FeatureGrid />
        <BestSellersStrip />
      </main>
      <Footer />
    </>
  );
}
