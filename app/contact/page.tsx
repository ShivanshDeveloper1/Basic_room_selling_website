import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { WhatsAppButton } from "../../components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Contact Harbor House | Find your PG room",
  description: "Enquire about Harbor House rooms, book a visit, or talk with our student accommodation team.",
};

const contactDetails = [
  { label: "Phone", value: "+919458755000", href: "tel:+910000000000", icon: Phone },
  { label: "Email", value: "khurshidbcpnb@gmail.com", href: "khurshidbcpnb@gmail.com", icon: Mail },
  { label: "Address", value: "Saharanpur ", href: "https://maps.google.com", icon: MapPin },
];

export default function ContactPage() {
  return (
    <main className="bg-[var(--color-surface-soft)]">
      <section className="bg-[var(--color-surface-warm)]">
        <div className="container py-16 md:py-24">
          <p className="eyebrow">Start a conversation</p>
          <h1 className="text-4xl md:text-6xl">Let&apos;s Find Your Room.</h1>
          <p className="mt-6 max-w-2xl text-lg text-[var(--color-ink-muted)]">Tell us a little about what you are looking for. Our team will help you find the right fit and arrange a visit.</p>
        </div>
      </section>

      <section className="container section-padding">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <form className="rounded-[var(--radius-lg)] border border-[var(--color-border)] bg-[var(--color-surface)] p-6 shadow-[var(--shadow-sm)] md:p-8" action="/api/enquiries" method="post">
            <div className="mb-8">
              <p className="eyebrow">Enquiry form</p>
              <h2 className="text-3xl">We&apos;ll get back to you soon.</h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="form-field">
                <span>Name</span>
                <input name="name" type="text" autoComplete="name" placeholder="Your full name" required />
              </label>
              <label className="form-field">
                <span>Phone</span>
                <input name="phone" type="tel" autoComplete="tel" placeholder="+91 00000 00000" required />
              </label>
              <label className="form-field sm:col-span-2">
                <span>Email</span>
                <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
              </label>
              <label className="form-field sm:col-span-2">
                <span>Room preference</span>
                <select name="roomPreference" defaultValue="" required>
                  <option value="" disabled>Select a room type</option>
                  <option value="single">Single room</option>
                  <option value="double-sharing">Double sharing</option>
                  <option value="triple-sharing">Triple sharing</option>
                  <option value="not-sure">I&apos;m not sure yet</option>
                </select>
              </label>
              <label className="form-field sm:col-span-2">
                <span>Message</span>
                <textarea name="message" rows={5} placeholder="Tell us about your move-in date or any questions." />
              </label>
            </div>
            <button className="btn-primary mt-7 w-full sm:w-auto" type="submit">Send Enquiry</button>
          </form>

          <aside className="space-y-6 lg:pt-4">
            <div>
              <p className="eyebrow">Contact details</p>
              <h2 className="text-3xl md:text-4xl">A real person is ready to help.</h2>
              <p className="mt-4 text-[var(--color-ink-muted)]">Reach out in the way that suits you. We&apos;re happy to answer questions about rooms, pricing, visits, and move-in.</p>
            </div>
            <div className="grid gap-3">
              {contactDetails.map(({ label, value, href, icon: Icon }) => (
                <a className="contact-detail" href={href} key={label} target={label === "Address" ? "_blank" : undefined} rel={label === "Address" ? "noreferrer" : undefined}>
                  <span className="contact-detail__icon"><Icon size={19} aria-hidden="true" /></span>
                  <span><small>{label}</small><strong>{value}</strong></span>
                </a>
              ))}
            </div>
            <div className="rounded-[var(--radius-lg)] bg-[var(--color-brand)] p-6 text-[var(--color-surface)]">
              <h2 className="text-2xl">Prefer a quick chat?</h2>
              <p className="mt-2 text-sm text-[var(--color-brand-soft)]">Message us on WhatsApp and we&apos;ll help you take the next step.</p>
              <WhatsAppButton className="btn-secondary mt-5 border-transparent bg-[var(--color-surface)] text-[var(--color-brand-dark)]" />
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
