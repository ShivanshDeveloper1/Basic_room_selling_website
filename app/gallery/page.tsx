import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { galleryImages } from "../../data/gallery";

export const metadata: Metadata = {
  title: "Gallery | Harbor House student living",
  description: "Take a look around Harbor House rooms, common areas, and student-friendly spaces.",
};

export default function GalleryPage() {
  return (
    <main className="bg-[var(--color-surface-soft)]">
      <section className="bg-[var(--color-surface-warm)]">
        <div className="container py-16 md:py-24">
          <p className="eyebrow">A look around</p>
          <h1 className="max-w-3xl text-4xl md:text-6xl">Spaces that make everyday living feel easy.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-ink-muted)]">Explore the rooms, shared areas, and small details that make Harbor House feel like home.</p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="columns-1 gap-5 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <figure className="gallery-tile mb-5 break-inside-avoid overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-brand-soft)] shadow-[var(--shadow-sm)]" key={image.src}>
              <div className={`relative ${index % 3 === 0 ? "aspect-[4/5]" : "aspect-[4/3]"}`}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition duration-500 hover:scale-105" />
              </div>
              <figcaption className="flex items-center justify-between gap-3 bg-[var(--color-surface)] px-4 py-3 text-sm">
                <span className="font-semibold text-[var(--color-ink)]">{image.alt}</span>
                <span className="text-xs font-bold uppercase tracking-[0.08em] text-[var(--color-brand)]">{image.category}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius-lg)] bg-[var(--color-brand)] p-6 text-[var(--color-surface)] md:p-8">
          <div>
            <h2 className="text-2xl">Want to see it in person?</h2>
            <p className="mt-2 text-sm text-[var(--color-brand-soft)]">Book a visit and take your time exploring the property.</p>
          </div>
          <Link className="btn-secondary border-transparent bg-[var(--color-surface)]" href="/contact">Plan a visit <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </section>
    </main>
  );
}
