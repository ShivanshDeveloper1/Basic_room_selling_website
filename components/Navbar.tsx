"use client";

import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Rooms", href: "/rooms" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

/**
 * Site-wide navigation with a compact mobile menu.
 * The menu closes after every navigation so the next section is never hidden
 * behind an open mobile panel.
 */
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <nav className="container site-nav" aria-label="Main navigation">
        {/* Replace this text mark with /images/pg/logo.png when the property logo is ready. */}
        <a className="brand-mark" href="/" onClick={closeMenu} aria-label="Harbor House home">
          <span className="brand-mark__icon" aria-hidden="true">H</span>
          <span className="brand-mark__name">
            Harbor House
            <small>Student living</small>
          </span>
        </a>

        <div
          className={`site-nav__links ${isMenuOpen ? "site-nav__links--open" : ""}`}
          id="mobile-navigation"
        >
          {navigationLinks.map((link) => (
            <a className="site-nav__link" href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="btn-primary site-nav__mobile-cta" href="#contact" onClick={closeMenu}>
            <MessageCircle size={17} aria-hidden="true" />
            Enquire Now
          </a>
        </div>

        <a className="btn-primary site-nav__desktop-cta" href="/contact">
          <MessageCircle size={17} aria-hidden="true" />
          Enquire Now
        </a>

        <button
          className="site-nav__menu-toggle"
          type="button"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((isOpen) => !isOpen)}
        >
          {isMenuOpen ? <X size={23} aria-hidden="true" /> : <Menu size={23} aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
