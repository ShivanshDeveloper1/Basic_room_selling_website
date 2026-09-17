"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

/** Final conversion section with a deliberately lightweight map placeholder. */
export function LocationCtaSection() {
  return (
    <section className="section-padding home-location" id="gallery">
      <div className="container home-location__grid">
        <motion.div
          className="home-location__copy"
          initial={{ opacity: 0, x: -18 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
        >
          <p className="eyebrow">Close to what matters</p>
          <h2>Ready to Find Your New Room?</h2>
          <p>Visit Harbor House, meet the team, and see the spaces in person before you decide.</p>
          <div className="home-location__actions">
            <a className="btn-primary" href="mailto:hello@harborhouse.example?subject=Book a visit"><Phone size={17} aria-hidden="true" /> Book a Visit</a>
            <a className="btn-secondary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer"><MessageCircle size={17} aria-hidden="true" /> Talk to Us</a>
          </div>
        </motion.div>

        <div className="map-placeholder" role="img" aria-label="Map placeholder showing Harbor House at 24 Campus Road">
          <span className="map-placeholder__pin"><MapPin size={23} aria-hidden="true" /></span>
          <strong>Harbor House</strong>
          <span>24 Campus Road, Your City</span>
          <Link href="https://maps.google.com" target="_blank" rel="noreferrer">Open in Google Maps</Link>
        </div>
      </div>
    </section>
  );
}
