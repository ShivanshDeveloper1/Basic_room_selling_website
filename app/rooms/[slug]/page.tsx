import { ArrowLeft, Check, MessageCircle, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRoomBySlug, rooms } from "../../../data/rooms";

export function generateStaticParams() {
  return rooms.map((room) => ({ slug: room.slug }));
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 }).format(price);

const includedItems = ["High-speed Wi-Fi", "Weekly housekeeping", "24/7 security", "Power backup", "Laundry access"];

/**
 * Dynamic room view. Keeping this route server-rendered lets each room have
 * its own crawlable URL and metadata while the shared data stays lightweight.
 */
export default async function RoomDetailsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const room = getRoomBySlug(slug);

  if (!room) {
    notFound();
  }

  return (
    <div className="room-detail-page">
      <main className="container section-padding">
        <Link className="back-link" href="/rooms">
          <ArrowLeft size={16} aria-hidden="true" /> Back to all rooms
        </Link>

        <div className="room-detail__heading">
          <div>
            <p className="eyebrow">{room.type}</p>
            <h1>{room.name}</h1>
          </div>
          <span className={`availability-badge availability-badge--${room.availability === "Waitlist" ? "waitlist" : "open"}`}>{room.availability}</span>
        </div>

        <div className="room-gallery" aria-label={`${room.name} image gallery`}>
          <div className="room-gallery__feature">
            <Image src={room.images[0]} alt={`${room.name} main view`} fill priority sizes="(max-width: 700px) 100vw, 66vw" />
          </div>
          <div className="room-gallery__secondary">
            {room.images.slice(1).map((image, index) => (
              <div className="room-gallery__image" key={image}>
                <Image src={image} alt={`${room.name} view ${index + 2}`} fill sizes="(max-width: 700px) 50vw, 33vw" />
              </div>
            ))}
          </div>
        </div>

        <div className="room-detail__layout">
          <section className="room-detail__main">
            <div className="room-detail__summary">
              <div>
                <span className="detail-label">Monthly rent</span>
                <p className="room-detail__price">₹{formatPrice(room.price)} <small>/ month</small></p>
              </div>
              <div>
                <span className="detail-label">Occupancy</span>
                <p className="room-detail__occupancy"><Users size={18} aria-hidden="true" /> {room.occupancy}</p>
              </div>
            </div>

            <section className="detail-section">
              <p className="eyebrow">Room details</p>
              <h2>Everything you need to settle in.</h2>
              <div className="facility-list">
                {room.facilities.map((facility) => (
                  <span key={facility}><Check size={17} aria-hidden="true" /> {facility}</span>
                ))}
              </div>
            </section>

            <section className="detail-section">
              <p className="eyebrow">Included with your stay</p>
              <h2>Comfort comes standard.</h2>
              <div className="included-grid">
                {includedItems.map((item) => <span key={item}><Check size={17} aria-hidden="true" /> {item}</span>)}
              </div>
            </section>
          </section>

          <aside className="room-cta">
            <p className="eyebrow">Make it yours</p>
            <h2>Interested in This Room?</h2>
            <p>Come see the space, ask your questions, and find out why Harbor House feels different.</p>
            <div className="room-cta__actions">
              <a className="btn-primary" href="mailto:hello@harborhouse.example?subject=Book a visit">
                <Phone size={17} aria-hidden="true" /> Book a Visit
              </a>
              <a className="btn-secondary" href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
                <MessageCircle size={17} aria-hidden="true" /> WhatsApp Us
              </a>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
