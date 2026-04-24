import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-brand">
          <div
            className="logo-icon"
            style={{
              width: 48,
              height: 40,
              background: "#fff",
              borderRadius: 8,
              padding: 3,
            }}
          >
            <Image src="/logo.png" alt="TJL Home Services" width={42} height={34} />
          </div>
          <span>TJL Home Services</span>
        </div>
        <div className="footer-links">
          <a href="#home">Home</a>
          <a href="#services">Services</a>
          <a href="#why">Why Us</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-links">
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-and-conditions">Terms &amp; Conditions</Link>
        </div>
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} TJL Home Services. All rights
          reserved. Fully licensed and insured.
        </div>
      </div>
    </footer>
  );
}
