"use client";

import { ArrowRight, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { rooms } from "../../data/rooms";

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(price);

/** A concise preview of the three core room types on the homepage. */
export function FeaturedRoomsSection() {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <section className="section-padding home-featured-rooms" id="rooms">
      <div className="container">
        <div className="section-heading section-heading--split">
          <div>
            <p className="eyebrow">Find your fit</p>
            <h2>Rooms for Real Student Life.</h2>
          </div>
          <Link className="text-link" href="/rooms">View all rooms <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>

        <div className="featured-room-grid">
          {featuredRooms.map((room, index) => (
            <motion.article
              className="featured-room-card"
              key={room.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <div className="featured-room-card__image">
                <Image src={room.images[0]} alt={`${room.name} preview`} fill sizes="(max-width: 800px) 100vw, 33vw" />
              </div>
              <div className="featured-room-card__body">
                <p className="room-card__type">{room.type}</p>
                <h3>{room.name}</h3>
                <div className="featured-room-card__meta">
                  <span><Users size={16} aria-hidden="true" /> {room.occupancy}</span>
                  <span><strong>₹{formatPrice(room.price)}</strong>/month</span>
                </div>
                <Link className="btn-secondary" href={`/rooms/${room.slug}`}>View Room <ArrowRight size={16} aria-hidden="true" /></Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
