import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Home",
  description: "Homepage for my Next.js Project Sandbox",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        <Header></Header>
        {/* I'm putting a container here to make sure the page content on each page is consistently formatted */}
        <div className="flex flex-col max-w-4xl min-w-4xl mx-auto px-4 flex-1">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
