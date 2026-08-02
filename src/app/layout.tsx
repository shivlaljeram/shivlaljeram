import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import siteData from "@/data/site.json";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import MobileStickyBar from "@/components/MobileStickyBar";
import BackToTop from "@/components/BackToTop";
import StructuredData from "@/components/StructuredData";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://jsdmukhwas.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteData.seo.title,
  description: siteData.seo.description,
  openGraph: {
    title: siteData.seo.title,
    description: siteData.seo.description,
    type: "website",
    siteName: siteData.fullName,
    images: [{ url: "/images/logo.svg", width: 180, height: 48 }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.seo.title,
    description: siteData.seo.description,
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-bg-primary text-text-white">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
        <BackToTop />
        <StructuredData />
      </body>
    </html>
  );
}
