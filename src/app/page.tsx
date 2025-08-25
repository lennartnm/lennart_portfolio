// app/page.tsx - Next.js (app router) TypeScript page for Vercel
// Assumes Next.js 13+ with the /app directory enabled.
// Fonts: Inter for base, Playfair Display (italic) for the name.
// No external CSS framework required; styles are included via <style jsx>.

import React from "react";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], style: ["italic"], variable: "--font-playfair" });

const KEYWORDS = [
  "Digital Marketing",
  "Growth Marketing",
  "Demand Generation",
  "Marketing Automation",
  "Performance Marketing",
  "SEO",
  "SEM",
  "Paid Ads",
  "Partnerships",
  "Affiliate Marketing",
  "Artificial Intelligence",
];

export default function Home() {
  return (
    <main className={`${inter.variable} ${playfair.variable}`}>
      {/* ===== Hero / Section 1 ===== */}
      <section className="hero">
        {/* Floating keyword chips (endless flow) */}
        <div className="marqueeWrap" aria-hidden>
          <div className="marquee">
            {KEYWORDS.concat(KEYWORDS).map((kw, i) => (
              <span className="chip" key={`chip-${i}`}>{kw}</span>
            ))}
          </div>
        </div>

        {/* Headline */}
        <div className="heroInner">
          <p className="intro">Hi, I&apos;m</p>
          <h1 className="name">
            <span className="italicName">Lennart</span>
          </h1>
          <p className="tagline">Entrepreneurial driven Digital Marketing Specialist</p>

          {/* Chatbox placeholder */}
          <div className="chatPlaceholder" role="region" aria-label="AI Chatbot placeholder">
            <div className="chatHeader">AI Chatbot (coming soon)</div>
            <div className="chatBody">
              <div className="message skeleton" />
              <div className="message skeleton" />
              <div className="message skeleton half" />
            </div>
            <div className="chatInput">
              <div className="inputFake" />
              <button className="sendFake" aria-hidden>Send</button>
            </div>
          </div>

          {/* Text placeholder below chat */}
          <div className="belowChat">
            <p>
              Platzhalter für Text. Hier kannst du Kontext, Angebot oder einen kurzen Elevator Pitch
              ergänzen. Dieser Bereich skaliert mit dem Inhalt.
            </p>
          </div>
        </div>

        {/* Fade from black to white at the end of first section */}
        <div className="fadeBottom" aria-hidden />
      </section>

      {/* ===== Section 2: About me ===== */}
      <section className="about">
        <h2 className="aboutTitle">About me</h2>
        <div className="aboutUnderline" />

        <div className="cv">
          <article className="cvItem">
            <header>
              <h3>Station 1</h3>
              <p className="cvMeta">Zeitraum • Rolle • Firma</p>
            </header>
            <p className="cvText">Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.</p>
          </article>
          <article className="cvItem">
            <header>
              <h3>Station 2</h3>
              <p className="cvMeta">Zeitraum • Rolle • Firma</p>
            </header>
            <p className="cvText">Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.</p>
          </article>
          <article className="cvItem">
            <header>
              <h3>Station 3</h3>
              <p className="cvMeta">Zeitraum • Rolle • Firma</p>
            </header>
            <p className="cvText">Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.</p>
          </article>
        </div>
      </section>

      {/* ===== Section 3 ===== */}
      <section className="cta">
        <p className="ctaBig"><strong>Sounds like a match?</strong></p>
        <p className="ctaSmall">Let&apos;s have a first talk</p>
      </section>

      {/* ===== Section 4: Footer ===== */}
      <footer className="footer">
        <nav className="footerNav">
          <a href="#imprint">Imprint</a>
          <a href="#agb">AGB</a>
          <a href="#datenschutz">Datenschutz</a>
        </nav>
        <p className="footNote">© {new Date().getFullYear()} Lennart</p>
      </footer>

      <style jsx>{`
        :root {
          --bg-black: #0b0b0b;
          --bg-white: #ffffff;
          --text-high: #f5f5f5;
          --text-mid: #cfcfcf;
          --text-dark: #111111;
          --chip-bg: rgba(255,255,255,0.08);
          --chip-br: rgba(255,255,255,0.22);
          --border: rgba(17,17,17,0.12);
        }
        main { font-family: var(--font-inter), ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; }

        /* ===== Section 1 (Hero) ===== */
        .hero {
          position: relative;
          background: var(--bg-black);
          color: var(--text-high);
          padding: 4rem 1.25rem 8rem; /* extra bottom for fade */
          overflow: hidden;
        }
        .heroInner { max-width: 1120px; margin: 0 auto; text-align: center; }

        .marqueeWrap {
          position: absolute; inset: 0 auto auto 0; top: 1rem; width: 100%; height: 44px;
          overflow: hidden; pointer-events: none;
        }
        .marquee {
          display: inline-flex; align-items: center; gap: 0.5rem;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
          will-change: transform;
        }
        @keyframes scroll { from { transform: translateX(-50%);} to { transform: translateX(0%);} }
        .chip { display: inline-flex; align-items: center; padding: 6px 10px; border-radius: 999px; font-size: 12px; letter-spacing: 0.2px; background: var(--chip-bg); border: 1px solid var(--chip-br); backdrop-filter: blur(2px); }

        .intro { margin-top: 5rem; font-size: 1.125rem; color: var(--text-mid); }
        .name { font-size: clamp(3rem, 8vw, 6rem); margin: 0.25rem 0 0.5rem; font-weight: 800; letter-spacing: -0.02em; }
        .italicName { font-family: var(--font-playfair), Georgia, "Times New Roman", serif; font-style: italic; font-weight: 600; }
        .tagline { font-size: clamp(1rem, 2.5vw, 1.25rem); color: var(--text-mid); margin-top: 0.25rem; }

        .chatPlaceholder {
          margin: 2rem auto 1rem; max-width: 900px; background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.12); border-radius: 16px; overflow: hidden;
          display: flex; flex-direction: column; height: 420px;
        }
        .chatHeader { padding: 0.75rem 1rem; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 0.95rem; color: var(--text-mid); text-align: left; }
        .chatBody { flex: 1; padding: 1rem; display: grid; gap: 0.75rem; align-content: start; }
        .message { height: 18px; border-radius: 8px; background: linear-gradient(90deg, rgba(255,255,255,0.08), rgba(255,255,255,0.16), rgba(255,255,255,0.08)); background-size: 200% 100%; animation: shimmer 2s linear infinite; }
        .message.half { width: 55%; }
        @keyframes shimmer { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }
        .chatInput { display: flex; gap: 0.5rem; align-items: center; padding: 0.75rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .inputFake { flex: 1; height: 44px; border-radius: 10px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.14); }
        .sendFake { height: 44px; padding: 0 1rem; border-radius: 10px; border: 1px solid rgba(255,255,255,0.14); background: rgba(255,255,255,0.08); color: var(--text-high); }

        .belowChat { max-width: 900px; margin: 0.75rem auto 0; color: var(--text-mid); font-size: 0.975rem; }

        .fadeBottom {
          position: absolute; left: 0; right: 0; bottom: 0; height: 140px;
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, var(--bg-white) 100%);
          pointer-events: none;
        }

        /* ===== Section 2 (About) ===== */
        .about { background: var(--bg-white); color: var(--text-dark); padding: 6rem 1.25rem; }
        .aboutTitle { max-width: 1120px; margin: 0 auto; font-size: clamp(1.75rem, 3.2vw, 2.25rem); font-weight: 800; letter-spacing: -0.02em; }
        .aboutUnderline { width: 96px; height: 3px; background: #111; margin: 0.5rem auto 2rem  calc((100vw - 1120px)/2 + 1.25rem); border-radius: 2px; }

        .cv { max-width: 1120px; margin: 0 auto; display: grid; grid-template-columns: repeat(1, minmax(0, 1fr)); gap: 1rem; }
        @media (min-width: 900px) { .cv { grid-template-columns: repeat(3, 1fr); } }
        .cvItem { border: 1px solid var(--border); border-radius: 14px; padding: 1.25rem; background: #fff; box-shadow: 0 1px 2px rgba(0,0,0,0.04); }
        .cvItem h3 { margin: 0; font-size: 1.125rem; }
        .cvMeta { margin: 0.25rem 0 0.75rem; color: #666; font-size: 0.9rem; }
        .cvText { margin: 0; line-height: 1.55; }

        /* ===== Section 3 (CTA) ===== */
        .cta { background: var(--bg-black); color: var(--text-high); padding: 5rem 1.25rem; text-align: center; }
        .ctaBig { font-size: clamp(1.75rem, 3.2vw, 2.25rem); margin: 0 0 0.25rem; }
        .ctaSmall { color: var(--text-mid); margin: 0; font-size: 1.125rem; }

        /* ===== Footer ===== */
        .footer { background: #0f0f0f; color: #cfcfcf; padding: 2rem 1.25rem; border-top: 1px solid rgba(255,255,255,0.08); }
        .footerNav { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; margin-bottom: 0.5rem; }
        .footerNav a { color: #e7e7e7; text-decoration: none; border-bottom: 1px dashed rgba(255,255,255,0.25); }
        .footNote { text-align: center; margin: 0; font-size: 0.9rem; color: #bdbdbd; }
      `}</style>
    </main>
  );
}
