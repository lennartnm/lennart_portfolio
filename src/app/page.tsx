"use client";

import React from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

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
      {/* ===== Section 1: Hero ===== */}
      <section
        className="hero text-white"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <div className="heroInner">
          {/* Flowing keyword chips */}
          <div className="marqueeContainer" aria-hidden>
            <div className="marquee">
              {KEYWORDS.concat(KEYWORDS).map((kw, i) => (
                <span className="chip" key={`chip-${i}`}>
                  {kw}
                </span>
              ))}
            </div>
            <div className="fadeLeft" />
            <div className="fadeRight" />
          </div>

          {/* Headline */}
          <h1 className="name">
            Hi, I&apos;m <span className="italicName">Lennart</span>
          </h1>
          <p className="tagline">
            Entrepreneurial driven Digital Marketing Specialist
          </p>

          {/* Chatbox */}
          <div
            className="chatPlaceholder"
            role="region"
            aria-label="AI Chatbot placeholder"
          >
           <div className="chatProfile">
  <div className="avatarWrap">
    <Image
      src="/Profil6.png"      // Datei liegt in /public/Profil6.png
      alt="Lennart Avatar"
      fill                     // füllt den Wrapper
      sizes="56px"
      className="chatAvatar"
      priority
    />
  </div>
  <div className="chatMeta">
    <p className="chatName">Lennart Niehausmeier</p>
    <p className="chatTitle">Talk to my AI Clone to find out more about me.</p>
  </div>
