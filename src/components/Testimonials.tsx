import FadeIn from "./FadeIn";
import { IconStar } from "./Icons";

const testimonials = [
  {
    quote: "Our driveway looked brand new after TJL finished. They were on time, professional, and the price was exactly what they quoted. Highly recommend!",
    author: "Sarah M.",
    role: "Homeowner",
  },
  {
    quote: "We use TJL for monthly storefront cleaning. Our building always looks spotless and our customers notice the difference. Great commercial service.",
    author: "James R.",
    role: "Business Owner",
  },
  {
    quote: "I love that they use eco-friendly products. My deck looks incredible and I didn't have to worry about my garden or pets. Will definitely use again!",
    author: "Linda T.",
    role: "Homeowner",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials">
      <FadeIn>
        <div className="section-header">
          <span className="section-label">Reviews</span>
          <h2>What Our Customers Say</h2>
        </div>
      </FadeIn>
      <div className="testimonials-grid">
        {testimonials.map((t) => (
          <FadeIn key={t.author}>
            <div className="testimonial-card">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <IconStar key={i} />
                ))}
              </div>
              <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
              <div className="testimonial-footer">
                <div className="testimonial-avatar">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-author">{t.author}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
