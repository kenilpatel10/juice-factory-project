import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Juice Factory - Premium Fresh Juices & Healthy Food Delivered",
  description:
    "Experience premium freshly squeezed juices, healthy salads, and nutritious wraps delivered in minutes. quality ingredients, exceptional taste, and unmatched quality.",
  openGraph: {
    title: "Juice Factory - Premium Fresh Juices & Healthy Food",
    description: "Experience premium freshly squeezed juices, healthy salads, and nutritious wraps delivered in minutes.",
    images: ["/images/hero-fruits-background.jpeg"],
  },
}

export default function HomePage() {
  return <ClientPage />
}
