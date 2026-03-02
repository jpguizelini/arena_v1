import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import Navbar from "@/components/Navbar";

const bebas = localFont({
  src: '../assets/fonts/BebasNeue-Regular.ttf',
  variable: '--font-bebas',
  display: 'swap',
})

const goldplay = localFont({
  src: [
    { path: '../assets/fonts/Goldplay-Regular.ttf', weight: '400', style: 'normal' },
    { path: '../assets/fonts/Goldplay-Medium.ttf', weight: '500', style: 'normal' },
    { path: '../assets/fonts/Goldplay-SemiBold.ttf', weight: '600', style: 'normal' },
    { path: '../assets/fonts/Goldplay-Bold.ttf', weight: '700', style: 'normal' },
    { path: '../assets/fonts/Goldplay-Black.ttf', weight: '900', style: 'normal' },
  ],
  variable: '--font-goldplay',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "I´mídia",
  description: "",
  icons: {
    icon: '/images/logo.png',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${bebas.variable} ${goldplay.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        <Navbar />
        <main className="pt-[60px]">
          {children}
        </main>
      </body>
    </html>
  );
}
