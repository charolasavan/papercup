import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsAppChat from "../components/WhatsAppChat";

const inter = Inter({ subsets: ["latin"], display: "swap" });

/* ================================
   ✅ GLOBAL SEO METADATA
================================ */
export const metadata = {
  title: {
    default:
      "Paper Cup Manufacturer & Exporter in India | Fortis International",
    template: "%s | Fortis International",
  },

  description:
    "Fortis International is a leading ISO-certified paper cup manufacturer & exporter in India. We produce eco-friendly, biodegradable paper cups with custom printing for cafes, hotels, restaurants & distributors worldwide. Bulk supply & export to 5+ countries.",

  keywords: [
    "paper cup manufacturer",
    "paper cup manufacturer india",
    "paper cup exporter india",
    "eco friendly paper cups",
    "biodegradable paper cups",
    "custom printed paper cups",
    "disposable paper cups wholesale",
    "paper cup factory gujarat",
    "bulk paper cups supplier",
    "single wall paper cups",
    "double wall paper cups",
    "ripple wall paper cups",
    "sustainable packaging manufacturer",
    "import export paper cups",
    "Fortis International",
  ],

  metadataBase: new URL("https://fortisinternational1.com/"),

  authors: [{ name: "Fortis International" }],
  creator: "Fortis International",
  publisher: "Fortis International",

  alternates: {
    canonical: "https://fortisinternational1.com/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: "BkeYd-0tBAoAZxknP0ce33a7EYP0ItWn6uO16bmqLAw",
  },

  openGraph: {
    type: "website",
    url: "https://fortisinternational1.com/",
    siteName: "Fortis International",
    title:
      "Paper Cup Manufacturer & Exporter in India | Fortis International",
    description:
      "ISO-certified manufacturer of eco-friendly paper cups in India. Custom printed disposable paper cups with bulk pricing & global export.",
    locale: "en_US",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt:
          "Fortis International – Paper Cup Manufacturer & Exporter in India",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Eco-Friendly Paper Cup Manufacturer & Exporter | Fortis International",
    description:
      "Bulk paper cup manufacturer in India supplying eco-friendly, biodegradable & custom printed paper cups worldwide.",
    images: ["/og-image.jpg"],
  },

  category: "Manufacturing",
};

/* ================================
   ✅ STRUCTURED DATA (SEO GOLD)
================================ */
const schemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://fortisinternational1.com/#organization",
      name: "Fortis International",
      url: "https://fortisinternational1.com/",
      logo: "https://fortisinternational1.com/logo.png",
      description:
        "ISO-certified manufacturer and exporter of eco-friendly disposable paper cups from India.",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-95121-21018",
        contactType: "Sales",
        email: "fortisinternational4@gmail.com",
        areaServed: ["IN", "US", "AE", "GB"],
        availableLanguage: ["English", "Hindi"],
      },
    },

    {
      "@type": "LocalBusiness",
      "@id": "https://fortisinternational1.com/#localbusiness",
      name: "Fortis International",
      image: "https://fortisinternational1.com/og-image.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress:
          "2nd Floor, Super Market 2, Shop 6, Mahendranagar",
        addressLocality: "Morbi",
        addressRegion: "Gujarat",
        postalCode: "363642",
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 22.8173,
        longitude: 70.8378,
      },
      url: "https://fortisinternational1.com/",
      telephone: "+91-95121-21018",
      priceRange: "$$",
      openingHours: "Mo-Sa 10:00-18:00",
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: "4.8",
        reviewCount: "127",
      },
    },

    {
      "@type": "Product",
      "@id": "https://fortisinternational1.com/#paper-cups",
      name: "Eco-Friendly Paper Cups",
      description:
        "Biodegradable disposable paper cups available in single wall, double wall and ripple wall designs with custom branding.",
      brand: {
        "@type": "Brand",
        name: "Fortis International",
      },
      manufacturer: {
        "@id": "https://fortisinternational1.com/#organization",
      },
    },

    {
      "@type": "WebSite",
      "@id": "https://fortisinternational1.com/#website",
      url: "https://fortisinternational1.com/",
      name: "Fortis International",
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://fortisinternational1.com/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://fortisinternational1.com/#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "https://fortisinternational1.com/",
        },
      ],
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* ✅ JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />

        {/* ✅ Branding */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />

        {/* ✅ Performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>

      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppChat />
      </body>
    </html>
  );
}
