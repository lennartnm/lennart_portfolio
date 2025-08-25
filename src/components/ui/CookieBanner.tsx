"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

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
    <div className="fixed bottom-4 left-1/2 z-50 w-[95%] max-w-3xl -translate-x-1/2 rounded-2xl border border-gray-300 bg-white shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-5">
        {/* Text */}
        <div className="text-sm text-gray-700 md:pr-4">
          <p className={`${serifClass} font-medium text-gray-900`}>
           
          </p>
          <p className="mt-1 text-gray-600">
          Yes, this website actually uses cookies. You can find more information in our{" "}
            <a
              href="/privacy"
              className="underline decoration-black underline-offset-2 hover:text-black"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>

        {/* Buttons */}
        <div className="flex shrink-0 items-center gap-2">
          <Button
            onClick={decline}
            variant="outline"
            className="flex items-center gap-1 border-gray-400 text-gray-700 hover:bg-gray-100"
          >
            <X className="h-4 w-4" />
            Decline
          </Button>
          <Button
            onClick={accept}
            className="flex items-center gap-1 bg-black text-white hover:bg-gray-800"
          >
            <Check className="h-4 w-4" />
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
