import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | TJL Home Services",
  description: "Privacy Policy for TJL Home Services.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back">
          &larr; Back to Home
        </Link>
        <h1>Privacy Policy</h1>
        <p className="legal-updated">Last updated: April 24, 2026</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>
            TJL Home Services (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects information you
            provide directly when you:
          </p>
          <ul>
            <li>Submit a quote request or contact form on our website</li>
            <li>Call or text our business phone number</li>
            <li>Subscribe to receive SMS or email communications</li>
            <li>Communicate with us via email or social media</li>
          </ul>
          <p>This information may include your name, phone number, email address, property address, and details about the services you are requesting.</p>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul>
            <li>Respond to your inquiries and provide quotes</li>
            <li>Schedule and perform pressure washing services</li>
            <li>Send appointment confirmations, reminders, and follow-ups</li>
            <li>Send promotional messages if you have opted in to receive them</li>
            <li>Improve our website and services</li>
          </ul>
        </section>

        <section>
          <h2>3. SMS/Text Messaging</h2>
          <p>
            If you opt in to receive text messages from TJL Home Services, you
            consent to receive recurring automated marketing and informational
            messages at the phone number you provide. Message frequency varies.
            Message and data rates may apply.
          </p>
          <p>
            You can opt out at any time by replying <strong>STOP</strong> to any
            message. Reply <strong>HELP</strong> for assistance. Opting out of
            SMS will not affect other communications.
          </p>
          <p>
            We will not share your phone number or SMS opt-in data with third
            parties for their marketing purposes. All the above categories
            exclude text messaging originator opt-in data and consent; this
            information will not be shared with any third parties. SMS consent
            is not a condition of purchase.
          </p>
        </section>

        <section>
          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, or rent your personal information to third
            parties. We may share information with trusted service providers who
            assist us in operating our business (e.g., SMS platforms, scheduling
            tools), but only to the extent necessary and under confidentiality
            obligations.
          </p>
        </section>

        <section>
          <h2>5. Data Security</h2>
          <p>
            We implement reasonable security measures to protect your personal
            information. However, no method of transmission over the internet or
            electronic storage is 100% secure.
          </p>
        </section>

        <section>
          <h2>6. Cookies and Analytics</h2>
          <p>
            Our website may use cookies and similar technologies to improve user
            experience and analyze site traffic. You can control cookie
            preferences through your browser settings.
          </p>
        </section>

        <section>
          <h2>7. Your Rights</h2>
          <p>You have the right to:</p>
          <ul>
            <li>Request access to the personal information we hold about you</li>
            <li>Request correction or deletion of your personal information</li>
            <li>Opt out of marketing communications at any time</li>
          </ul>
        </section>

        <section>
          <h2>8. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Changes will be
            posted on this page with an updated effective date.
          </p>
        </section>

        <section>
          <h2>9. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy, please contact us:
          </p>
          <ul>
            <li>Phone: (978) 877-8645</li>
            <li>Email: info@tjlhomeservices.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
