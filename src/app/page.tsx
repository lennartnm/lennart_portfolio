"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import {
  Eye,
  Target,
  TrendingUp,
  Clock,
  Users,
  Globe,
  BarChart,
  Zap,
  Award,
  Search,
  ClipboardList,
  FileText,
  CheckCircle,
  Package,
  BarChart3,
  ArrowRight,
  Check,
  Menu,
  X,
} from "lucide-react";

// Farben
const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";

// Einheitlicher Container für Blog / Done4You / Pricing / weitere Sections
const containerClass = "w-full max-w-6xl mx-auto px-6";

// BENEFITS (laufen im Marquee)
const benefits = [
  { icon: Eye, label: "Erhöhte Sichtbarkeit", help: "Mehr Präsenz in Suchergebnissen." },
  { icon: Target, label: "Warme Leads", help: "Du erfährst, welche Unternehmen Interesse haben – auch ohne Formular." },
  { icon: TrendingUp, label: "Mehr organischer Traffic", help: "Wachstum ganz ohne bezahlte Werbung." },
  { icon: Clock, label: "Langfristige Wirkung", help: "Blogbeiträge wirken monate- und jahrelang." },
  { icon: Users, label: "Vertrauensaufbau", help: "Als echter Experte deiner Branche wahrgenommen werden." },
  { icon: Globe, label: "Automatisierte Leads", help: "Wir übernehmen den gesamten Prozess für dich." },
  { icon: BarChart, label: "Verbesserte Sales-Pipeline", help: "Dein Vertrieb erhält konkrete Unternehmensnamen statt unqualifizierte Leads." },
  { icon: Zap, label: "Skalierbar & zukunfssicher", help: "Mehr Artikel, mehr Sichtbarkeit - Dort, wo Entscheider aktiv sind." },
  { icon: Award, label: "Starkes Markenimage", help: "Markenkonforme und professionelle Artikel unterstreichen deine Kompetenz." },
  { icon: Search, label: "Optimierte Auffindbarkeit", help: "Gefunden werden, wenn es zählt." },
];

// ABLAUF (Steps)
const ablauf = [
  { icon: ClipboardList, title: "Onboarding", desc: "Verständnis von Zielgruppe, Angebot und Themen." },
  { icon: FileText, title: "Themenfindung", desc: "KI-gestützte und intelligente Themenfindung, die Entscheider wirklich interessiert." },
  { icon: CheckCircle, title: "KI-Blogartikel", desc: "Nach Themenfreigabe entwickelt unsere KI datengestützt, relevante Blogartikel im HTML Format (variabel) und veröffentlicht sie über die nächsten 30 Tage hinweg im CMS." },
  { icon: Package, title: "Leadidentifizierung", desc: "Über allgemeine Formulareintragungen hinweg, identifizieren wir mit innovativer Technologie Unternehmensbesucher." },
  { icon: BarChart3, title: "Sales", desc: "Dein Sales-Team erhält warme Leads und meldet sich zum idealen Zeitpunkt." },
];

// PRICING DATEN – mit altem Preis
const plans = [
  { id: "starter", articles: 15, price: 499, oldPrice: 799, popular: false },
  { id: "growth",  articles: 30, price: 699, oldPrice: 1099, popular: true  },
  { id: "scale",   articles: 45, price: 899, oldPrice: 1399, popular: false },
];


const features = [
  "Themen- & Keyword-Analyse",
  "Hochwertige, KI-optimierte Blogartikel im Markenstil",
  "Perfekte SEO-Ausrichtung (Technik, Struktur, Verlinkung)",
  "Veröffentlichung direkt in deinem CMS",
  "Identifikation von anonymen Unternehmensbesuchern für deinen Vertrieb",
];

// FAQ (added so section compiles)
const faqs = [
  { q: "Wie schnell geht’s los?", a: "Nach dem Onboarding starten wir innerhalb weniger Tage mit den ersten Artikeln." },
  { q: "Können wir Themen vorgeben?", a: "Ja, du kannst Themen vorschlagen oder wir übernehmen die Recherche." },
  { q: "Kündigungsfrist?", a: "Monatlich kündbar – volle Flexibilität." },
];

function formatEUR(n: number) {
  return n.toLocaleString("de-DE");
}

/* ---------- Simple Modal für eingebettetes Calendly ---------- */
function CalendlyModal({
  open,
  onClose,
  url,
}: {
  open: boolean;
  onClose: () => void;
  url: string;
}) {
  if (!open) return null;
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Overlay */}
      <button
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        aria-label="Overlay schließen"
        onClick={onClose}
      />
      {/* Dialog */}
      <div className="relative z-[101] w-full max-w-4xl overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3">
          <button
            onClick={onClose}
            className="rounded-md border border-slate-200 px-2 py-1 text-sm hover:bg-slate-50"
            aria-label="Popup schließen"
          >
            Schließen
          </button>
        </div>
        <div className="h-[70vh] w-full">
          <iframe
            src={url}
            title="Calendly – Termin buchen"
            className="h-full w-full"
            frameBorder="0"
            allow="clipboard-write; fullscreen"
          />
        </div>
      </div>
    </div>
  );
}

