import './globals.css'; // Global styles
import { Inter } from 'next/font/google'; // Font import
import Header from '@/components/Header'; // Header component import
import Footer from '@/components/Footer'; // Footer component import
import Page from './page'
// Inter font settings
const inter = Inter({ subsets: ['latin'] });

// Metadata for the page (this part would typically go in the Head tag, not used in JSX directly)
export const metadata = {
  title: 'EcoCups Global - Premium Paper Cup Manufacturer & Exporter',
  description: 'Leading manufacturer and exporter of premium quality eco-friendly paper cups. Serving businesses worldwide with sustainable packaging solutions.',
  openGraph: {
    title: 'EcoCups Global',
    description: 'Leading manufacturer and exporter of premium eco-friendly paper cups.',
    url: 'https://www.ecocups-global.com',
    images: [
      { url: 'https://www.ecocups-global.com/images/social-image.jpg', width: 1200, height: 630 }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EcoCups Global',
    description: 'Leading manufacturer and exporter of premium eco-friendly paper cups.',
    image: 'https://www.ecocups-global.com/images/social-image.jpg',
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* {children} */}
        <Page />

        <Footer />
      </body>
    </html>
  );
}
