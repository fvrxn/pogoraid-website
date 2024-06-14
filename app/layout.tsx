// next imports
import type { Metadata } from "next";

// style imports
import "./globals.css";

// vercel imports
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata: Metadata = {
  title: "Pokemon Go Raid Generator - erstelle und teile Raid-Nachrichten | PogoRaid.de",
  description: "Mit dem Pokemon Go Raid Generator von PogoRaid.de kannst du schnell und einfach einheitliche Raid-Nachrichten erstellen. Folge den einfachen Schritten, kopiere die Nachricht in deine Zwischenablage und teile sie direkt auf WhatsApp. Perfekt für Trainer, die klare und effektive Raid-Einladungen verschicken wollen.",
  keywords: "pokemon go raid generator, raid nachrichten erstellen, pokemon go raid einladungen, whatsapp raid nachrichten, raid generator für pokemon go, einheitliche raid nachrichten, raid einladungen teilen, pokemon go raids planen, pokemon go raids teilen, raid einladung whatsapp, pokemon go raid hilfe",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>
        <div className="bg-black mx-5 pt-3 mb-5">
            {children}
            <Analytics/>
            <SpeedInsights/>
        </div>
      </body>
    </html>
  );
}
