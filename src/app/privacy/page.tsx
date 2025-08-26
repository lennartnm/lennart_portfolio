"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main className="container" role="main">
      <h1>Privacy Policy</h1>

      <p>
        <strong>Last updated:</strong>{" "}
        <time dateTime="2025-08-25">25 August 2025</time>
      </p>

      <p>
        This privacy policy explains how I ("we", "us", "our") process personal
        data when you visit this website and when you contact me. It applies to
        the website only, not to third-party sites that may be linked.
      </p>

      <section aria-labelledby="s1">
        <h2 id="s1">1. Controller</h2>
        <address>
          <p>
            <strong>Name:</strong> Lennart Niehausmeier
            <br />
            <strong>Address:</strong> Am Rabenecksiek 5, 32139 Spenge, Germany
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:lennart.niehausmeier@web.de">
              lennart.niehausmeier@web.de
            </a>
            <br />
            <strong>Phone:</strong>{" "}
            <a href="tel:+4915170084420" aria-label="Telefonnummer anrufen">
              +49&nbsp;151&nbsp;70084420
            </a>
          </p>
          <p>
            No data protection officer has been appointed, as the legal
            requirements are not met.
          </p>
        </address>
      </section>

      <section aria-labelledby="s2">
        <h2 id="s2">2. Summary of what we do</h2>
        <p>
          We host this site on Vercel (hosting/CDN). When you access the site,
          technical data (e.g., IP address, date/time, URL, user agent) are
          processed in server and edge logs for security and delivery of
          content.
        </p>
        <p>
          We use Google Analytics 4 (GA4) to measure reach and improve the site
          only with your consent. If you contact us by email or phone, we
          process your contact data to handle your request. If you use
          interactive AI features on the site (if provided), your inputs may be
          sent to OpenAI API to generate the requested output.
        </p>
      </section>

      <section aria-labelledby="s3">
        <h2 id="s3">3. Legal bases</h2>
        <p>
          Unless stated otherwise, we process personal data on the following
          legal bases under the GDPR (Art. 6(1)):
        </p>
        <ul>
          <li>
            Art. 6(1)(a) GDPR – Consent: for analytics and any non-essential
            cookies/technologies; for optional AI features.
          </li>
          <li>
            Art. 6(1)(b) GDPR – Contract/Pre-contract: if processing is
            necessary to answer enquiries or provide requested features.
          </li>
          <li>
            Art. 6(1)(f) GDPR – Legitimate interests: for security, fraud
            prevention, abuse detection, ensuring availability.
          </li>
        </ul>
        <p>
          For storing or accessing information on your device (e.g., cookies,
          local storage), we rely on § 25 TDDDG. Non-essential technologies are
          used only with your prior consent.
        </p>
      </section>

      <section aria-labelledby="s4">
        <h2 id="s4">4. Hosting and server logs (Vercel)</h2>
        <p>
          <strong>Provider:</strong> Vercel Inc., 340 S Lemon Ave #4133, Walnut,
          CA 91789, USA.
          <br />
          <strong>Purpose:</strong> delivery of the website via CDN/edge
          network, performance, reliability, security, troubleshooting.
          <br />
          <strong>Data categories:</strong> IP, date/time, URL/referrer, user
          agent, location (from IP), error identifiers.
          <br />
          <strong>Legal basis:</strong> Art. 6(1)(f) GDPR.
          <br />
          <strong>Retention:</strong> usually up to 30 days, longer if required
          for incidents.
          <br />
          <strong>Recipients:</strong> Vercel acts as our processor under a DPA.
          Data may be transferred outside the EEA with safeguards.
        </p>
      </section>

      <section aria-labelledby="s5">
        <h2 id="s5">5. Analytics (Google Analytics 4)</h2>
        <p>
          We use GA4 only if you consent via the consent banner. GA4 helps us
          understand how visitors use our site. GA4 does not log or store IP
          addresses; for EU users, IPs are dropped before logging.
        </p>
        <p>
          <strong>Provider:</strong> Google Ireland Ltd. / Google LLC.
          <br />
          <strong>Legal basis:</strong> Art. 6(1)(a) GDPR and § 25(1) TDDDG
          (consent).
          <br />
          <strong>Retention:</strong> usually 2 or 14 months.
          <br />
          <strong>Opt-out:</strong> you can withdraw consent anytime via [Cookie
          settings] in the footer.
        </p>
      </section>

      <section aria-labelledby="s6">
        <h2 id="s6">6. Contacting us (email/phone)</h2>
        <p>
          If you contact us, we process your message and contact details to
          handle your request.
          <br />
          <strong>Legal basis:</strong> Art. 6(1)(b) and/or Art. 6(1)(f) GDPR.
          <br />
          <strong>Retention:</strong> as long as needed plus statutory retention
          periods.
        </p>
      </section>

      <section aria-labelledby="s7">
        <h2 id="s7">7. AI features (OpenAI API)</h2>
        <p>
          If AI-powered features are offered, your inputs and outputs may be
          sent to the OpenAI API solely to provide the feature. Data is retained
          up to 30 days by OpenAI for abuse monitoring, then deleted.
        </p>
      </section>

      <section aria-labelledby="s8">
        <h2 id="s8">8. Recipients, international transfers &amp; safeguards</h2>
        <p>
          <strong>Recipients:</strong> Vercel (hosting), Google (Analytics),
          OpenAI (AI features).
          <br />
          Transfers outside the EEA are safeguarded via SCCs and/or EU–U.S. Data
          Privacy Framework.
        </p>
      </section>

      <section aria-labelledby="s9">
        <h2 id="s9">9. Cookies and similar technologies</h2>
        <p>
          Strictly necessary cookies are used without consent (§ 25(2) TDDDG).
          Analytics cookies require consent (§ 25(1)).
        </p>
      </section>

      <section aria-labelledby="s10">
        <h2 id="s10">10. Data retention</h2>
        <ul>
          <li>Server logs: typically up to 30 days</li>
          <li>Analytics: 2–14 months (per GA4 settings)</li>
          <li>Contact enquiries: until processed + statutory periods</li>
          <li>AI features: see Section 7</li>
        </ul>
      </section>

      <section aria-labelledby="s11">
        <h2 id="s11">11. Your rights</h2>
        <p>
          GDPR rights: access, rectification, erasure, restriction, portability,
          objection, withdraw consent. Contact:{" "}
          <a href="mailto:lennart.niehausmeier@web.de">
            lennart.niehausmeier@web.de
          </a>
        </p>
      </section>

      <section aria-labelledby="s12">
        <h2 id="s12">12. Right to lodge a complaint</h2>
        <p>
          <strong>Supervisory authority:</strong> LDI NRW, Kavalleriestraße 2–4,
          40213 Düsseldorf, Germany
          <br />
          <strong>Phone:</strong> +49 211 38424-0
          <br />
          <strong>Email:</strong> poststelle@ldi.nrw.de
          <br />
          <strong>Website:</strong>{" "}
          <a
            href="https://www.ldi.nrw.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            www.ldi.nrw.de
          </a>
        </p>
      </section>

      <section aria-labelledby="s13">
        <h2 id="s13">13. Security</h2>
        <p>
          We implement technical and organizational measures to protect your
          data, but no system is 100% secure.
        </p>
      </section>

      <section aria-labelledby="s14">
        <h2 id="s14">14. Children</h2>
        <p>
          Our website is aimed at adults. We do not knowingly collect data from
          children under 16.
        </p>
      </section>

      <section aria-labelledby="s15">
        <h2 id="s15">15. Changes to this policy</h2>
        <p>
          We may update this policy from time to time. The date at the top shows
          the latest version.
        </p>
      </section>

      <section aria-labelledby="s16">
        <h2 id="s16">16. How to contact us</h2>
        <address>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:lennart.niehausmeier@web.de">
              lennart.niehausmeier@web.de
            </a>
            <br />
            <strong>Address:</strong> Am Rabenecksiek 5, 32139 Spenge, Germany
          </p>
        </address>
      </section>

      <style jsx>{`
        .container {
          max-width: 720px; /* normale Lesebreite */
          margin: 0 auto;
          padding: 3rem 1.5rem;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial,
            sans-serif;
          line-height: 1.7;
        }

        h1 {
          margin: 0 0 1rem;
          font-size: clamp(1.75rem, 1.2rem + 1.5vw, 2.25rem);
        }

        h2 {
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          font-size: clamp(1.15rem, 1rem + 0.7vw, 1.5rem);
        }

        address {
          font-style: normal; /* neutralisiert Kursiv-Stil */
        }

        section + section {
          margin-top: 1.25rem;
        }

        ul,
        ol {
          padding-left: 1.25rem;
        }

        a {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
