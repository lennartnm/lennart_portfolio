"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

const RG600 = "#1b4d2b"; // Racing Green
const RG300 = "#7ca98e";
const serifClass = "font-serif";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-slate-200 bg-white shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5">
        {/* Text */}
        <div className="text-sm text-slate-700 md:pr-4">
          <p className={`${serifClass} font-medium text-slate-900`}>
            Wir respektieren deine Privatsphäre
          </p>
          <p className="mt-1 text-slate-600">
            Diese Website verwendet Cookies, um dein Erlebnis zu verbessern.
            Weitere Infos findest du in unserer{" "}
            <a
              href="/datenschutz"
              className="underline decoration-[#1b4d2b] underline-offset-2 hover:text-[#1b4d2b]"
            >
              Datenschutzerklärung
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            onClick={decline}
            variant="outline"
            className="flex items-center gap-1 border-slate-300 text-slate-700 hover:bg-slate-100"
          >
            <X className="h-4 w-4" />
            Ablehnen
          </Button>
          <Button
            onClick={accept}
            className="flex items-center gap-1 bg-[#1b4d2b] hover:bg-[#163b22]"
          >
            <Check className="h-4 w-4" />
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
}
