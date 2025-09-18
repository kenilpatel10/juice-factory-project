import Image from "next/image"
import { Heart, Leaf, Users, Award, Star } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us - Our Story & Mission",
  description:
    "Learn about Juice Factory's mission to provide healthy, fresh food and juices. Meet our team and discover our story of bringing fresh, nutritious meals to your doorstep.",
  openGraph: {
    title: "About Juice Factory - Our Story & Mission",
    description:
      "Learn about our mission to provide healthy, fresh food and juices. Meet our team and discover our story.",
  },
}

const values = [
  {
    icon: Leaf,
    title: "Daily Fresh & Natural",
    description: "We source only the finest quality ingredients, ensuring every product is fresh and nutritious.",
    color: "from-green-400 to-green-600",
  },
  {
    icon: Heart,
    title: "Health First",
    description: "Your health is our priority. Every recipe is crafted with wellness and nutrition in mind.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: Users,
    title: "Community Focused",
    description: "We believe in supporting our local community and building lasting relationships with our customers.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "We maintain the highest standards of quality in everything we do, from ingredients to service.",
    color: "from-orange-400 to-orange-600",
  },
]

const team = [
  {
    name: "Sarah Martinez",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Nutritionist with 10+ years of experience in healthy living and fresh food.",
  },
  {
    name: "David Chen",
    role: "Head Chef",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Culinary expert specializing in fresh, healthy cuisine and innovative juice blends.",
  },
  {
    name: "Maria Rodriguez",
    role: "Operations Manager",
    image: "/placeholder.svg?height=300&width=300",
    bio: "Ensures smooth operations and maintains our high standards of quality and service.",
  },
]

const achievements = [
  { icon: Star, number: "4.9/5", label: "Customer Rating" },
  { icon: Users, number: "10,000+", label: "Happy Customers" },
  { icon: Award, number: "50+", label: "Awards Won" },
  { icon: Leaf, number: "Daily", label: "Fresh Made" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-white animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Juice Factory</h1>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto leading-relaxed">
              We're passionate about bringing you the freshest, healthiest food and juices. Our mission is to make
              healthy living accessible, delicious, and convenient for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* <section className="py-16 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 flex items-center justify-center">
                  <achievement.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{achievement.number}</div>
                <div className="text-gray-600 dark:text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Story Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Our <span className="gradient-text">Story</span>
              </h2>
              <div className="space-y-6 text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                <p>
                  Juice Factory was born from a simple belief: everyone deserves access to freshly prepared, healthy food that
                  doesn't compromise on taste. Founded in 2014, we started as a small
                  juice bar with a big vision.
                </p>
                <p>
                  What began as a passion project to help friends and family eat healthier has grown into a thriving
                  business that serves thousands of customers daily. We've expanded our menu to include not just fresh
                  juices, but also nutritious salads and wraps that fuel your body and satisfy your taste buds.
                </p>
                <p>
                  Today, we're proud to be your trusted partner in healthy living, delivering farm-quality ingredients and
                  carefully crafted meals right to your door.
                </p>
              </div>
            </div>
            <div className="relative animate-fade-in-right">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src="/images/company.webp?height=600&width=600"
                  alt="Juice Factory story - Fresh ingredients and preparation"
                  width={600}
                  height={600}
                  className="w-full h-96 lg:h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              These core values guide everything we do and shape how we serve our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-8 card card-hover animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${value.color} flex items-center justify-center shadow-lg`}
                >
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The passionate people behind Juice Factory who make healthy living delicious
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {team.map((member, index) => (
              <div
                key={index}
                className="text-center card card-hover p-8 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={`${member.name} - ${member.role}`}
                    width={200}
                    height={200}
                    className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
                  />
                  <div className="absolute inset-0 w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-orange-400/20 to-pink-400/20"></div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="gradient-text font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Healthy Community</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Ready to start your journey to better health? Explore our menu and taste the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/menu" className="btn-secondary bg-white text-orange-600 hover:bg-orange-50">
              View Menu
            </Link>
            <Link href="/contact" className="btn-ghost text-white border-white hover:bg-white/10">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
