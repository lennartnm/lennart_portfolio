import "./globals.css";
import type { Metadata } from "next";
import CookieBanner from "@/components/ui/CookieBanner";

export const metadata: Metadata = {
  title: "findbar – KI-optimierte Blog-Artikel",
  description: "Skaliere Dein Unternehmen mit KI-optimierten Blog-Artikeln.",
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
