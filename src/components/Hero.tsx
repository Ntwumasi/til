import { IconCheck } from "./Icons";

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
          <div className="hero-card">
            <h3>
              <IconCheck />
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
