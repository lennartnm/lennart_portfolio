import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "Lennart Niehausmeier",
  description: "Find out more about me or chat to my AI clone.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
