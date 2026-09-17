"use client";

import { BedDouble, Bolt, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  { title: "Fully Furnished", description: "Move in with the essentials already taken care of.", icon: BedDouble },
  { title: "High-Speed Wi-Fi", description: "Stay connected for classes, calls, and downtime.", icon: Wifi },
  { title: "Safe & Secure", description: "Thoughtful security and support around the clock.", icon: ShieldCheck },
  { title: "Power Backup", description: "Your study plans should not depend on the weather.", icon: Bolt },
  { title: "Clean Common Areas", description: "Fresh, welcoming spaces to share every day.", icon: Sparkles },
];

/** Benefits are kept as data so the same pattern can grow with the property. */
export function BenefitsSection() {
  return (
    <section className="section-padding home-benefits" id="about">
      <div className="container">
        <div className="section-heading">
          <p className="eyebrow">The Harbor House difference</p>
          <h2>Everything You Need.</h2>
          <p>Comfortable details, dependable essentials, and a community that makes settling in easy.</p>
        </div>

        <div className="benefit-grid">
          {benefits.map(({ title, description, icon: Icon }, index) => (
            <motion.article
              className="benefit-card"
              key={title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <span className="benefit-card__icon"><Icon size={21} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
