import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata: Metadata = {
  title: "Bienvenue dans BuilderMania",
  description: "La plateforme ultime pour concrétiser vos idées grâce à la collaboration avec des talents exceptionnels.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={``}
      >
        <Navbar />
        <main className="w-full max-w-[80vw] mx-auto px-4 md:px-6">
          {children}
          <Analytics />
          <SpeedInsights />
          </main>
        <Footer />
      </body>
    </html>
  );
}
