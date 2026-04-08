export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-pattern" />
      <div className="hero-inner">
        <div className="hero-text">
          <div className="hero-badge">
            <span className="dot" /> Serving Residential &amp; Commercial
          </div>
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
              Get a Free Quote &rarr;
            </a>
            <a href="#services" className="btn btn-outline">
              View Services
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-card">
            <h3>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                <polyline points="22 4 12 14.01 9 11.01" />
              </svg>
              Why Clients Trust TJL
            </h3>
            <div className="stat-grid">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Jobs Done</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">4.9</span>
                <span className="stat-label">Star Rating</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">Eco</span>
                <span className="stat-label">Friendly</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
