import './globals.css';
import { Inter } from 'next/font/google';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppChat from '../components/WhatsAppChat';
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

// Inter font
const inter = Inter({ subsets: ['latin'] });

// ✅ SEO-Optimized Metadata for Fortis International
export const metadata = {
  title: "Fortis International | Premium Paper Cups Manufacturer & Global Exporter",
  description:
    "Fortis International is a leading manufacturer and exporter of eco-friendly paper cups. We deliver premium-quality, sustainable, and customizable paper cup solutions for global businesses.",
  keywords: [
    "paper cup manufacturer",
    "paper cup exporter",
    "eco-friendly paper cups",
    "biodegradable paper cups",
    "custom printed paper cups",
    "paper cup factory India",
    "Fortis International",
    "sustainable packaging solutions"
  ],
  metadataBase: new URL("https://www.fortisinternational.com"),
  openGraph: {
    title: "Fortis International – Eco-Friendly Paper Cups Manufacturer & Exporter",
    description:
      "Trusted globally for eco-friendly, premium-quality paper cups with custom printing and sustainable manufacturing solutions.",
    url: "https://www.fortisinternational.com",
    siteName: "Fortis International",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortis International – Paper Cups Manufacturer",
      }
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortis International – Sustainable Paper Cups Manufacturer",
    description:
      "Exporting premium eco-friendly paper cups worldwide. High-quality custom printing & sustainable production.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://www.fortisinternational.com",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      maxSnippet: -1,
      maxImagePreview: "large",
      maxVideoPreview: -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Header />
          
          {children}

          <Footer />
          <WhatsAppChat />

          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
