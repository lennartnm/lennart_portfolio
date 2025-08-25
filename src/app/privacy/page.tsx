"use client";

import React from "react";

export default function PrivacyPolicy() {
  return (
    <main style={{ padding: "3rem 1.5rem", fontFamily: "sans-serif", lineHeight: 1.6 }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Privacy Policy</h1>
      <p><strong>Last updated:</strong> 25 August 2025</p>

      <p>
        This privacy policy explains how I ("we", "us", "our") process personal
        data when you visit this website and when you contact me. It applies to
        the website only, not to third-party sites that may be linked.
      </p>

      <h2>1. Controller</h2>
      <p>
        Name: Lennart Niehausmeier<br />
        Address: Am Rabenecksiek 5, 32139 Spenge, Germany<br />
        Email: <a href="mailto:lennart.niehausmeier@web.de">lennart.niehausmeier@web.de</a><br />
        Phone: <a href="tel:+4915170084420">+49 151 70084420</a><br />
        No data protection officer has been appointed, as the legal requirements are not met.
      </p>

      <h2>2. Summary of what we do</h2>
      <p>
        We host this site on Vercel (hosting/CDN). When you access the site, technical data
        (e.g., IP address, date/time, URL, user agent) are processed in server and edge logs
        for security and delivery of content.
      </p>
      <p>
        We use Google Analytics 4 (GA4) to measure reach and improve the site only with your consent.
        If you contact us by email or phone, we process your contact data to handle your request.
        If you use interactive AI features on the site (if provided), your inputs may be sent to
        OpenAI API to generate the requested output.
      </p>

      <h2>3. Legal bases</h2>
      <p>
        Unless stated otherwise, we process personal data on the following legal bases under the GDPR (Art. 6(1)):
      </p>
      <ul>
        <li>Art. 6(1)(a) GDPR – Consent: for analytics and any non-essential cookies/technologies; for optional AI features.</li>
        <li>Art. 6(1)(b) GDPR – Contract/Pre-contract: if processing is necessary to answer enquiries or provide requested features.</li>
        <li>Art. 6(1)(f) GDPR – Legitimate interests: for security, fraud prevention, abuse detection, ensuring availability.</li>
      </ul>
      <p>
        For storing or accessing information on your device (e.g., cookies, local storage), we rely on § 25 TDDDG.
        Non-essential technologies are used only with your prior consent.
      </p>

      <h2>4. Hosting and server logs (Vercel)</h2>
      <p>
        Provider: Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA.<br />
        Purpose: delivery of the website via CDN/edge network, performance, reliability, security, troubleshooting.<br />
        Data categories: IP, date/time, URL/referrer, user agent, location (from IP), error identifiers.<br />
        Legal basis: Art. 6(1)(f) GDPR.<br />
        Retention: usually up to 30 days, longer if required for incidents.<br />
        Recipients: Vercel acts as our processor under a DPA. Data may be transferred outside the EEA with safeguards.
      </p>

      <h2>5. Analytics (Google Analytics 4)</h2>
      <p>
        We use GA4 only if you consent via the consent banner. GA4 helps us understand how visitors use our site.
        GA4 does not log or store IP addresses; for EU users, IPs are dropped before logging.
      </p>
      <p>
        Provider: Google Ireland Ltd. / Google LLC.<br />
        Legal basis: Art. 6(1)(a) GDPR and § 25(1) TDDDG (consent).<br />
        Retention: usually 2 or 14 months.<br />
        Opt-out: you can withdraw consent anytime via [Cookie settings] in the footer.
      </p>

      <h2>6. Contacting us (email/phone)</h2>
      <p>
        If you contact us, we process your message and contact details to handle your request.<br />
        Legal basis: Art. 6(1)(b) and/or Art. 6(1)(f) GDPR.<br />
        Retention: as long as needed plus statutory retention periods.
      </p>

      <h2>7. AI features (OpenAI API)</h2>
      <p>
        If AI-powered features are offered, your inputs and outputs may be sent to the OpenAI API solely to provide the feature.
        Data is retained up to 30 days by OpenAI for abuse monitoring, then deleted.
      </p>

      <h2>8. Recipients, international transfers & safeguards</h2>
      <p>
        Recipients: Vercel (hosting), Google (Analytics), OpenAI (AI features).<br />
        Transfers outside the EEA are safeguarded via SCCs and/or EU–U.S. Data Privacy Framework.
      </p>

      <h2>9. Cookies and similar technologies</h2>
      <p>
        Strictly necessary cookies are used without consent (§ 25(2) TDDDG). Analytics cookies require consent (§ 25(1)).
      </p>

      <h2>10. Data retention</h2>
      <ul>
        <li>Server logs: typically up to 30 days</li>
        <li>Analytics: 2–14 months (per GA4 settings)</li>
        <li>Contact enquiries: until processed + statutory periods</li>
        <li>AI features: see Section 7</li>
      </ul>

      <h2>11. Your rights</h2>
      <p>
        GDPR rights: access, rectification, erasure, restriction, portability, objection, withdraw consent.
        Contact: <a href="mailto:lennart.niehausmeier@web.de">lennart.niehausmeier@web.de</a>
      </p>

      <h2>12. Right to lodge a complaint</h2>
      <p>
        Supervisory authority: LDI NRW, Kavalleriestraße 2–4, 40213 Düsseldorf, Germany<br />
        Phone: +49 211 38424-0<br />
        Email: poststelle@ldi.nrw.de<br />
        Website: <a href="https://www.ldi.nrw.de/" target="_blank">www.ldi.nrw.de</a>
      </p>

      <h2>13. Security</h2>
      <p>
        We implement technical and organizational measures to protect your data, but no system is 100% secure.
      </p>

      <h2>14. Children</h2>
      <p>
        Our website is aimed at adults. We do not knowingly collect data from children under 16.
      </p>

      <h2>15. Changes to this policy</h2>
      <p>
        We may update this policy from time to time. The date at the top shows the latest version.
      </p>

      <h2>16. How to contact us</h2>
      <p>
        Email: <a href="mailto:lennart.niehausmeier@web.de">lennart.niehausmeier@web.de</a><br />
        Address: Am Rabenecksiek 5, 32139 Spenge, Germany
      </p>
    </main>
  );
}
