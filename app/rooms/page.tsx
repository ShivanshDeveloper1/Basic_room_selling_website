"use client";

import { ArrowRight, SlidersHorizontal, Users } from "lucide-react";
import Image from "next/image";
import { useMemo, useState } from "react";
import { rooms, type RoomType } from "../../data/rooms";

const roomTypes: Array<"All rooms" | RoomType> = ["All rooms", "Single", "Double Sharing", "Triple Sharing"];

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(price);

/**
 * The listing page owns filtering because it is the only view that needs
 * transient filter state. The room source remains shared and server-safe.
 */
export default function RoomsPage() {
  const [selectedType, setSelectedType] = useState<(typeof roomTypes)[number]>("All rooms");
  const [selectedPrice, setSelectedPrice] = useState("Any budget");

  const filteredRooms = useMemo(() => {
    return rooms.filter((room) => {
      const matchesType = selectedType === "All rooms" || room.type === selectedType;
      const matchesPrice =
        selectedPrice === "Any budget" ||
        (selectedPrice === "Under ₹12,000" && room.price < 12000) ||
        (selectedPrice === "₹12,000 - ₹16,000" && room.price >= 12000 && room.price <= 16000) ||
        (selectedPrice === "Above ₹16,000" && room.price > 16000);

      return matchesType && matchesPrice;
    });
  }, [selectedPrice, selectedType]);

  return (
    <div className="rooms-page">
      <header className="rooms-hero">
        <div className="container rooms-hero__content">
          <p className="eyebrow">Rooms at Harbor House</p>
          <h1>Choose Your Perfect Room.</h1>
          <p>Thoughtfully designed spaces with the comfort, calm, and community you need to do your best work.</p>
        </div>
      </header>

      <main className="container section-padding rooms-content">
        <div className="rooms-toolbar" aria-label="Room filters">
          <div className="rooms-toolbar__intro">
            <SlidersHorizontal size={19} aria-hidden="true" />
            <span>Find your fit</span>
          </div>
          <label className="filter-control">
            <span>Room type</span>
            <select value={selectedType} onChange={(event) => setSelectedType(event.target.value as (typeof roomTypes)[number])}>
              {roomTypes.map((roomType) => <option key={roomType}>{roomType}</option>)}
            </select>
          </label>
          <label className="filter-control">
            <span>Monthly price</span>
            <select value={selectedPrice} onChange={(event) => setSelectedPrice(event.target.value)}>
              <option>Any budget</option>
              <option>Under ₹12,000</option>
              <option>₹12,000 - ₹16,000</option>
              <option>Above ₹16,000</option>
            </select>
          </label>
        </div>

        <div className="rooms-results-heading">
          <p><strong>{filteredRooms.length}</strong> room options</p>
          <p className="rooms-results-heading__hint">Utilities and Wi-Fi included in every room</p>
        </div>

        {filteredRooms.length > 0 ? (
          <div className="room-grid">
            {filteredRooms.map((room) => (
              <article className="room-card" key={room.id}>
                <div className="room-card__image-wrap">
                  <Image className="room-card__image" src={room.images[0]} alt={`${room.name} at Harbor House`} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
                  <span className={`availability-badge availability-badge--${room.availability === "Waitlist" ? "waitlist" : "open"}`}>{room.availability}</span>
                </div>
                <div className="room-card__body">
                  <p className="room-card__type">{room.type}</p>
                  <h2>{room.name}</h2>
                  <div className="room-card__meta">
                    <span><Users size={16} aria-hidden="true" /> {room.occupancy}</span>
                    <span><strong>₹{formatPrice(room.price)}</strong> / month</span>
                  </div>
                  <a className="btn-secondary room-card__link" href={`/rooms/${room.slug}`}>
                    Explore room <ArrowRight size={16} aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h2>No rooms match those filters.</h2>
            <p>Try opening the room type or price range to see more options.</p>
          </div>
        )}
      </main>
    </div>
  );
}
