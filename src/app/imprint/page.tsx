"use client";

import React from "react";

export default function Imprint() {
  return (
    <main className="container" role="main">
      <h1>Imprint</h1>

      <address>
        <p>
          <strong>Lennart Niehausmeier</strong>
        </p>
        <p>
          Am Rabenecksiek 5<br />
          32139 Spenge<br />
          Germany
        </p>
        <p>
          <a href="mailto:Lennart.niehausmeier@web.de">
            Lennart.niehausmeier@web.de
          </a>
          <br />
          Tel.:{" "}
          <a href="tel:+4915170084420" aria-label="Telefonnummer anrufen">
            +49&nbsp;151&nbsp;70084420
          </a>
        </p>
      </address>

      <style jsx>{`
        .container {
          max-width: 720px; /* normale Lesebreite */
          margin: 0 auto;
          padding: 3rem 1.5rem;
          font-family: system-ui, -apple-system, Segoe UI, Roboto, Arial,
            sans-serif;
          line-height: 1.6;
        }

        h1 {
          margin: 0 0 1rem;
          font-size: clamp(1.75rem, 1.2rem + 1.5vw, 2.25rem);
        }

        address {
          font-style: normal; /* Standardmäßig kursiv – hier neutralisiert */
        }

        a {
          text-decoration: underline;
        }
      `}</style>
    </main>
  );
}
