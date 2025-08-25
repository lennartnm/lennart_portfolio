"use client";

import React from "react";

export default function Imprint() {
  return (
    <main style={{ padding: "3rem 1.5rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Imprint</h1>
      <p>
        <strong>Lennart Niehausmeier</strong>
        <br />
        Am Rabenecksiek 5
        <br />
        32139 Spenge
        <br />
        Germany
      </p>
      <p>
        <a href="mailto:Lennart.niehausmeier@web.de">
          Lennart.niehausmeier@web.de
        </a>
        <br />
        Tel: <a href="tel:+4915170084420">+49 151 70084420</a>
      </p>
    </main>
  );
}
