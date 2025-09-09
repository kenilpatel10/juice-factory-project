import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Juice Factory - Premium Fresh Juices & Healthy Food Delivered",
  description:
    "Experience premium fresh juices, organic salads, and nutritious wraps delivered in minutes. 100% organic ingredients, exceptional taste, and unmatched quality.",
  openGraph: {
    title: "Juice Factory - Premium Fresh Juices & Healthy Food",
    description: "Experience premium fresh juices, organic salads, and nutritious wraps delivered in minutes.",
    images: ["/images/hero-fruits-background.jpeg"],
  },
}

export default function HomePage() {
  return <ClientPage />
}
