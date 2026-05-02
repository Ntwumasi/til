import { IconShield, IconClock, IconStar, IconDollar } from "./Icons";

const items = [
  { icon: <IconShield />, label: "Fully Insured" },
  { icon: <IconClock />, label: "Fast Response Time" },
  { icon: <IconStar />, label: "Professional Service" },
  { icon: <IconDollar />, label: "Free Estimates" },
];

export default function TrustBar() {
  return (
    <div className="trust-bar">
      <div className="trust-inner">
        {items.map((item) => (
          <div className="trust-item" key={item.label}>
            <div className="trust-icon">{item.icon}</div>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
