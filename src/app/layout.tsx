import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Serenity Spa - Odnajdź Swój Wewnętrzny Spokój",
  description: "Doświadcz najwyższego poziomu relaksu i odnowy w Serenity Spa. Profesjonalni terapeuci, luksusowe zabiegi wellness i spokojna atmosfera czekają na Ciebie.",
  keywords: "spa, masaż, wellness, relaks, uroda, terapia, aromaterapia, gorące kamienie, zabiegi na twarz",
  authors: [{ name: "Serenity Spa" }],
  openGraph: {
    title: "Serenity Spa - Odnajdź Swój Wewnętrzny Spokój",
    description: "Doświadcz najwyższego poziomu relaksu i odnowy w naszym luksusowym spa",
    type: "website",
    locale: "pl_PL",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
