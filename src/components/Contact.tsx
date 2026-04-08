"use client";

import { FormEvent } from "react";
import FadeIn from "./FadeIn";
import { IconPhone, IconMail, IconMapPin } from "./Icons";

export default function Contact() {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 24 hours.");
  };

  return (
    <section className="contact" id="contact">
      <FadeIn>
        <div className="section-header">
          <span className="section-label">Get In Touch</span>
          <h2>Request Your Free Quote</h2>
          <p>
            Tell us about your project and we&apos;ll get back to you within 24
            hours with a detailed estimate.
          </p>
        </div>
      </FadeIn>
      <div className="contact-wrapper">
        <FadeIn>
          <div className="contact-info">
            <h3>Let&apos;s Talk About Your Project</h3>
            <p>
              Whether it&apos;s your home driveway or a commercial parking lot,
              we&apos;d love to hear from you. Reach out and let&apos;s get your
              property looking its best.
            </p>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IconPhone />
              </div>
              <div>
                <span>(978) 877-8645</span>
                <small>Mon-Sat, 7am - 7pm</small>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IconMail />
              </div>
              <div>
                <span>tyler@tjltraining.com</span>
                <small>We reply within 24 hours</small>
              </div>
            </div>
            <div className="contact-detail">
              <div className="contact-detail-icon">
                <IconMapPin />
              </div>
              <div>
                <span>Middlesex County / Southern NH</span>
                <small>Serving the local area</small>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn>
          <form className="contact-form" onSubmit={handleSubmit}>
            <h3>Quick Quote Form</h3>
            <div className="form-row">
              <div className="form-group">
                <label>First Name</label>
                <input type="text" placeholder="John" required />
              </div>
              <div className="form-group">
                <label>Last Name</label>
                <input type="text" placeholder="Smith" required />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" placeholder="(555) 000-0000" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" placeholder="you@email.com" required />
              </div>
            </div>
            <div className="form-group">
              <label>Service Needed</label>
              <select required defaultValue="">
                <option value="" disabled>
                  Select a service...
                </option>
                <option>House Washing</option>
                <option>Driveway &amp; Sidewalk</option>
                <option>Deck &amp; Fence Restoration</option>
                <option>Storefront &amp; Building</option>
                <option>Parking Lot &amp; Garage</option>
                <option>Gutter &amp; Roof Cleaning</option>
                <option>Other</option>
              </select>
            </div>
            <div className="form-group">
              <label>Project Details</label>
              <textarea placeholder="Tell us about the area, approximate size, and any specific concerns..." />
            </div>
            <button type="submit" className="btn-submit">
              Send Quote Request
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  );
}
