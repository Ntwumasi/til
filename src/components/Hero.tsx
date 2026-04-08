"use client";

import { useEffect, useRef, useState } from "react";
import { IconCheck } from "./Icons";

const stats = [
  { end: 500, suffix: "+", label: "Jobs Done" },
  { end: 4.9, suffix: "", label: "Star Rating", decimals: 1 },
  { end: 100, suffix: "%", label: "Satisfaction" },
  { end: 0, suffix: "", label: "Friendly", text: "Eco" },
];

function useCountUp(end: number, duration: number, started: boolean, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!started) return;
    const startTime = performance.now();
    let raf: number;

    function tick(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(parseFloat((eased * end).toFixed(decimals)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    }

    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [end, duration, started, decimals]);

  return value;
}

function AnimatedStat({ end, suffix, label, decimals = 0, text, started }: {
  end: number; suffix: string; label: string; decimals?: number; text?: string; started: boolean;
}) {
  const count = useCountUp(end, 2000, started, decimals);

  return (
    <div className="stat-item">
      <span className="stat-number">
        {text || (decimals ? count.toFixed(decimals) : Math.floor(count))}{suffix}
      </span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

export default function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-pattern" />
      <div className="hero-inner">
        <div className="hero-text">
          <p className="hero-eyebrow">Residential &amp; Commercial Pressure Washing</p>
          <h1>
            Make Your Property <span className="highlight">Shine Like New</span>
          </h1>
          <p>
            Professional pressure washing that restores your home or business to
            its original beauty. Eco-friendly cleaning solutions, guaranteed
            results, and free estimates.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Quote
            </a>
            <a href="tel:9788778645" className="btn btn-outline">
              Call (978) 877-8645
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card" ref={cardRef}>
            <h3>
              <IconCheck />
              Why Clients Trust TJL
            </h3>
            <div className="stat-grid">
              {stats.map((s) => (
                <AnimatedStat key={s.label} {...s} started={started} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
