export default function Hero() {
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
            its original beauty. Fast response times, guaranteed results, and
            free estimates.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Get a Free Quote
            </a>
            <a href="tel:4708641229" className="btn btn-outline">
              Call (470) 864-1229
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
