"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="nav-inner">
        <a href="#" className="logo">
          <div className="logo-icon">
            <Image src="/logo.png" alt="TJL Home Services" width={50} height={44} />
          </div>
          <div className="logo-text">
            <span className="brand">TJL</span>
            <span className="tagline">HOME SERVICES</span>
          </div>
        </a>
        <div className={`nav-links${menuOpen ? " open" : ""}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#why" onClick={() => setMenuOpen(false)}>Why Us</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Free Quote</a>
        </div>
        <button
          className="mobile-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
      </div>
    </nav>
  );
}
