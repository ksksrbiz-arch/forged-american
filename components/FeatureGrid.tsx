const features = [
  { title: "AMERICAN", body: "Designed in the heartland. Made for the road." },
  { title: "BUILT TOUGH", body: "Heavyweight cotton. Reinforced stitching. No fluff." },
  { title: "STRAIGHT TALK", body: "What you see is what you get. Always." },
  { title: "FREE SHIP $50+", body: "Standard delivery on every U.S. order over fifty." }
];

export function FeatureGrid() {
  return (
    <section className="bg-bg-alt border-b border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.title} className="text-center">
            <p className="font-display tracking-wider-2 uppercase text-sm md:text-base text-accent">{f.title}</p>
            <p className="text-muted text-xs md:text-sm mt-1">{f.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
