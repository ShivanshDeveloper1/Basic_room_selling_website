import type { Metadata } from "next";
import Image from "next/image";
import { Check, HeartHandshake, ShieldCheck, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "About Harbor House | Comfortable student living",
  description: "Discover the thoughtful, safe, and clean student-first approach behind Harbor House PG accommodation.",
};

const values = [
  {
    title: "Made for student life",
    description: "From quiet study corners to friendly shared spaces, every part of Harbor House is built around the rhythm of student life.",
    icon: HeartHandshake,
  },
  {
    title: "Safety you can feel",
    description: "Reliable support, considered access, and a team that is here when you need them help residents feel at ease from day one.",
    icon: ShieldCheck,
  },
  {
    title: "Clean by design",
    description: "Fresh common areas, regular housekeeping, and well-kept rooms create a calm environment to return to every evening.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[var(--color-surface-soft)]">
      <section className="page-hero bg-[var(--color-surface-warm)]">
        <div className="container grid gap-10 py-16 md:grid-cols-[1fr_0.9fr] md:items-center md:py-28">
          <div className="max-w-2xl">
            <p className="eyebrow">About Harbor House</p>
            <h1 className="text-4xl md:text-6xl">A Comfortable Place to Live, Study &amp; Grow.</h1>
            <p className="mt-6 max-w-xl text-lg text-[var(--color-ink-muted)]">
              We create the kind of PG we would want for ourselves: comfortable, dependable, and warm enough to feel like a second home.
            </p>
          </div>
          <div className="page-hero__image relative min-h-80 overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-md)] md:min-h-[25rem]">
            <Image src="/homepage.jpeg" alt="Clean, bright common area at Harbor House" fill priority sizes="(max-width: 768px) 100vw, 45vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
          <div>
            <p className="eyebrow">Why we are here</p>
            <h2 className="text-3xl md:text-5xl">More than a room. A place to belong.</h2>
          </div>
          <div className="space-y-5 text-[var(--color-ink-muted)]">
            <p>Moving to a new city is a big step. Harbor House makes the everyday parts simpler, so you have more energy for your classes, friendships, and ambitions.</p>
            <p>We keep the essentials thoughtful and the atmosphere easy: private space when you need focus, shared spaces when you want company, and a dependable team throughout your stay.</p>
            <ul className="grid gap-3 pt-3 text-sm font-semibold text-[var(--color-ink)] sm:grid-cols-2">
              {["Student-first support", "Quiet places to focus", "Friendly shared spaces", "Close to campus life"].map((item) => (
                <li className="flex items-center gap-2" key={item}><Check size={17} className="text-[var(--color-success)]" aria-hidden="true" />{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-surface)]">
        <div className="container section-padding">
          <div className="max-w-2xl">
            <p className="eyebrow">The Harbor House promise</p>
            <h2 className="text-3xl md:text-5xl">Good days start with a good place to come home to.</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {values.map(({ title, description, icon: Icon }) => (
              <article className="rounded-[var(--radius-md)] border border-[var(--color-border)] bg-[var(--color-surface-soft)] p-6" key={title}>
                <span className="grid h-11 w-11 place-items-center rounded-[var(--radius-sm)] bg-[var(--color-brand-soft)] text-[var(--color-brand-dark)]"><Icon size={21} aria-hidden="true" /></span>
                <h3 className="mt-6 font-sans text-lg font-bold">{title}</h3>
                <p className="mt-2 text-sm text-[var(--color-ink-muted)]">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
