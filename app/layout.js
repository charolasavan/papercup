// app/layout.js

import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsAppChat";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"] });

// ✅ GLOBAL SEO
export const metadata = {
  title: "Fortis International | Premium Paper Cups Manufacturer & Global Exporter",
  description:
    "Fortis International is a trusted global manufacturer and exporter of premium quality, eco-friendly, and customizable paper cups. We provide sustainable paper cup solutions for businesses worldwide.",
  keywords: [
    "paper cup manufacturer India",
    "paper cup exporter",
    "biodegradable paper cups",
    "eco-friendly paper cups",
    "custom printed paper cups",
    "paper cup factory Gujarat",
    "sustainable packaging",
    "Fortis International",
  ],

  metadataBase: new URL("https://eco-papercup.vercel.app"),

  verification: {
    google: "Wyy88U-bGUIhTdMHsnnGP_QZDIrPapeh0lKmi1JDHOI",
  },

  openGraph: {
    title: "Fortis International – Premium Eco-Friendly Paper Cups Manufacturer",
    description:
      "High-quality eco-friendly paper cups with custom printing. Trusted global exporter delivering sustainable, durable, food-safe packaging solutions.",
    url: "https://eco-papercup.vercel.app",
    siteName: "Fortis International",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortis International Paper Cup Manufacturing",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Fortis International – Paper Cup Manufacturer & Global Exporter",
    description:
      "Leading manufacturer and exporter of premium-quality eco-friendly paper cups with custom branding solutions.",
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

// ✅ IMPROVED SCHEMA.JSON-LD
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eco-papercup.vercel.app/#organization",
      name: "Fortis International",
      url: "https://eco-papercup.vercel.app",
      logo: "https://eco-papercup.vercel.app/logo.png",
      description:
        "Fortis International is a global manufacturer and exporter of premium-quality eco-friendly paper cups.",
      sameAs: [],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91 95121 21018",
          contactType: "customer support",
          availableLanguage: ["en"],
          areaServed: "IN",
        },
      ],
    },

    {
      "@type": "WebSite",
      "@id": "https://eco-papercup.vercel.app/#website",
      url: "https://eco-papercup.vercel.app",
      name: "Fortis International",
      publisher: { "@id": "https://eco-papercup.vercel.app/#organization" },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://eco-papercup.vercel.app/#localbusiness",
      name: "Fortis International",
      image: "https://eco-papercup.vercel.app/og-image.jpg",
      url: "https://eco-papercup.vercel.app",
      telephone: "+91 95121 21018",
      email: "mailto:fortisinternational4@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, Super Market 2, Shop 6, Mahendranagar",
        addressLocality: "Morbi",
        addressRegion: "Gujarat",
        postalCode: "363642",
        addressCountry: "IN",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "10:00",
          closes: "18:00",
        },
      ],
      description:
        "Manufacturer and global exporter of eco-friendly, biodegradable, and customizable premium paper cups.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
