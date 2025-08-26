"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  style: ["italic"],
  variable: "--font-playfair",
});

type Msg = { role: "user" | "assistant"; content: string };

const KEYWORDS = [
  "Digital Marketing",
  "Growth Marketing",
  "Demand Generation",
  "Marketing Automation",
  "Performance Marketing",
  "Tracking",
  "Search Engine Optimization",
  "AI Automation",
  "Artificial Intelligence",
  "Paid Ads",
  "HTML / CSS",
  "Affiliate Marketing",
  "Paid Search Ads",
  "AI Search Optimization",
  "Digital Strategy",
  "Full Funnel Optimization",
];

export default function Home() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Hi, this is my AI clone. Feel free to ask me anything about my previous experience, tools and software I've worked with, or even my personality type.",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // ---> Auto-Scroll an das Ende bei neuer Antwort
  const chatBodyRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const el = chatBodyRef.current;
    if (el) {
      el.scrollTo({ top: el.scrollHeight, behavior: "smooth" });
    }
  }, [messages, loading]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    const prompt = input.trim();
    if (!prompt) return;

    const next = [...messages, { role: "user", content: prompt } as Msg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next.slice(-15) }),
      });
      const json = await res.json();

      if (!res.ok) {
        setMessages([
          ...next,
          {
            role: "assistant",
            content:
              (json?.message ? `Fehler: ${json.message}` : json?.error) ||
              "Server-Fehler. Vercel Function Logs prüfen.",
          },
        ]);
        setLoading(false);
        return;
      }

      const reply: string = (json?.text || "").trim();
      setMessages([
        ...next,
        {
          role: "assistant",
          content: reply || "Ich konnte diesen Moment keinen Text extrahieren.",
        } as Msg,
      ]);
    } catch (err: any) {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "Netzwerk-/Serverfehler. Bitte Logs prüfen und OPENAI_API_KEY verifizieren.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // ===== Prompt Ideas (content) =====
  const PROMPT_QUESTIONS = [
    "Can you walk me through your professional journey so far?",
    "What made you start your own e-commerce business at such a young age?",
    "Why did you decide to stop running your e-commerce brands?",
    "What exactly did you do at PUMA in your role as a Global Digital Marketing team member?",
    "What kind of clients and projects are you currently handling as a Digital Marketing Consultant?",
    "What platforms and tools are you most experienced with?",
    "Can you give an example of a campaign you’ve scaled successfully?",
    "What are your strengths as a digital marketing generalist?",
    "What makes your profile unique compared to other candidates?",
    "Why do you want to relocate to Amsterdam?",
    "Are you open to transitioning from freelance consulting to a permanent role again?",
  ];

  // ===== Prompt Ideas (carousel logic, smooth mobile) =====
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const isTouchingRef = useRef(false);
  const snapTimeoutRef = useRef<number | null>(null);

  function scrollPrompts(dir: number) {
    const el = carouselRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
    const cardWidth = first ? first.offsetWidth + gap : 300;
    el.scrollBy({ left: dir * cardWidth, behavior: "smooth" });

    // loop illusion
    const atRightEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 5;
    const atLeftEnd = el.scrollLeft <= 5;
    if (dir === 1 && atRightEnd) el.scrollTo({ left: 0, behavior: "smooth" });
    if (dir === -1 && atLeftEnd)
      el.scrollTo({ left: el.scrollWidth, behavior: "smooth" });
  }

  // Auto-snap to nearest card after user scroll stops (mobile-friendly)
  function onUserScroll() {
    const el = carouselRef.current;
    if (!el) return;
    if (snapTimeoutRef.current) window.clearTimeout(snapTimeoutRef.current);
    snapTimeoutRef.current = window.setTimeout(() => {
      if (isTouchingRef.current) return; // don't snap mid-drag
      const first = el.firstElementChild as HTMLElement | null;
      if (!first) return;
      const gap = parseFloat(getComputedStyle(el).columnGap || "16") || 16;
      const cardWidth = first.offsetWidth + gap;
      const index = Math.round(el.scrollLeft / cardWidth);
      const target = index * cardWidth;
      el.scrollTo({ left: target, behavior: "smooth" });
    }, 90);
  }

  // Track touch state to avoid snapping during finger drag, then snap after lift
  useEffect(() => {
    const el = carouselRef.current;
    if (!el) return;
    const onTouchStart = () => (isTouchingRef.current = true);
    const onTouchEnd = () => {
      isTouchingRef.current = false;
      onUserScroll(); // final snap
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
            Hi, I&apos;m <span className="italicName">Lennart.</span>
          </h1>
          <p className="tagline">
            Entrepreneurial driven Digital Growth Specialist looking for the next
            opportunity.
          </p>

          {/* Chatbox (funktional) */}
          <div className="chatPlaceholder" role="region" aria-label="AI Chatbot">
            <div className="chatProfile">
              <div className="avatarWrap">
                <Image
                  src="/Profil6.png"
                  alt="Lennart Avatar"
                  fill
                  sizes="56px"
                  className="chatAvatar"
                  priority
                />
              </div>
              <div className="chatMeta">
                <p className="chatName">Lennart Niehausmeier</p>
                <p className="chatTitle">
                  Talk to my AI Clone to find out more about me.
                </p>
              </div>
            </div>

            <div className="chatBody" ref={chatBodyRef}>
              {messages.map((m, i) => (
                <div key={i} className={`bubble ${m.role}`}>
                  {m.content}
                </div>
              ))}
              {loading && <div className="bubble assistant">…</div>}
            </div>

            <form className="chatInput" onSubmit={onSubmit}>
              <input
                className="inputReal"
                placeholder="Ask me a question ..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                disabled={loading}
                aria-label="Nachricht eingeben"
              />
              <button
                className="sendBtn"
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Send message"
              >
                Send
              </button>
            </form>
          </div>

          {/* Text unter Chat */}
          <div className="belowChat">
            <p>
              Worth to talk in person? Feel free to contact me for a first chat
              via <u>lennart.niehausmeier@web.de</u>
            </p>
          </div>
        </div>

        {/* Black → White fade */}
        <div className="fadeBottom" aria-hidden />
      </section>

      {/* ===== Section 3.5: Prompt Ideas Carousel ===== */}
      <section className="prompts" aria-label="Prompt ideas for the chat">
        <div className="promptsInner">
          <div className="promptsHeader">
            <h2 className="promptsTitle">Some ideas to ask me …</h2>
            <div className="promptsUnderline" />
          </div>

          <div className="promptsContent">
            <button
              className="arrow left"
              aria-label="Scroll prompt cards left"
              onClick={() => scrollPrompts(-1)}
              type="button"
            >
              ‹
            </button>

            <div className="carouselWrap">
              <div className="edgeFade left" aria-hidden />
              <div className="carousel" ref={carouselRef} onScroll={onUserScroll}>
                {PROMPT_QUESTIONS.concat(PROMPT_QUESTIONS).map((q, i) => (
                  <div
                    className="promptCard"
                    key={`prompt-${i}`}
                    role="button"
                    tabIndex={0}
                  >
                    {q}
                  </div>
                ))}
              </div>
              <div className="edgeFade right" aria-hidden />
            </div>

            <button
              className="arrow right"
              aria-label="Scroll prompt cards right"
              onClick={() => scrollPrompts(1)}
              type="button"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      {/* ===== Section 4: Footer ===== */}
      <footer className="footer">
        <nav className="footerNav">
          <a href="/imprint">Legal Notice</a>

          <a href="/privacy">Data Privacy</a>
        </nav>
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

        /* ===== Hero mit Sternen an den Rändern ===== */
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

        /* Chatbox */
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
          border-radius: 50%;
          overflow: hidden;
          flex-shrink: 0;
          border: 2px solid rgba(255, 255, 255, 0.2);
        }
        .chatAvatar {
          object-fit: cover;
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
          gap: 0.5rem;
          align-content: start;
          overflow-y: auto;
          scroll-behavior: smooth;
        }
        .bubble {
          max-width: 80%;
          padding: 10px 12px;
          border-radius: 12px;
          line-height: 1.35;
          word-wrap: break-word;
          white-space: pre-wrap;
          font-size: 0.95rem;
          text-align: left;
        }
        .bubble.user {
          justify-self: end;
          background: rgba(255, 255, 255, 0.08);
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .bubble.assistant {
          justify-self: start;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .chatInput {
          display: flex;
          gap: 0.5rem;
          align-items: center;
          padding: 0.75rem;
          border-top: 1px solid rgba(255, 255, 255, 0.08);
        }
        .inputReal {
          flex: 1;
          height: 44px;
          border-radius: 10px;
          background: rgba(255, 255, 255, 0.06);
          border: 1px solid rgba(255, 255, 255, 0.14);
          padding: 0 12px;
          color: #fff;
        }
        .inputReal::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }
        .sendBtn {
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

        /* ===== Prompt Ideas (mobile-smooth) ===== */
        .prompts {
          background: #0b0b0b; /* no border */
          color: #ffffff;
          padding: 3rem 1.25rem 4rem;
        }
        .promptsInner {
          max-width: 1120px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }
        .promptsHeader {
          text-align: center;
        }
        .promptsTitle {
          font-size: clamp(1.5rem, 2.8vw, 1.9rem);
          font-weight: 700;
          margin: 0 0 0.5rem;
        }
        .promptsUnderline {
          height: 3px;
          width: 100%;
          background: #ffffff;
          opacity: 0.2;
          border-radius: 2px;
        }

        .promptsContent {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 0.5rem;
        }

        .carouselWrap {
          position: relative;
        }

        .carousel {
          display: grid;
          grid-auto-flow: column;
          grid-auto-columns: calc(25% - 0.75rem);
          column-gap: 1rem;
          overflow-x: auto;
          scroll-behavior: smooth;

          /* Mobile smoothness */
          -webkit-overflow-scrolling: touch; /* iOS momentum */
          scroll-snap-type: x mandatory;
          touch-action: pan-x;
          padding: 0.25rem 0;
          scrollbar-width: none;
          -ms-overflow-style: none;
        }
        .carousel::-webkit-scrollbar {
          display: none;
        }

        .promptCard {
          scroll-snap-align: start;
          min-width: 240px;
          border-radius: 16px;
          padding: 1.2rem 1.25rem;
          color: #ffffff;
          font-size: 1rem;
          line-height: 1.45;
          user-select: none;

          /* brighter, glassy gradient */
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.3),
            rgba(255, 255, 255, 0.16)
          );
          backdrop-filter: blur(12px);
          box-shadow: 0 6px 18px rgba(0, 0, 0, 0.35),
            inset 0 1px 0 rgba(255, 255, 255, 0.08);
          transition: transform 0.15s ease, box-shadow 0.15s ease;
        }
        .promptCard:hover,
        .promptCard:focus {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(0, 0, 0, 0.38),
            inset 0 1px 0 rgba(255, 255, 255, 0.12);
          outline: none;
        }
        .promptCard:active {
          transform: scale(0.99);
        }

        .arrow {
          background: rgba(255, 255, 255, 0.12);
          border: none;
          color: #fff;
          font-size: 1.6rem;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, transform 0.1s;
        }
        .arrow:hover {
          background: rgba(255, 255, 255, 0.22);
        }
        .arrow:active {
          transform: scale(0.96);
        }

        /* Edge fades */
        .edgeFade {
          position: absolute;
          top: 0;
          bottom: 0;
          width: 36px;
          pointer-events: none;
        }
        .edgeFade.left {
          left: 0;
          background: linear-gradient(90deg, #0b0b0b 0%, transparent 100%);
        }
        .edgeFade.right {
          right: 0;
          background: linear-gradient(270deg, #0b0b0b 0%, transparent 100%);
        }

        /* ===== Footer ===== */
        .footer {
          background: #000000;
          color: #ffffff;
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

        /* Responsive tweaks for carousel */
        @media (max-width: 1024px) {
          .carousel {
            grid-auto-columns: calc(33.333% - 0.75rem);
            column-gap: 0.875rem;
          }
        }
        @media (max-width: 720px) {
          .arrow {
            width: 40px;
            height: 40px;
            font-size: 1.4rem;
          }
          .carousel {
            grid-auto-columns: calc(75% - 0.5rem);
            column-gap: 0.75rem;
          }
          .promptCard {
            min-width: 260px;
          }
        }
        @media (max-width: 480px) {
          .carousel {
            grid-auto-columns: 86%;
            column-gap: 0.625rem;
          }
          .promptCard {
            min-width: 0;
            padding: 1.1rem 1.15rem;
          }
        }
      `}</style>
    </main>
  );
}
