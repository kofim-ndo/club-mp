import { Link } from "react-router-dom";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-black px-8 md:px-16 py-10">
      <Link
        to="/"
        className="text-xs font-bold uppercase tracking-widest"
      >
        ← Back
      </Link>

      <div className="max-w-4xl mx-auto mt-12">
        <p className="text-xs font-bold uppercase tracking-[0.35em] mb-6">
          Our Story
        </p>

        <h1 className="text-4xl md:text-6xl font-black uppercase mb-10">
          Built Different.
        </h1>

        <div className="space-y-6 text-neutral-700 leading-relaxed text-lg">
          <p>
            Millimovepriveclub, also known as MP Club, is more than a clothing
            brand — it is a movement built for individuals who lead with purpose
            and refuse to follow the crowd.
          </p>

          <p>
            Guided by the slogan “For Those Who Lead, Not Follow,” MP Club
            represents confidence, ambition, and authenticity. Every collection
            is designed for people who think independently, set their own
            standards, and inspire those around them through their actions.
          </p>

          <p>
            Founded on the principles of integrity, faith, and determination,
            MP Club speaks to a community driven by growth, discipline, and
            purpose. We believe success is earned through consistency, belief,
            and the courage to stand apart from the ordinary.
          </p>

          <p>
            Our clothing is more than what you wear; it reflects a mindset.
            A mindset of leadership, self-respect, and relentless ambition.
          </p>

          <p className="font-bold">
            This is MP Club. For Those Who Lead, Not Follow.
          </p>
        </div>
      </div>
    </main>
  );
}