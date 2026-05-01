import Link from 'next/link';

export function Story() {
  return (
    <section className="border-t border-border bg-bg-alt">
      <div className="mx-auto max-w-7xl px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] overflow-hidden border border-border grain">
          <img src="https://images.unsplash.com/photo-1542228262-3d663b306a53?w=1200&q=80" alt="" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
        </div>
        <div>
          <h2 className="heading-mega text-3xl md:text-5xl mb-4">WE DON&apos;T MAKE QUIET CLOTHES.</h2>
          <p className="text-accent font-display tracking-wider-2 uppercase mb-6">FORGED AMERICAN WAS BUILT FOR PEOPLE WHO DON&apos;T BACK DOWN.</p>
          <div className="text-muted leading-relaxed">
              <p className="mb-4">Every shirt we print is for someone who works with their hands, drives with their windows down, and doesn&apos;t ask the room for permission to be themselves. Cotton you can sweat in. Prints that don&apos;t crack. Designs that say something.</p>
              <p className="mb-4">If your boots are dirty, you&apos;re our customer.</p>
          </div>
          <Link href="/about" className="btn-secondary mt-6 inline-flex">LEARN OUR STORY</Link>
        </div>
      </div>
    </section>
  );
}
