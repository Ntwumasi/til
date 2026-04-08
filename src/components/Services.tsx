import FadeIn from "./FadeIn";
import {
  IconHome,
  IconRoad,
  IconFence,
  IconStorefront,
  IconParking,
  IconDroplet,
} from "./Icons";

const services = [
  {
    icon: <IconHome />,
    title: "House Washing",
    description: "Soft washing for vinyl, stucco, brick, and wood siding. We safely remove algae, mildew, and years of grime without damaging your exterior.",
    tag: "Residential",
    tagClass: "tag-residential",
  },
  {
    icon: <IconRoad />,
    title: "Driveway & Sidewalk",
    description: "High-pressure surface cleaning that removes oil stains, tire marks, mold, and discoloration from concrete and pavers.",
    tag: "Residential & Commercial",
    tagClass: "tag-both",
  },
  {
    icon: <IconFence />,
    title: "Deck & Fence Restoration",
    description: "Bring weathered wood and composite back to life. We clean, brighten, and prep surfaces for staining or sealing.",
    tag: "Residential",
    tagClass: "tag-residential",
  },
  {
    icon: <IconStorefront />,
    title: "Storefront & Building",
    description: "Keep your business looking professional with scheduled exterior cleaning. First impressions matter to your customers.",
    tag: "Commercial",
    tagClass: "tag-commercial",
  },
  {
    icon: <IconParking />,
    title: "Parking Lot & Garage",
    description: "Remove oil, grease, gum, and stains from parking areas. We service lots of all sizes with industrial-grade equipment.",
    tag: "Commercial",
    tagClass: "tag-commercial",
  },
  {
    icon: <IconDroplet />,
    title: "Gutter & Roof Cleaning",
    description: "Safe soft-wash roof treatment and gutter brightening. Prevent damage and extend the life of your roof system.",
    tag: "Residential & Commercial",
    tagClass: "tag-both",
  },
];

export default function Services() {
  return (
    <section className="services" id="services">
      <FadeIn>
        <div className="section-header">
          <span className="section-label">Our Services</span>
          <h2>Complete Exterior Cleaning Solutions</h2>
          <p>
            From residential homes to commercial properties, we have the
            equipment and expertise to handle any job.
          </p>
        </div>
      </FadeIn>
      <div className="services-grid">
        {services.map((s) => (
          <FadeIn key={s.title}>
            <div className="service-card">
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <span className={`service-tag ${s.tagClass}`}>{s.tag}</span>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