/* --------------------------- Header (nur Desktop) --------------------------- */
function Header() {
  return (
    <header className="hidden md:block border-b border-slate-100 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-8 px-6 py-4">
        <nav className="flex flex-wrap gap-6">
          <a href="#blog" className="text-sm" style={{ color: "#334155" }}>
            Blog-Beispiele
          </a>
          <a href="#preise" className="text-sm" style={{ color: "#334155" }}>
            Preise
          </a>
          <a href="#ablauf" className="text-sm" style={{ color: "#334155" }}>
            Ablauf
          </a>
          <a href="#faq" className="text-sm" style={{ color: "#334155" }}>
            FAQ
          </a>
        </nav>
        <Button asChild>
          <a className="text-white" href="#preise">
            Jetzt anfragen
          </a>
        </Button>
      </div>
    </header>
  );
}



function Hero() {
  return (
    <section className="relative overflow-hidden bg-white px-6 py-28 text-center">
      {/* Sehr dezentes Raster, sanftes Fade zu Weiß */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(2,6,23,0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(2,6,23,0.04) 1px, transparent 1px)
          `,
          backgroundSize: "32px 32px",
          backgroundPosition: "center",
          /* großes Fade für weichen Übergang */
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Graph: sehr helles Grau, Reveal via clip-path */}
      <div className="absolute inset-0 pointer-events-none z-10">
        <div className="h-full w-full text-slate-100 animate-graph-reveal will-change-clip-path">
          <svg
            className="h-full w-full"
            viewBox="0 0 500 200"
            preserveAspectRatio="none"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              vectorEffect="non-scaling-stroke"
              points="0,180 60,165 120,160 180,140 240,120 300,95 360,80 420,55 480,30 500,20"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className={`text-4xl md:text-6xl tracking-tight ${serifClass}`}>
          <span className="italic font-bold">findbar:</span> Skaliere durch KI-Blogartikel und
          <br className="hidden md:inline" /> smarter Erkennung relevanter B2B-Besucher.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-slate-600">
          Mehr Sichtbarkeit, mehr Leads, dank KI: Wir platzieren dein B2B-Angebot bei Google & ChatGPT und identifizieren anonyme Firmenbesucher für deinen Vertrieb.
        </p>
        <Button asChild>
          <a className="mt-6 inline-block text-white" href="#preise">
            Pakete ansehen
          </a>
        </Button>
      </div>

      {/* Animation Styles */}
      <style>{`
        .animate-graph-reveal {
          clip-path: inset(0 100% 0 0);
          animation: graph-reveal 1.2s ease-out forwards .12s;
        }
        @keyframes graph-reveal {
          to { clip-path: inset(0 0 0 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-graph-reveal {
            animation: none;
            clip-path: inset(0 0 0 0);
          }
        }
      `}</style>
    </section>
  );
}

/* ---------------------- VisitorRevealSection (overlay info on scan) ---------------------- */
function VisitorRevealSection() {
  const steps = [
    "Google oder KI-Suche für branchenspezifische Themen",
    "Anzeige deiner KI-optimierten Blogartikel und Ratgeber",
    "Wahrnehmung deiner Kompetenz und deines Expertenstatus",
    "Identifizierung anonymer B2B-Besucher oder konkrete Anfrage",
    "Übergabe an das Sales-Team und ideal getaktete Kontaktaufnahme",
  ];

  const companies = [
    { name: "Meyer Industrie AG", article: "Case Study: Predictive Maintenance" },
    { name: "NovaCloud GmbH", article: "Guide: B2B-KI-Content, der Entscheider konvertiert" },
    { name: "Kraftwerk Solutions", article: "Artikel: Photovoltaik – ROI-Rechner" },
  ];

  return (
    <section id="reveal" className="relative overflow-hidden py-20 border-t border-slate-100 bg-white">
      <div className={containerClass}>
        {/* Headline */}
        <div className="mx-auto max-w-3xl text-left md:text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs shadow-sm">
            <Eye className="h-3.5 w-3.5 text-slate-700" />
            <span className="text-slate-700">Lead-Identifizierung</span>
          </span>
          <h2 className={`mt-4 text-3xl md:text-4xl font-semibold ${serifClass}`}>
            Anonyme Besucher → klare Firmen-Leads
          </h2>
          <p className="mt-3 text-slate-600">
            Welche Unternehmen lesen deine KI-Blogartikel? Wir identifizieren anonyme B2B-Besucher – auch diejenigen ohne ausgefülltes Formular – und liefern sie direkt an dein Sales-Team.
          </p>
        </div>

        {/* Visual Row */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {/* Live-Traffic Card */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            {/* Header */}
            <div className="flex items-center justify-between px-5 pt-5">
              <span className={`text-lg font-semibold ${serifClass}`}>Live-Traffic</span>
              <span className="text-xs text-slate-500">Echtzeit-Scan</span>
            </div>

            {/* Visual Box */}
            <div className="relative px-5 pt-4 pb-5">
              <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-slate-50">
                <img
                  src="DACH Scan.png"
                  alt="Traffic Map DACH"
                  className="absolute inset-0 h-full w-full object-contain opacity-80"
                />
                <div className="absolute inset-0 animate-scanY bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent mix-blend-multiply" />
                <div className="absolute inset-0">
                  {[{x:"45%",y:"38%"},{x:"52%",y:"55%"},{x:"35%",y:"60%"}].map((pos,i)=>(
                    <div
                      key={i}
                      style={{left:pos.x,top:pos.y}}
                      className="absolute h-3.5 w-3.5 rounded-full bg-emerald-500/90 animate-ping"
                    />
                  ))}
                </div>
                <div className="absolute left-4 right-4 bottom-4">
                  <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white/90 backdrop-blur px-3 py-2 text-xs text-slate-700 shadow-sm">
                    <Search className="h-4 w-4" />
                    <span>Mustererkennung, IP-Auflösung & Firmendatenbanken</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Erkannte Unternehmen */}
          <div className="relative overflow-hidden rounded-2xl border border-emerald-200 bg-emerald-50/40 shadow-sm">
            <div className="flex items-center justify-between px-5 py-4">
              <span className={`text-lg font-semibold ${serifClass}`}>Erkannte Unternehmen</span>
              <span className="text-xs text-emerald-700">Sales-Ready</span>
            </div>
            <ul className="px-5 pt-2 pb-2 space-y-3">
              {companies.map((c, i) => (
                <li key={i} className="rounded-xl border border-emerald-200/70 bg-white px-4 py-3 text-sm shadow-sm">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-medium text-slate-900">{c.name}</div>
                      <div className="mt-0.5 text-slate-600">Gelesen: {c.article}</div>
                    </div>
                    <span className="shrink-0 inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-1 text-[10px] font-medium text-emerald-700">
                      <CheckCircle className="h-3 w-3" />
                      DSGVO-konform
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            <div className="border-t border-emerald-200 bg-white/70 px-5 py-3 text-xs text-slate-600">
              Direkt in CRM & Outreach nutzbar.
            </div>
          </div>
        </div>

        {/* Journey Steps */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-5 md:gap-6 text-center">
          {steps.map((title, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="shrink-0 inline-flex size-12 items-center justify-center rounded-full bg-[#1b4d2b1A] border border-[#1b4d2b33] text-[#1b4d2b] font-semibold leading-none">
                {i + 1}
              </div>
              <p className="mt-3 text-sm text-slate-700 max-w-[190px]">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scanY { 
          0% { transform: translateY(-100%); } 
          100% { transform: translateY(100%); } 
        }
        .animate-scanY { 
          animation: scanY 2.2s linear infinite; 
          will-change: transform; 
        }
      `}</style>
    </section>
  );
}




/* ---------------------- Benefits Marquee ---------------------- */
function BenefitsMarquee() {
  return (
    <section
      className="relative overflow-hidden py-12 text-white"
      style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}
    >
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-8 will-change-transform"
          style={{ animation: "marquee 80s linear infinite" }}
        >
          {[...benefits, ...benefits, ...benefits].map(
            ({ icon: Icon, label, help }, i) => (
              <div
                key={i}
                className="shrink-0 w-64 rounded-xl border border-white/10 bg-white/5 px-8 py-8 text-center backdrop-blur-sm shadow-sm"
              >
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                </div>
                <div className={`text-lg italic ${serifClass}`}>{label}</div>
                <div className="mt-2 break-words text-xs leading-relaxed text-white/85">
                  {help}
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </section>
  );
}

/* ------------------------- BlogSection (mit neuen Beispielen) ------------------------ */
function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-left md:text-center ${serifClass}`}>
          Blog-Beispiele
        </h2>
        <p className="mt-4 text-left md:text-center text-slate-600">
          Wie kann so ein KI-optimierter Artikel auf deiner Webseite aussehen? Schau dir hier ausgewählte Beispiele an.
        </p>

        <div className="mx-auto mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "Cloud vs. On-Premise – Welche Lösung ist die richtige für dein Unternehmen?",
              tease: "Kosten, Sicherheit, Flexibilität: Der direkte Vergleich hilft dir, fundiert zu entscheiden – inklusive Praxisbeispiele und Checkliste.",
              image: "/Cloud vs On-Premise.png",
              alt: "Vergleich zwischen Cloud-Infrastruktur und On-Premise-Servern",
            },
            {
              title: "B2B Kunden gewinnen im Jahr 2025 mit Hilfe von KI",
              tease: "Der wachsende Wettbewerb fordert nach innovativen Marketingansätzen. Vertrauensaufbau wird essentieller denn je. So gelingt es.",
              image: "/B2B Kunden.png",
              alt: "Kundengewinnung durch KI im Jahr 2025",
            },
            {
              title: "Green Energy im Unternehmen – Photovoltaik und Energiespeicher sinnvoll einsetzen",
              tease: "Investition, Amortisation, Förderungen: So planen Firmen PV-Anlagen und Speicherlösungen wirtschaftlich.",
              image: "/Photovoltaik Energiespeicher Unternehmen.png",
              alt: "Photovoltaik-Module und Batteriespeicher in einem Firmengebäude",
            },
          ].map((b, i) => (
            <article
              key={i}
              className="overflow-hidden rounded-xl border border-slate-200 text-left shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Vorschaubild */}
              <div className="aspect-[16/9] w-full overflow-hidden bg-slate-100">
                <img
                  src={b.image}
                  alt={b.alt}
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Textbereich */}
              <div className="p-6">
                <h3 className={`mb-1 text-lg ${serifClass}`}>{b.title}</h3>
                <p className="text-sm text-slate-600">{b.tease}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center text-sm font-medium text-[#1b4d2b]"
                  aria-label={`Beispiel ansehen: ${b.title}`}
                >
                  Beispiel ansehen <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}



/* ---------------------- So helfen dir KI-optimierte Blogartikel ---------------------- */
function HowItHelpsSection() {
  const vorteile = [
    { title: "Themen definieren", desc: "Wir analysieren KI-gestützt deine Branche und identifizieren die Themen, nach denen deine Zielkunden wirklich suchen." },
    { title: "KI-Blogartikel erstellen", desc: "Unsere KI erstellt hochwertige, SEO-optimierte Artikel, die Entscheider anziehen – besser als jeder Experte und zu einem Bruchteil der Kosten." },
    { title: "Besucher identifizieren", desc: "Mit intelligenter Technologie erkennen wir, welche Unternehmen deine Website besuchen – auch ohne Formular." },
    { title: "Leads nutzen", desc: "Du erhältst verwertbare Unternehmensdaten, mit denen dein Vertrieb direkt arbeiten und Interessenten ansprechen kann." },
  ];

  return (
    <section id="how-it-helps" className="py-20 border-t border-slate-100">
      <div className={containerClass}>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Textseite */}
          <div>
            <h2 className={`text-3xl font-semibold ${serifClass}`}>
              So helfen dir KI-optimierte Blogartikel mit intelligenter Leads-Erkennung
            </h2>
            <p className="mt-4 text-slate-600">
              Artikel, die wirken: sichtbar bei Google, spannend für Leser und wertvoll für deine Sales-Pipeline.
            </p>
            <ul className="mt-6 space-y-4">
              {vorteile.map((v, i) => (
                <li key={i} className="flex items-start gap-3">
                  {/* Zahl im perfekten Kreis – NICHT schrumpfen */}
                  <div className="shrink-0 inline-flex size-10 items-center justify-center rounded-full
                                  bg-[#1b4d2b1A] border border-[#1b4d2b33] text-[#1b4d2b] font-semibold leading-none">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-semibold">{v.title}</h4>
                    <p className="text-sm text-slate-600">{v.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Bildseite */}
          <div className="relative w-full max-w-md mx-auto">
            <div
              className="absolute -inset-10 -z-10 blur-2xl"
              style={{
                background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)`,
              }}
            />
            <img
              src="/Lupe.png"
              alt="Darstellung von KI-optimierten Blogartikeln"
              className="relative z-20 w-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}


/* ---------------------- Vertrauen & Expertenstatus (Green Aurora) ---------------------- */
function TrustSection() {
  const pillars = [
    {
      icon: Eye,
      title: "Gefunden werden im richtigen Moment",
      desc: "Entscheider erleben dich als Experten mit konkreten Antworten – ein erster Vertrauensanker, lange vor dem Anruf.",
    },
    {
      icon: Award,
      title: "Glaubwürdig wahrgenommen werden",
      desc: "Mit Fakten, Beispielen und Lösungen zeigst du Verständnis für ihre Herausforderungen und gewinnst Glaubwürdigkeit.",
    },
    {
      icon: BarChart3,
      title: "Vertrauen schlägt Kaltakquise",
      desc: "Entscheider, die wertvolle Inhalte von dir konsumieren, gehen mit einem Vorschuss an Vertrauen in den Erstkontakt.",
    },
  ];

  return (
    <section
      id="trust"
      className="relative overflow-hidden py-16 text-white"
      style={{
        background: `linear-gradient(120deg, ${RG600} 0%, ${RG300} 60%)`,
      }}
    >
      {/* Aurora + Grid Overlay */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute -top-40 left-1/2 h-[90vh] w-[90vw] -translate-x-1/2 rounded-full blur-[90px] opacity-60"
          style={{
            background: `radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,.18) 0%, transparent 60%)`,
          }}
        />
        <div className="absolute inset-0 aurora" />
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,.09) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,.09) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            maskImage: "linear-gradient(to bottom, black 70%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, black 70%, transparent 100%)",
          }}
        />
      </div>

      <div className={`${containerClass} relative`}>
        {/* Headline */}
        <div className="text-left md:text-center">
          <h2
            className={`mt-0 text-4xl md:text-5xl font-semibold ${serifClass}`}
          >
            Vertrauen aufbauen, bevor dein Vertrieb spricht
          </h2>
          <p className="mt-3 text-white/85">
            In einer Zeit, in der Vertrauen die neue Währung ist, entscheidet
            sichtbare Expertise über den ersten Eindruck. Bevor ein Interessent
            überhaupt Kontakt aufnimmt, formt er sich sein Bild von deiner Marke.
          </p>
        </div>

        {/* Pillars */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map(({ icon: Icon, title, desc }, i) => (
            <article
              key={i}
              className="group relative overflow-hidden rounded-2xl border border-white/25 bg-white/10 p-6 shadow-[0_15px_40px_rgba(0,0,0,.25)] backdrop-blur-md text-left md:text-center"
            >
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/30 bg-white/10">
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className={`text-lg font-semibold ${serifClass}`}>{title}</h3>
              <p className="mt-1 text-sm text-white/85">{desc}</p>
            </article>
          ))}
        </div>
      </div>

      {/* Keyframes (scoped) */}
      <style>{`
        @keyframes auroraShift {
          0% { transform: translate3d(-8%, 0, 0) skewX(-6deg); opacity: .35; }
          50% { transform: translate3d(8%, 2%, 0) skewX(6deg); opacity: .55; }
          100% { transform: translate3d(-8%, 0, 0) skewX(-6deg); opacity: .35; }
        }
        .aurora {
          position: absolute;
          inset: 0;
          background: conic-gradient(from 180deg at 50% 50%, rgba(255,255,255,0.18), rgba(255,255,255,0.05), rgba(255,255,255,0.18));
          filter: blur(70px);
          animation: auroraShift 14s ease-in-out infinite;
          mix-blend-mode: screen;
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora { animation: none !important; }
        }
      `}</style>
    </section>
  );
}



