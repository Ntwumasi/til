import Link from "next/link";

export const metadata = {
  title: "Terms and Conditions | TJL Home Services",
  description: "Terms and Conditions for TJL Home Services.",
};

export default function TermsAndConditions() {
  return (
    <main className="legal-page">
      <div className="legal-container">
        <Link href="/" className="legal-back">
          &larr; Back to Home
        </Link>
        <h1>Terms and Conditions</h1>
        <p className="legal-updated">Last updated: April 24, 2026</p>

        <section>
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing or using the TJL Home Services website or services, you
            agree to be bound by these Terms and Conditions. If you do not agree,
            please do not use our website or services.
          </p>
        </section>

        <section>
          <h2>2. Services</h2>
          <p>
            TJL Home Services provides professional pressure washing and
            exterior cleaning services in the greater Atlanta, GA metro area. All
            services are subject to availability and scheduling.
          </p>
        </section>

        <section>
          <h2>3. Quotes and Pricing</h2>
          <p>
            Quotes provided through our website or by phone are estimates and may
            be adjusted based on on-site evaluation. Final pricing will be
            confirmed before work begins. We reserve the right to modify pricing
            at any time.
          </p>
        </section>

        <section>
          <h2>4. SMS Communications</h2>
          <p>
            By providing your phone number and opting in, you consent to receive
            text messages from TJL Home Services, including promotional offers,
            appointment reminders, and service updates. Message frequency varies.
            Message and data rates may apply.
          </p>
          <p>
            You may opt out at any time by texting <strong>STOP</strong>. Text{" "}
            <strong>HELP</strong> for assistance. SMS consent is not required as
            a condition of purchasing any goods or services.
          </p>
        </section>

        <section>
          <h2>5. Scheduling and Cancellation</h2>
          <p>
            We ask that cancellations or rescheduling requests be made at least
            24 hours in advance. TJL Home Services reserves the right to
            reschedule due to weather or other circumstances beyond our control.
          </p>
        </section>

        <section>
          <h2>6. Liability</h2>
          <p>
            TJL Home Services is fully licensed and insured. While we take every
            precaution, we are not liable for pre-existing damage, normal wear
            and tear, or damage caused by conditions not visible prior to
            service. Any claims must be reported within 48 hours of service
            completion.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, and
            design, is the property of TJL Home Services and may not be
            reproduced without written permission.
          </p>
        </section>

        <section>
          <h2>8. Website Use</h2>
          <p>
            You agree to use this website for lawful purposes only. You may not
            use the site in any way that could damage, disable, or impair the
            site or interfere with other users.
          </p>
        </section>

        <section>
          <h2>9. Changes to Terms</h2>
          <p>
            We reserve the right to update these Terms and Conditions at any
            time. Continued use of our website or services after changes are
            posted constitutes acceptance of the revised terms.
          </p>
        </section>

        <section>
          <h2>10. Contact Us</h2>
          <p>
            If you have questions about these Terms and Conditions, please
            contact us:
          </p>
          <ul>
            <li>Phone: (470) 864-1229</li>
            <li>Email: tjlhomeservicesllc@gmail.com</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
