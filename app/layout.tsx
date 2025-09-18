import type React from "react"
import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import ModernHeader from "@/components/modern-header"
import Footer from "@/components/footer"
import ScrollProgress from "@/components/scroll-progress"
import FloatingElements from "@/components/floating-elements"

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f97316" },
    { media: "(prefers-color-scheme: dark)", color: "#ea580c" },
  ],
}

export const metadata: Metadata = {
  metadataBase: new URL("https://juicefactory.com"),
  title: {
    default: "Juice Factory - Premium Fresh Juices & Healthy Food Delivered",
    template: "%s | Juice Factory - Fresh & Healthy",
  },
  description:
    "Experience premium fresh juices, healthy salads, and nutritious wraps delivered in minutes. quality ingredients, exceptional taste, and unmatched quality from Juice Factory. Order now for healthy living!",
  keywords: [
    "fresh juice delivery",
    "fresh smoothies",
    "healthy food delivery",
    "cold-pressed juice",
    "premium nutrition",
    "wellness drinks",
    "juice factory",
    "quality ingredients",
    "healthy lifestyle",
    "natural juices",
    "fruit smoothies",
    "vegetable juices",
    "detox drinks",
    "energy boosters",
  ],
  authors: [{ name: "Juice Factory", url: "https://juicefactory.com" }],
  creator: "Juice Factory",
  publisher: "Juice Factory",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: "food",
  classification: "business",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://juicefactory.com",
    siteName: "Juice Factory",
    title: "Juice Factory - Premium Fresh Juices & Healthy Food Delivered",
    description:
      "Experience premium fresh juices, healthy salads, and nutritious wraps delivered in minutes. quality ingredients for your healthy lifestyle.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Juice Factory - Freshly Squeezed Natural Juices and Healthy Food",
        type: "image/jpeg",
      },
      {
        url: "/images/hero-fruits-background.jpeg",
        width: 1920,
        height: 1080,
        alt: "Fresh Fruits and Vegetables - Juice Factory Ingredients",
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@juicefactory",
    creator: "@juicefactory",
    title: "Juice Factory - Premium Fresh Juices & Healthy Food",
    description:
      "Experience premium fresh juices, healthy salads, and nutritious wraps delivered in minutes. Fresh ingredients for healthy living.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://juicefactory.com",
    languages: {
      "en-US": "https://juicefactory.com",
      "es-ES": "https://juicefactory.com/es",
    },
  },
  other: {
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Juice Factory",
    "application-name": "Juice Factory",
    "msapplication-TileColor": "#f97316",
    "msapplication-config": "/browserconfig.xml",
  },
    generator: 'v0.dev'
}

// JSON-LD Structured Data
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Juice Factory",
  description: "Premium fresh juices, healthy salads, and nutritious wraps made from quality ingredients.",
  url: "https://juicefactory.com",
  logo: "https://juicefactory.com/juice-factory-logo.jpeg",
  image: "https://juicefactory.com/images/hero-fruits-background.jpeg",
  telephone: "+64 21 207 6556",
  email: "prakash.patel310@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "NK02, Juice Factory, Sylvia Park shopping centre, 286 Mt Wellington Highway",
    addressLocality: "Auckland",
    addressRegion: "Auckland",
    postalCode: "1060",
    addressCountry: "NZ",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "-36.9147",
    longitude: "174.8427",
  },
  openingHours: ["Mo-Su 07:00-22:00"],
  servesCuisine: ["Healthy Food", "Juices", "Smoothies", "Healthy Food"],
  priceRange: "$$",
  acceptsReservations: false,
  hasDeliveryService: true,
  paymentAccepted: ["Cash", "Credit Card", "Debit Card", "Mobile Payment"],
  currenciesAccepted: "USD",
  sameAs: [
    "https://www.facebook.com/juicefactory",
    "https://www.instagram.com/juicefactory",
    "https://www.twitter.com/juicefactory",
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className="antialiased">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <ScrollProgress />
            <FloatingElements />
            <ModernHeader />
            <main role="main" className="flex-1 pt-20">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
