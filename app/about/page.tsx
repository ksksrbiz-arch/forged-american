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
          <p className="text-accent font-display tracking-wider-2 uppercase mb-3">★ Our story ★</p>
          <h1 className="heading-mega text-4xl md:text-6xl mb-8">WE DON&apos;T MAKE QUIET CLOTHES.</h1>
          <p className="text-accent font-display tracking-wider-2 uppercase mb-6">FORGED AMERICAN WAS BUILT FOR PEOPLE WHO DON&apos;T BACK DOWN.</p>
          <div className="text-muted leading-relaxed space-y-4">
            <p>Every shirt we print is for someone who works with their hands, drives with their windows down, and doesn&apos;t ask the room for permission to be themselves. Cotton you can sweat in. Prints that don&apos;t crack. Designs that say something.</p>
            <p>If your boots are dirty, you&apos;re our customer.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
