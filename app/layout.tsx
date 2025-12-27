import type { Metadata } from "next";
import { Public_Sans } from "next/font/google";
import "./globals.css";

const publicSans = Public_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-public-sans",
});

export const metadata: Metadata = {
  title: "Alegria de Viver",
  description:
    "Acolhemos quem precisa e construímos um futuro melhor através da sua generosidade. Junte-se a nós nesta missão de amor ao próximo.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="light">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body
        className={`${publicSans.variable} bg-background-light text-text-main font-display antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
