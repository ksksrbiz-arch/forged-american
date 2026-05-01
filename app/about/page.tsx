import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="text-accent font-display tracking-wider-3 uppercase text-sm mb-4">★ THE FORGED STORY</p>
          <h1 className="heading-mega text-4xl md:text-6xl mb-8 whitespace-pre-line">BUILT FROM\nTHE BACK ROADS UP.</h1>
          <div className="prose prose-invert max-w-none text-muted text-lg leading-relaxed space-y-6">
            <p>We started in a Big Sky garage with a heat press, a soldering iron, and an attitude. No marketing department. No focus groups. Just a take on Americana that doesn't apologize. Lifted trucks, cold beer, hard work, two lanes, and the kind of pride you don't have to explain.</p>
            <p>
              We don&apos;t apologize for what we make or who we make it for. We design hard, print loud,
              and ship fast. Every piece is field-tested before it goes live, and we stand behind every order
              with a 30-day no-questions return.
            </p>
            <p>
              If you wear our gear, you&apos;re part of the crew. Tag us, send us photos from your shop, your
              jobsite, your tailgate, your back porch. We see you. We make this for you.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
