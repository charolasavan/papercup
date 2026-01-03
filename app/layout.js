import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsAppChat";
import ScrollWrapper from "../components/ScrollWrapper";

const inter = Inter({ subsets: ["latin"] });

// ✅ GLOBAL SEO SETTINGS
export const metadata = {
  title: {
    default: "Fortis International | Paper Cups Manufacturer & Exporter India",
    template: "%s | Fortis International",
  },
  description:
    "Leading paper cup manufacturer & exporter in India. ISO certified eco-friendly paper cups with custom printing. Serving 5+ countries. MOQ available. Get quote now!",
  keywords: [
    "paper cup manufacturer",
    "paper cup exporter India",
    "eco-friendly paper cups",
    "biodegradable paper cups",
    "custom printed paper cups",
    "paper cup factory India",
    "disposable paper cups wholesale",
    "Fortis International",
    "sustainable packaging solutions",
    "paper cup supplier",
    "bulk paper cups",
    "single wall paper cups",
    "double wall paper cups",
    "ripple wall paper cups",
  ],
  metadataBase: new URL("https://eco-papercup.vercel.app"),
  authors: [{ name: "Fortis International" }],
  openGraph: {
    title:
      "Fortis International – Premium Paper Cups Manufacturer & Global Exporter",
    description:
      "ISO certified manufacturer of eco-friendly paper cups. Custom printing, fast delivery to 5+ countries. Single, double & ripple wall cups. Request quote today!",
    url: "https://eco-papercup.vercel.app",
    siteName: "Fortis International",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Fortis International – Eco-Friendly Paper Cups Manufacturer & Exporter",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fortis International – Eco-Friendly Paper Cups Manufacturer",
    description:
      "Leading paper cup manufacturer in India. Custom printing, ISO certified, eco-friendly solutions for 5+ countries.",
    images: ["/og-image.jpg"],
    creator: "@FortisIntl", // Add your handle if available
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
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  verification: {
    google: "Wzyy88U-bGUIhTdMHsnnGP_QZDIrPapeh0lKmi1JDHOI",
  },
  category: "Manufacturing",
};

// ✅ STRUCTURED DATA (JSON-LD)
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://eco-papercup.vercel.app/#organization",
      name: "Fortis International",
      url: "https://eco-papercup.vercel.app",
      logo: {
        "@type": "ImageObject",
        url: "https://eco-papercup.vercel.app/logo.png",
        width: 250,
        height: 60,
      },
      description:
        "Leading manufacturer and exporter of eco-friendly paper cups serving 5+ countries worldwide",
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+91-95121-21018",
          contactType: "sales",
          email: "fortisinternational4@gmail.com",
          areaServed: ["IN", "US", "AE", "GB"],
          availableLanguage: ["en", "hi"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://eco-papercup.vercel.app/#website",
      url: "https://eco-papercup.vercel.app",
      name: "Fortis International - Paper Cups Manufacturer",
      description: "Premium eco-friendly paper cups manufacturer and exporter",
      publisher: { "@id": "https://eco-papercup.vercel.app/#organization" },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://eco-papercup.vercel.app/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@type": "Manufacturer",
      "@id": "https://eco-papercup.vercel.app/#manufacturer",
      name: "Fortis International",
      brand: { "@type": "Brand", name: "Fortis International" },
      image: "https://eco-papercup.vercel.app/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2nd Floor, Super Market 2, Shop 6, Mahendranagar",
        addressLocality: "Morbi",
        addressRegion: "Gujarat",
        postalCode: "363642",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: "22.8173", longitude: "70.8378" },
      telephone: "+91-95121-21018",
      email: "fortisinternational4@gmail.com",
      url: "https://eco-papercup.vercel.app",
      priceRange: "$$",
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
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
        bestRating: "5",
      },
    },
    {
      "@type": "Product",
      "@id": "https://eco-papercup.vercel.app/#product",
      name: "Eco-Friendly Paper Cups",
      description:
        "Premium quality biodegradable paper cups available in single wall, double wall, and ripple wall designs",
      brand: { "@type": "Brand", name: "Fortis International" },
      manufacturer: { "@id": "https://eco-papercup.vercel.app/#manufacturer" },
      // offers: {
      //   "@type": "AggregateOffer",
      //   priceCurrency: "USD",
      //   availability: "https://schema.org/InStock",
      //   offerCount: "6",
      // },
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://eco-papercup.vercel.app/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://eco-papercup.vercel.app",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ Schema Markup */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />

        {/* ✅ Performance & Branding */}
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="manifest" href="/manifest.json" /> */}
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Preconnect for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className={inter.className}>
        {/* <ScrollWrapper> */}


          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppChat />
        {/* </ScrollWrapper> */}
        {/* Optional: Enable when needed */}
        {/* <Analytics /> */}
        {/* <SpeedInsights /> */}
      </body>
    </html>
  );
}
