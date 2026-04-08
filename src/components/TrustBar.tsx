import { IconShield, IconLeaf, IconClock, IconDollar } from "./Icons";

const items = [
  { icon: <IconShield />, label: "Fully Insured" },
  { icon: <IconLeaf />, label: "Eco-Friendly Products" },
  { icon: <IconClock />, label: "Same-Week Scheduling" },
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