/* ---------------------- Zukunftssicher Section (schlicht & hellgrau) ---------------------- */
function FutureProofSection() {
  return (
    <section className="relative overflow-hidden py-16 bg-slate-50 border-t border-slate-200">
      <div className={containerClass}>
        <div className="text-left md:text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-1 text-xs shadow-sm">
            <Zap className="h-3.5 w-3.5 text-slate-700" />
            <span className="text-slate-700">KI-Distribution</span>
          </div>

          <h2 className={`mt-4 text-3xl md:text-4xl font-semibold ${serifClass} text-slate-900`}>
            Mache dein Angebot sicher für die Zukunft
          </h2>
          <p className="mt-3 text-slate-600">
            Unsere Blogartikel verlinken dein Angebot in KI-Übersichten, ChatGPT,
            Perplexity &amp; Co. – für Reichweite genau dort, wo heute gesucht wird.
          </p>
        </div>

        {/* kleine „Destinations“-Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-start md:justify-center gap-3">
          {[
            { label: "KI-Übersichten", Icon: Award },
            { label: "ChatGPT", Icon: Search },
            { label: "Perplexity", Icon: Globe },
            { label: "Weitere KI-Plattformen", Icon: Zap },
          ].map(({ label, Icon }, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm shadow-sm"
            >
              <Icon className="h-4 w-4 text-slate-700" />
              <span className="text-slate-700">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}







/* ---------------------- Minimaler Aufwand – maximaler Vertriebserfolg ---------------------- */
function UnserZielSection() {
  const punkte = [
    { title: "Einmal einrichten", desc: "Nachhaltig profitieren." },
    { title: "Maximale Zeiteffizienz", desc: "Für dich und dein Team." },
    { title: "Transparente Reports", desc: "Veröffentlichungen, Rankings, Traffic." },
  ];

  return (
    <section id="done4you" className="py-20">
      <div className={containerClass}>
        <div
          className="relative w-full overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl"
          style={{
            background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)`,
          }}
        >
          <div className="relative z-10 grid items-center gap-12 px-6 py-12 md:grid-cols-2 md:px-12">
            {/* Bildseite */}
            <div className="order-2 md:order-1 flex justify-center">
              <div className="relative w-full max-w-md">
                <div
                  className="absolute -inset-10 -z-10 blur-2xl"
                  style={{
                    background: `radial-gradient(60% 60% at 70% 30%, ${RG300}33 0%, transparent 60%)`,
                  }}
                />
                <img
                  src="/Rakete.png"
                  alt="Darstellung des Done 4 You Prozesses"
                  className="relative z-20 w-full rounded-xl"
                />
              </div>
            </div>

            {/* Textseite */}
            <div className="order-1 md:order-2">
              <h2 className={`mt-2 text-3xl font-semibold ${serifClass}`}>
                Minimaler Aufwand – maximaler Vertriebserfolg
              </h2>
              <p className="mt-4 max-w-prose text-white/90">
                Wir haben Blogartikel in Zeiten von KI und innovativen Trackingmöglichkeiten neu gedacht.
                Gemeinsam verwandeln wir Content in einen Vertriebsbooster, der nicht nur sichtbar macht –
                sondern auch die richtigen Kunden zu dir bringt.
              </p>

              {/* Bullets im HowItHelps-Schema: Titel fett, Text normal */}
              <ul className="mt-6 space-y-4">
                {punkte.map((p, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 border border-white/20">
                      <Check className="h-4 w-4 text-white" strokeWidth={1.6} />
                    </div>
                    <div>
                      <h4 className="font-semibold">{p.title}</h4>
                      <p className="text-sm font-normal text-white/90">{p.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

           
            </div>
          </div>

          {/* zarter Innenrand */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}





/* ---------------------- Identification Section ---------------------- */
function IdentificationSection() {
  const zielgruppen = [
    {
      title: "Industrie & Mittelstand",
      desc: "Neue Firmenkunden gewinnen, indem Entscheider genau die Inhalte finden, nach denen sie suchen.",
      icon: Users,
    },
    {
      title: "B2B-Dienstleister & Agenturen",
      desc: "Regelmäßig qualifizierte Leads erhalten, ohne selbst Ressourcen für Content-Produktion zu binden.",
      icon: Target,
    },
    {
      title: "SaaS & Tech-Unternehmen",
      desc: "Komplexe Lösungen verständlich erklären, gezielt Kaufinteresse wecken und anonyme Website-Besucher sichtbar machen.",
      icon: Globe,
    },
    {
      title: "Marketing- & Vertriebsteams in B2B",
      desc: "Effizienter arbeiten: Content, der SEO-Ergebnisse liefert und konkrete Unternehmensleads für die Sales-Pipeline bereitstellt.",
      icon: Search,
    },
  ];

  return (
    <section
      id="identification"
      className="py-20 border-t border-slate-200 bg-slate-50"
    >
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>
          An wen richtet sich unser Angebot?
        </h2>
        <p className="mt-4 text-center text-slate-600">
          Unsere KI-optimierten Blogartikel sind für B2B-Unternehmen mit validiertem Angebot und Zielgruppe – bereit für Wachstum.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-4">
          {zielgruppen.map((z, i) => (
            <div
              key={i}
              className="rounded-xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1b4d2b1A] text-[#1b4d2b]">
                <z.icon className="h-6 w-6" />
              </div>
              <h3 className={`mb-2 text-lg font-semibold ${serifClass}`}>{z.title}</h3>
              <p className="text-sm text-slate-600">{z.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------------- Leads Marquee mit Icons ---------------------- */
function LeadsMarquee() {
  const items = [
    { text: "Mehr Leads", icon: Users },
    { text: "Mehr Sichtbarkeit", icon: Eye },
  ];

  return (
    <section id="leads"
      className="relative overflow-hidden py-6"
      style={{ background: `linear-gradient(90deg, ${RG300}, ${RG600})` }}
    >
      <div
        className="relative mx-auto max-w-[100vw]"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div
          className="flex w-max gap-12 will-change-transform"
          style={{ animation: "marquee-ltr 70s linear infinite" }}
          aria-hidden
        >
          {[...Array(8)].flatMap((_, k) =>
            items.map(({ text, icon: Icon }, i) => (
              <div
                key={`${k}-${i}`}
                className="flex items-center gap-2 shrink-0"
              >
                {/* Icon-Style wie Benefits, aber kleiner */}
                <div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 bg-white/10">
                  <Icon className="h-4 w-4 text-white" strokeWidth={1.6} />
                </div>
                <span
                  className={`text-2xl md:text-4xl italic ${serifClass} select-none`}
                  style={{
                    color: "#ffffff",
                    letterSpacing: "0.04em",
                  }}
                >
                  {text}
                </span>
              </div>
            ))
          )}
        </div>
      </div>

      <style>{`
        @keyframes marquee-ltr {
          from { transform: translateX(-60%); }
          to   { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}




/* ------------------------ PreiseSection ----------------------- */
function PreiseSection({ onOpenCalendly }: { onOpenCalendly: () => void }) {
  return (
    <section id="preise" className="border-t border-slate-100 bg-white py-20">
      <div className={containerClass}>
        <h2 className={`text-3xl font-semibold text-center ${serifClass}`}>
          Unsere Pakete
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            { id: "starter", articles: 15, price: 499, oldPrice: 799, popular: false },
            { id: "growth", articles: 30, price: 699, oldPrice: 1099, popular: true },
            { id: "scale", articles: 45, price: 899, oldPrice: 1399, popular: false },
          ].map(({ id, articles, price, oldPrice, popular }) => {
            return (
              <div
                key={id}
                className={`group relative rounded-2xl border-2 bg-white p-6 text-left shadow-sm transition-all hover:shadow-lg ${
                  popular
                    ? "scale-105 border-[#1b4d2b] ring-2 ring-[#1b4d2b]/40"
                    : "border-[#1b4d2b]"
                }`}
              >
                {popular && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-medium text-white shadow-sm"
                    style={{ backgroundColor: RG600 }}
                  >
                    Meistverkauft
                  </div>
                )}

                <h3 className={`text-lg font-semibold ${serifClass}`}>
                  {articles} Artikel / Monat
                </h3>

                {/* Preis */}
                <div className="mt-4">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <span className="text-4xl font-bold text-[#1b4d2b]">
                      {formatEUR(price)}€
                    </span>
                    <span
                      className="text-sm text-slate-500 line-through"
                      aria-label={`Alter Preis ${formatEUR(oldPrice)}€`}
                      title="Alter Preis"
                    >
                      {formatEUR(oldPrice)}€
                    </span>
                    <span className="mb-1 text-xs text-slate-500">pro Monat</span>
                  </div>

                  {/* Marktvalidierungspreis Badge */}
                  <div className="mt-2 inline-flex items-center gap-2 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-800">
                    <Check className="h-3 w-3" />
                    Marktvalidierungspreis: Wir sammeln Testimonials
                  </div>

                  <span className="sr-only">
                    Neuer Preis {formatEUR(price)}€ pro Monat statt {formatEUR(oldPrice)}€ pro Monat.
                  </span>
                </div>

                {/* Features */}
                <ul className="mt-6 space-y-2">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="mt-0.5 rounded-full bg-[#1b4d2b1A] p-1 text-[#1b4d2b]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="text-sm text-slate-700">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Button öffnet das Calendly-Modal */}
                <Button
                  className="mt-6 w-full"
                  variant={popular ? "default" : "outline"}
                  onClick={onOpenCalendly}
                >
                  Jetzt anfragen
                </Button>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-xs text-slate-500">
          Alle Pakete verstehen sich exkl. Mwst. und einmaliger Aufsetzgebühr von 299€. 
          Sie beinhalten alles von Recherche bis Veröffentlichung und nachhaltige Lead-Gewinnung, 
          für maximalen Outcome für dein Angebot.
        </p>
      </div>
    </section>
  );
}



/* ------------------------ AblaufSection – 2x3 Grid ----------------------- */
function AblaufSection() {
  return (
    <section id="ablauf" className="py-20">
      <div className={containerClass}>
        <div
          className="relative overflow-hidden rounded-3xl md:rounded-[32px] text-white shadow-xl"
          style={{ background: `linear-gradient(to right, ${RG600} 0%, ${RG300} 60%)` }}
        >
          <div className="relative z-10 px-6 py-12 md:px-12">
            <h2 className={`text-center text-3xl font-semibold ${serifClass}`}>
              Unser Ablauf – transparent & effizient
            </h2>

            {/* GRID: 2 Reihen x 3 Spalten */}
            <ol
              className="
                mt-12 grid gap-6
                md:grid-cols-3
              "
            >
              {ablaufMitErfolg.map(({ icon: Icon, title, desc }, i) => (
                <li key={i}>
                  <article
                    className="group h-full rounded-2xl border border-white/15 bg-white/10 backdrop-blur-md shadow-sm p-6 transition-transform duration-200 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/20"
                    style={{
                      hyphens: "auto",
                      WebkitHyphens: "auto",
                      overflowWrap: "break-word",
                      wordBreak: "normal",
                    }}
                  >
                    {/* Header mit Step-Nummer und Icon */}
                    <header className="flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/30 bg-white/10 text-sm font-semibold">
                        {i + 1}
                      </span>
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
                        <Icon className="h-5 w-5 text-white" strokeWidth={1.6} />
                      </div>
                    </header>

                    {/* Titel */}
                    <h3 className={`mt-4 text-lg font-semibold leading-snug ${serifClass}`}>
                      {title}
                    </h3>

                    {/* Linie */}
                    <hr className="my-4 border-white/10" />

                    {/* Beschreibung */}
                    <p className="text-sm leading-relaxed text-white/90">
                      {desc}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </div>

          {/* zarter Innenrand */}
          <div className="pointer-events-none absolute inset-0 rounded-3xl md:rounded-[32px] ring-1 ring-white/10" />
        </div>
      </div>
    </section>
  );
}

/* ---- Steps (inkl. Erfolg als #6) ---- */
const ablaufMitErfolg = [
  {
    icon: ClipboardList,
    title: "Onboarding",
    desc: "Verständnis von Zielgruppe, Angebot und Themen.",
  },
  {
    icon: FileText,
    title: "Themenfindung",
    desc: "KI-gestützte und intelligente Themenfindung, die Entscheider wirklich interessiert.",
  },
  {
    icon: CheckCircle,
    title: "KI-Blogartikel",
    desc: "Nach Themenfreigabe entwickelt unsere KI datengestützt relevante Artikel im HTML-Format und veröffentlicht sie über 30 Tage hinweg im CMS.",
  },
  {
    icon: Package,
    title: "Leadidentifizierung",
    desc: "Über allgemeine Formulareintragungen hinaus identifizieren wir mit innovativer Technologie Unternehmensbesucher.",
  },
  {
    icon: BarChart3,
    title: "Sales",
    desc: "Dein Sales-Team erhält warme Leads und meldet sich zum idealen Zeitpunkt.",
  },
  {
    icon: Award, // 'Erfolg'
    title: "Erfolg",
    desc: "Mehr Sichtbarkeit, bessere Leads und nachhaltiges Wachstum für dein Business.",
  },
];




/* ---------------------- FAQ Section ---------------------- */
function FAQSection() {
  const faqs = [
    {
      q: "Wie schnell sehe ich Ergebnisse?",
      a: "Die ersten Effekte (z. B. Sichtbarkeit, Rankings, erste Firmenbesucher) zeigen sich bereits nach wenigen Wochen. Der volle Hebel setzt nach 2–3 Monaten ein, wenn genügend Artikel veröffentlicht und indexiert sind. Ab dann wächst der Traffic und die Zahl der identifizierten Leads kontinuierlich.",
    },
    {
      q: "Wie qualitativ und branchenspezifisch sind die Artikel wirklich?",
      a: "Unsere KI wird mit branchenspezifischen Daten, Keywords und deinem Markenstil trainiert. Jeder Artikel ist individuell auf deine Zielgruppe ausgerichtet – keine 0815-Texte. Das Ziel: Inhalte, die wie von einem Branchen-Insider geschrieben wirken und Vertrauen schaffen.",
    },
    {
      q: "Wie funktioniert die Erkennung von anonymen Firmenbesuchern genau?",
      a: "Wir setzen eine intelligente Tracking-Technologie ein, die anhand von IP-Adressen, Unternehmensdatenbanken und Verhaltensmustern erkennt, welche Firmen deine Website besuchen. So erhältst du konkrete Unternehmensnamen – auch ohne Formular. DSGVO-konform und zuverlässig.",
    },
    {
      q: "Worin unterscheidet ihr euch von einer klassischen SEO- oder Content-Agentur?",
      a: "Klassische Agenturen liefern Content oder Rankings. Wir liefern sichtbaren Content + verwertbare Leads. Dein Vertrieb bekommt Unternehmensdaten an die Hand, die er direkt nutzen kann – dadurch wird Content nicht zum Kostenfaktor, sondern zum echten Vertriebsbooster.",
    },
    {
      q: "Wie viel Aufwand habe ich intern?",
      a: "Minimal. Wir übernehmen Themenrecherche, Artikelproduktion, SEO-Optimierung, CMS-Einpflege und Lead-Identifizierung. Dein Team muss nur am Anfang Input zu Zielgruppe & Angebot geben – danach läuft alles automatisiert. Vertrieb nutzt dann die fertigen Leads.",
    },
    {
      q: "Welche Kosten kommen wirklich auf mich zu?",
      a: "Du zahlst nur die monatliche Paketgebühr plus eine einmalige Setup-Gebühr von 199 € für die Einrichtung. Keine versteckten Kosten, keine Zusatzaufwände. Kündbar mit kurzer Frist – volle Transparenz.",
    },
    {
      q: "Ist das auch für meine Branche geeignet?",
      a: "Unser Modell funktioniert für jedes B2B-Unternehmen mit klarem Angebot und Zielgruppe. Ob Industrie, SaaS, Tech oder Dienstleistung – sobald deine Kunden online nach Lösungen suchen, bringen wir dich auf ihre Bildschirme und liefern die passenden Leads.",
    },
  ];

  return (
    <section id="faq" className="bg-slate-50 py-20 border-t border-slate-100">
      <div className={containerClass}>
       
        <div className="mt-10 space-y-4">
          {faqs.map((f, i) => (
            <details
              key={i}
              className="group rounded-lg border border-slate-200 bg-white p-5 shadow-sm text-left"
            >
              <summary className="flex cursor-pointer items-center justify-between font-medium text-left">
                <span>{f.q}</span>
                <span className="ml-4 transition-transform group-open:rotate-180">
                  <ArrowRight className="h-4 w-4 text-slate-500" />
                </span>
              </summary>
              <p className="mt-3 text-sm text-slate-600">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}






/* ----------------------- Root Component ----------------------- */
export default function FindbarPage() {
  const [calOpen, setCalOpen] = React.useState(false);
  const calendlyUrl =
    "https://calendly.com/talk-with-lennart/findbar-kostenlose-erstberatung";

  return (
    <div className="bg-white text-slate-900">
      {/* 1. Header */}
      <Header />
      {/* 2. Hero */}
      <Hero />
      {/* 3. Benefits mit Marquee */}
      <BenefitsMarquee />
      {/* 4. Blog Beispiele */}
      <BlogSection />
      {/* 5. So helfen dir KI-optimierte Blogartikel */}
      <HowItHelpsSection />
      {/* 6. Done 4 You */}
      <TrustSection />
      <FutureProofSection />
      
      <UnserZielSection />
      <VisitorRevealSection />
      {/* 7. An wen richtet sich unser Angebot */}
      <IdentificationSection />
      {/* 8. Mehr Leads / Mehr Sichtbarkeit */}
      <LeadsMarquee />
      {/* 9. Pricing */}
      <PreiseSection onOpenCalendly={() => setCalOpen(true)} />
      {/* 10. Ablauf */}
      <AblaufSection />
      {/* 11. FAQ */}
      <FAQSection />

  <footer className="border-t border-slate-100 py-8 text-center text-sm text-slate-500">
  <div className="space-x-4">
    <a href="/impressum" className="hover:text-slate-700 transition-colors">
      Impressum
    </a>
    <a href="/agb" className="hover:text-slate-700 transition-colors">
      AGB
    </a>
    <a href="/datenschutz" className="hover:text-slate-700 transition-colors">
      Datenschutz
    </a>
  </div>
  <p className="mt-3">
    © {new Date().getFullYear()} findbar. Alle Rechte vorbehalten.
  </p>
</footer>


      {/* Calendly Popup */}
      <CalendlyModal
        open={calOpen}
        onClose={() => setCalOpen(false)}
        url={calendlyUrl}
      />
    </div>
  );
}