</div>


            <div className="chatBody">
              <div className="message skeleton" />
              <div className="message skeleton" />
              <div className="message skeleton half" />
            </div>
            <div className="chatInput">
              <div className="inputFake" />
              <button className="sendFake" aria-hidden>
                Send
              </button>
            </div>
          </div>

          {/* Text unter Chat */}
          <div className="belowChat">
            <p>
              Platzhalter für Text. Hier kannst du Kontext, Angebot oder einen
              kurzen Elevator Pitch ergänzen.
            </p>
          </div>
        </div>

        {/* Black → White fade */}
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
            <p className="cvText">
              Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.
            </p>
          </article>

          <article className="cvItem">
            <header>
              <h3>Station 2</h3>
              <p className="cvMeta">Zeitraum • Rolle • Firma</p>
            </header>
            <p className="cvText">
              Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.
            </p>
          </article>

          <article className="cvItem">
            <header>
              <h3>Station 3</h3>
              <p className="cvMeta">Zeitraum • Rolle • Firma</p>
            </header>
            <p className="cvText">
              Kurzbeschreibung deiner Aufgaben, Erfolge und Verantwortlichkeiten.
            </p>
          </article>
        </div>
      </section>

      {/* ===== Section 3: CTA ===== */}
      <section
        className="cta text-white"
        style={{ backgroundColor: "#000000", color: "#ffffff" }}
      >
        <p className="ctaBig">
          <strong>Sounds like a match?</strong>
        </p>
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
          --bg-black: #000;
          --bg-white: #fff;
          --text-high: #f5f5f5;
          --text-mid: #cfcfcf;
          --text-dark: #111;
        }
        main {
          font-family: var(--font-inter), ui-sans-serif;
        }

        /* ===== Hero mit Sternen (an den Rändern) ===== */
        .hero {
          position: relative;
          background: #000;
          color: #fff;
          padding: 4rem 1.25rem 8rem;
          overflow: hidden;
          min-height: 100vh;
        }

        .hero::before,
        .hero::after {
          content: "";
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          background-repeat: no-repeat;
          background-size: cover;
          opacity: 0.9;
          -webkit-mask-image: radial-gradient(
            circle at 50% 50%,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 42%,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 1) 100%
          );
          mask-image: radial-gradient(
            circle at 50% 50%,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 0) 42%,
            rgba(0, 0, 0, 1) 60%,
            rgba(0, 0, 0, 1) 100%
          );
        }
        .hero::before {
          background-image: radial-gradient(
              1.8px 1.8px at 8% 18%,
              rgba(255, 255, 255, 0.95) 99%,
              transparent 100%
            ),
            radial-gradient(
              1.6px 1.6px at 12% 78%,
              rgba(255, 255, 255, 0.85) 99%,
              transparent 100%
            ),
            radial-gradient(
              1.8px 1.8px at 92% 22%,
              rgba(255, 255, 255, 0.9) 99%,
              transparent 100%
            ),
            radial-gradient(
              1.6px 1.6px at 88% 68%,
              rgba(255, 255, 255, 0.8) 99%,
              transparent 100%
            ),
            radial-gradient(
              1.4px 1.4px at 6% 60%,
              rgba(255, 255, 255, 0.75) 99%,
              transparent 100%
            ),
            radial-gradient(
              1.4px 1.4px at 94% 80%,
              rgba(255, 255, 255, 0.75) 99%,
              transparent 100%
            );
          opacity: 0.85;
          animation: starShimmer 10s ease-in-out infinite;
        }
        .hero::after {
          background-image: radial-gradient(
              1px 1px at 5% 25%,
              rgba(255, 255, 255, 0.7) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 15% 85%,
              rgba(255, 255, 255, 0.6) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 95% 30%,
              rgba(255, 255, 255, 0.7) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 85% 75%,
              rgba(255, 255, 255, 0.6) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 10% 50%,
              rgba(255, 255, 255, 0.55) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 90% 55%,
              rgba(255, 255, 255, 0.55) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 7% 90%,
              rgba(255, 255, 255, 0.5) 99%,
              transparent 100%
            ),
            radial-gradient(
              1px 1px at 93% 10%,
              rgba(255, 255, 255, 0.5) 99%,
              transparent 100%
            );
          opacity: 0.75;
          animation: starShimmer 14s ease-in-out infinite;
        }
        @keyframes starShimmer {
          0%,
          100% {
            opacity: 0.75;
          }
          50% {
            opacity: 0.6;
          }
        }

        .heroInner {
          position: relative;
          z-index: 1;
          max-width: 1120px;
          margin: 0 auto;
          text-align: center;
        }

        /* Marquee */
        .marqueeContainer {
          position: relative;
          margin: 0.75rem auto 0.5rem;
          max-width: 1120px;
          overflow: hidden;
          height: 44px;
        }
        .marquee {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          white-space: nowrap;
          animation: scroll 40s linear infinite;
        }
        @keyframes scroll {
          from {
            transform: translateX(0%);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .chip {
          display: inline-flex;
          align-items: center;
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          color: #ffffff;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.18),
            rgba(255, 255, 255, 0.06)
          );
          border: 1px solid rgba(255, 255, 255, 0.28);
          backdrop-filter: blur(6px);
        }
        .fadeLeft,
        .fadeRight {
          position: absolute;
          top: 0;
          width: 80px;
          height: 100%;
          pointer-events: none;
        }
        .fadeLeft {
          left: 0;
          background: linear-gradient(90deg, #000 0%, transparent 100%);
        }
        .fadeRight {
          right: 0;
          background: linear-gradient(270deg, #000 0%, transparent 100%);
        }

        /* Headline */
        .name {
          font-size: clamp(2rem, 5vw, 3rem);
          margin: 1rem 0 0.5rem;
          font-weight: 800;
        }
        .italicName {
          font-family: var(--font-playfair), serif;
          font-style: italic;
          font-weight: 600;
        }
        .tagline {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          color: var(--text-mid);
          margin-top: 0.25rem;
        }

        /* Chatbox mit solidem Hintergrund */
        .chatPlaceholder {
          position: relative;
          z-index: 2;
          margin: 2rem auto 1rem;
          max-width: 900px;
          background: #0b0b0b;
          border: 1px solid #1f1f1f;
          border-radius: 16px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          height: 460px;
          box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.03) inset;
        }
        .chatProfile {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.08);
        }
        .avatarWrap {
  position: relative;
  width: 56px;
  height: 56px;
  border-radius: 50%;     /* macht die Form rund */
  overflow: hidden;       /* schneidet das Bild sauber rund zu */
  flex-shrink: 0;         /* verhindert Zusammenquetschen in Flex-Row */
}

.chatAvatar {
  object-fit: cover;      /* füllt den Kreis ohne Verzerren */
}


        .chatMeta {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          text-align: left;
          gap: 0.15rem;
        }
        .chatName {
          margin: 0;
          font-weight: 700;
          font-size: 1rem;
        }
        .chatTitle {
          margin: 0;
          font-size: 0.875rem;
          color: var(--text-mid);
        }

        .chatBody {
          flex: 1;
          padding: 1rem;
          display: grid;
          gap: 0.75rem;
          align-content: start;
        }
        .message {
          height: 18px;
          border-radius: 8px;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.16),
            rgba(255, 255, 255, 0.08)
          );
          background-size: 200% 100%;
          animation: shimmer 2s linear infinite;
        }
        .message.half {
          width: 55%;
        }
        @keyframes shimmer {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        .chatInput {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .inputFake {
          flex: 1;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .sendFake {
          height: 44px;
          padding: 0 1rem;
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.14);
          background: rgba(255, 255, 255, 0.08);
          color: var(--text-high);
        }

        .belowChat {
          max-width: 900px;
          margin: 0.75rem auto 0;
          color: var(--text-mid);
          font-size: 0.975rem;
        }

        /* Fade unten */
        .fadeBottom {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          height: 140px;
          background: linear-gradient(
            180deg,
            rgba(0, 0, 0, 0) 0%,
            var(--bg-white) 100%
          );
        }

        /* ===== About ===== */
        .about {
          background: var(--bg-white);
          color: var(--text-dark);
          padding: 6rem 1.25rem;
        }
        .aboutTitle {
          max-width: 1120px;
          margin: 0 auto;
          font-size: clamp(1.75rem, 3.2vw, 2.25rem);
          font-weight: 800;
        }
        .aboutUnderline {
          width: 96px;
          height: 3px;
          background: #111;
          margin: 0.5rem auto 2rem calc((100vw - 1120px) / 2 + 1.25rem);
          border-radius: 2px;
        }
        .cv {
          max-width: 1120px;
          margin: 0 auto;
          display: grid;
          gap: 1rem;
        }
        @media (min-width: 900px) {
          .cv {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        .cvItem {
          border: 1px solid #e0e0e0;
          border-radius: 14px;
          padding: 1.25rem;
          background: #fff;
          box-shadow: 0 1px 2px rgba(0, 0, 0, 0.04);
        }
        .cvItem h3 {
          margin: 0;
          font-size: 1.125rem;
        }
        .cvMeta {
          margin: 0.25rem 0 0.75rem;
          color: #666;
          font-size: 0.9rem;
        }
        .cvText {
          margin: 0;
          line-height: 1.55;
        }

        /* ===== CTA ===== */
        .cta {
          background: #000;
          color: #fff;
          padding: 5rem 1.25rem;
          text-align: center;
        }
        .ctaBig {
          font-size: clamp(1.75rem, 3.2vw, 2.25rem);
          margin: 0 0 0.25rem;
        }
        .ctaSmall {
          color: var(--text-mid);
          margin: 0;
          font-size: 1.125rem;
        }

        /* ===== Footer ===== */
        .footer {
          background: #0f0f0f;
          color: #cfcfcf;
          padding: 2rem 1.25rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .footerNav {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
          margin-bottom: 0.5rem;
        }
        .footerNav a {
          color: #e7e7e7;
          text-decoration: none;
          border-bottom: 1px dashed rgba(255, 255, 255, 0.25);
        }
        .footNote {
          text-align: center;
          margin: 0;
          font-size: 0.9rem;
          color: #bdbdbd;
        }
      `}</style>
    </main>
  );
}
