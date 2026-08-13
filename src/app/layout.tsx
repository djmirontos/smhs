import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// NOTE: metadataBase intentionally omitted — set this to the school's
// official domain once one is confirmed, then Open Graph/canonical URLs
// will resolve to absolute paths automatically.
export const metadata: Metadata = {
  title: "St. Michael's High School | Tangub City, Misamis Occidental",
  description:
    "St. Michael's High School — 3 3rd South Street, Tangub City, Northern Mindanao. A Catholic educational community serving Kindergarten, Elementary, and High School learners.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "St. Michael's High School | Tangub City, Misamis Occidental",
    description:
      "A Catholic educational community serving Kindergarten, Elementary, and High School learners in Tangub City, Misamis Occidental, Philippines.",
    type: "website",
    locale: "en_PH",
    siteName: "St. Michael's High School",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#7A263A",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-cream text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
