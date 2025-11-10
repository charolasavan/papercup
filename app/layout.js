import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsAppChat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// ✅ GLOBAL SEO SETTINGS
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
    "sustainable packaging solutions",
  ],
  metadataBase: new URL("https://eco-papercup.vercel.app"),
  openGraph: {
    title: "Fortis International – Eco-Friendly Paper Cups Manufacturer & Exporter",
    description:
      "Trusted globally for eco-friendly, premium-quality paper cups with custom printing and sustainable manufacturing solutions.",
    url: "https://eco-papercup.vercel.app",
    siteName: "Fortis International",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortis International – Paper Cups Manufacturer",
      },
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
    canonical: "https://eco-papercup.vercel.app",
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

// ✅ SCHEMA (JSON-LD) WITH BUSINESS DETAILS
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eco-papercup.vercel.app/#organization",
      "name": "Fortis International",
      "url": "https://eco-papercup.vercel.app",
      "logo": "https://eco-papercup.vercel.app/logo.png",
      "sameAs": [],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91 95121 21018",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": ["en"],
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://eco-papercup.vercel.app/#website",
      "url": "https://eco-papercup.vercel.app",
      "name": "Fortis International",
      "publisher": { "@id": "https://eco-papercup.vercel.app/#organization" },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://eco-papercup.vercel.app/#localbusiness",
      "name": "Fortis International",
      "image": "https://eco-papercup.vercel.app/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2nd Floor, Super Market 2, Shop 6, Mahendranagar",
        "addressLocality": "Morbi",
        "addressRegion": "Gujarat",
        "postalCode": "363642",
        "addressCountry": "IN",
      },
      "telephone": "+91 95121 21018",
      "email": "mailto:fortisinternational4@gmail.com",
      "url": "https://eco-papercup.vercel.app",
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          "opens": "10:00",
          "closes": "18:00",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Inject Schema Markup */}
        <meta name="google-site-verification" content="Wyy88U-bGUIhTdMHsnnGP_QZDIrPapeh0lKmi1JDHOI" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>

      <body className={inter.className}>
        <Header />

        <main>{children}</main>

        <Footer />
        <WhatsAppChat />

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
