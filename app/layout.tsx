// next imports
import type { Metadata } from "next";

// react imports
import { useState } from "react";

// style imports
import "./globals.css";

// vercel imports
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

// app context imports
import { AppContextProvider } from "@/app/context/AppContext";

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


  const [selectedBoss, setSelectedBoss] = useState("")



  return (
    <html lang="de">
      <body className="flex justify-center min-h-screen">
        <AppContextProvider>
          <div className="bg-black mx-5 pt-3 mb-5 max-w-[400px]">
              {children}
              <Analytics/>
              <SpeedInsights/>
          </div>
        </AppContextProvider>
      </body>
    </html>
  );
} 
