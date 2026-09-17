"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

/** The first screen introduces the property and gives visitors two clear paths. */
export function HeroSection() {
  return (
    <section className="home-hero" id="home">
      <div className="container home-hero__grid">
        <motion.div
          className="home-hero__copy"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
          >
            Harbor House · Student living
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.15,
              duration: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Your Comfortable PG, Your Second Home.
          </motion.h1>

          <motion.p
            className="home-hero__subtext"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Modern, secure, and student-friendly rooms.
          </motion.p>

          <motion.div
            className="home-hero__actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <Link className="btn-primary" href="/rooms">
              Explore Rooms
              <motion.span
                whileHover={{ x: 4 }}
                transition={{ duration: 0.2 }}
              >
                <ArrowRight size={17} aria-hidden="true" />
              </motion.span>
            </Link>

            <Link className="btn-secondary" href="#contact">
              <MessageCircle size={17} aria-hidden="true" />
              Enquire Now
            </Link>
          </motion.div>

          <motion.div
            className="home-hero__note"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.55, duration: 0.5 }}
          >
            <motion.span
              className="home-hero__status-dot"
              aria-hidden="true"
              animate={{
                scale: [1, 1.25, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span>Now welcoming our next batch of residents</span>
          </motion.div>
        </motion.div>

        <motion.div
          className="home-hero__visual"
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.9,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Image
            src="/main1.jpeg"
            alt="Bright furnished room at Harbor House"
            fill
            priority
            sizes="(max-width: 800px) 100vw, 52vw"
          />

          <motion.div
            className="home-hero__image-caption"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <span>Room to focus</span>
            <strong>Designed around your day</strong>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}