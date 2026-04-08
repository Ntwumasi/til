import FadeIn from "./FadeIn";

const reasons = [
  {
    num: 1,
    title: "Eco-Friendly Approach",
    description: "Biodegradable cleaning solutions that are safe for your landscaping, pets, and the environment.",
  },
  {
    num: 2,
    title: "Transparent Pricing",
    description: "No hidden fees or surprise charges. Every quote is detailed and final before we start work.",
  },
  {
    num: 3,
    title: "Satisfaction Guaranteed",
    description: "If you're not happy, we come back and make it right. No questions asked.",
  },
  {
    num: 4,
    title: "Professional Equipment",
    description: "Commercial-grade machines and surface cleaners for faster, more consistent results.",
  },
];

export default function WhyUs() {
  return (
    <section className="why-us" id="why">
      <FadeIn>
        <div className="section-header">
          <span className="section-label">Why TJL</span>
          <h2>What Sets Us Apart</h2>
          <p>
            We&apos;re not just another pressure washing company. Here&apos;s why
            our clients keep coming back.
          </p>
        </div>
      </FadeIn>
      <div className="why-grid">
        {reasons.map((r) => (
          <FadeIn key={r.num}>
            <div className="why-card">
              <div className="why-num">{r.num}</div>
              <div>
                <h4>{r.title}</h4>
                <p>{r.description}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
