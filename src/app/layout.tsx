import type { Metadata } from "next";
import "./globals.css";
import localFont from 'next/font/local';
import Navbar from "@/components/Navbar";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import { cookies } from "next/headers";
import { AdminProvider } from "@/contexts/AdminContext";

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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies()
  const isAdmin = cookieStore.get('admin_session')?.value === 'authenticated'

  return (
    <html lang="pt-br">
      <body
        className={`${bebas.variable} ${goldplay.variable} antialiased bg-[url('/images/bg.jpg')] bg-no-repeat bg-center bg-cover min-h-screen`}
        suppressHydrationWarning={true}
      >
        <AdminProvider isAdmin={isAdmin}>
          <Navbar />
          <main className="pt-[60px]">
            {children}
          </main>
          <Footer />
          <WhatsAppButton />
        </AdminProvider>
      </body>
    </html>
  );
}