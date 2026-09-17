import { Mail, MapPin, Phone } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "About us", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/**
 * Shared footer for property details and the most useful next actions.
 * Contact values are intentionally placeholders until the property details
 * are finalized.
 */
export function Footer() {
  return (
    <footer className="site-footer" id="contact">
      <div className="container site-footer__grid">
        <div className="site-footer__brand">
          {/* Replace this text mark with /images/pg/logo.png when the property logo is ready. */}
          <a className="brand-mark brand-mark--footer" href="/" aria-label="Harbor House home">
            <span className="brand-mark__icon" aria-hidden="true">H</span>
            <span className="brand-mark__name">
              Harbor House
              <small>Student living</small>
            </span>
          </a>
          <p>Thoughtful spaces, friendly faces, and a better way to feel at home while you study.</p>
        </div>

        <div>
          <h2 className="site-footer__heading">Explore</h2>
          <ul className="site-footer__links">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="site-footer__heading">Get in touch</h2>
          <address className="site-footer__contact">
            <a href="https://maps.google.com" target="_blank" rel="noreferrer">
              <MapPin size={17} aria-hidden="true" />
              <span>Saharanpur</span>
            </a>
            <a href="tel:+919458755000">
              <Phone size={17} aria-hidden="true" />
              <span>+919458755000</span>
            </a>
            <a href="mailto:hello@harborhouse.example">
              <Mail size={17} aria-hidden="true" />
              <span>khurshidbcpnb@gmail.com</span>
            </a>
            <a href="https://wa.me/910000000000" target="_blank" rel="noreferrer">
              <span className="site-footer__contact-icon" aria-hidden="true">W</span>
              <span>WhatsApp us</span>
            </a>
          </address>
        </div>
      </div>

      <div className="container site-footer__bottom">
        <p>© {new Date().getFullYear()} Harbor House. All rights reserved.</p>
        <p>Made for student life.</p>
      </div>
    </footer>
  );
}
