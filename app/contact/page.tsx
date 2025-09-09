import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us - Get in Touch",
  description:
    "Get in touch with Juice Factory. Find our location, hours, and contact information. We'd love to hear from you and help with your healthy lifestyle journey!",
  openGraph: {
    title: "Contact Juice Factory - Get in Touch",
    description: "Get in touch with us. Find our location, hours, and contact information.",
  },
}

const contactInfo = [
  {
    icon: MapPin,
    title: "Visit Us",
    details: ["NK02, Juice Factory, Sylvia Park shopping centre", "286 Mt Wellington Highway, Auckland"],
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: Phone,
    title: "Call Us",
    details: ["+64 21 207 6556", "Mon-Sun: 9AM-9PM"],
    color: "from-green-400 to-green-600",
  },
  {
    icon: Mail,
    title: "Email Us",
    details: ["prakash.patel310@gmail.com", "support@juicefactory.com"],
    color: "from-orange-400 to-orange-600",
  },
]

const businessHours = [
  { day: "Monday", hours: "9:00 AM - 7:00 PM" },
  { day: "Tuesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Wednesday", hours: "9:00 AM - 7:00 PM" },
  { day: "Thursday", hours: "9:00 AM - 9:00 PM" },
  { day: "Friday", hours: "9:00 AM - 9:00 PM" },
  { day: "Saturday", hours: "9:00 AM - 7:00 PM" },
  { day: "Sunday", hours: "9:00 AM - 7:00 PM" },
]

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-orange-600 to-pink-600 overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=&quot;60&quot; height=&quot;60&quot; viewBox=&quot;0 0 60 60&quot; xmlns=&quot;http://www.w3.org/2000/svg&quot;%3E%3Cg fill=&quot;none&quot; fillRule=&quot;evenodd&quot;%3E%3Cg fill=&quot;%23ffffff&quot; fillOpacity=&quot;0.1&quot;%3E%3Ccircle cx=&quot;30&quot; cy=&quot;30&quot; r=&quot;4&quot;/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              We'd love to hear from you! Get in touch with any questions, feedback, or just to say hello.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="card card-hover p-8 text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${info.color} flex items-center justify-center shadow-lg`}
                >
                  <info.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">{info.title}</h3>
                <div className="space-y-2">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-gray-600 dark:text-gray-300">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="animate-fade-in-left">
            <div className="card p-8 lg:p-12">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center mr-4">
                  <Send className="h-6 w-6 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Send us a Message</h2>
              </div>

              <form className="space-y-6" role="form" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="lastName"
                      className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      aria-required="true"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Question</option>
                    <option value="feedback">Feedback</option>
                    <option value="catering">Catering Services</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    aria-required="true"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300 resize-vertical"
                    placeholder="Tell us how we can help you..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primary w-full text-lg py-4">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-fade-in-right">
            {/* Business Hours */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Business Hours</h3>
              </div>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-gray-200 dark:border-gray-700 last:border-b-0"
                  >
                    <span className="font-semibold text-gray-900 dark:text-white">{schedule.day}</span>
                    <span className="text-gray-600 dark:text-gray-300">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="card p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Quick Contact</h3>
              </div>
              <div className="space-y-4">
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  Need immediate assistance? We're here to help! Reach out through any of these channels:
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+6421207655"
                    className="flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300"
                  >
                    <Phone className="h-5 w-5 mr-3" />
                    Call us: +64 21 207 6556
                  </a>
                  <a
                    href="https://wa.me/64212076556"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300"
                  >
                    <MessageCircle className="h-5 w-5 mr-3" />
                    WhatsApp: +64 21 207 6556
                  </a>
                  <a
                    href="mailto:prakash.patel310@gmail.com"
                    className="flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300"
                  >
                    <Mail className="h-5 w-5 mr-3" />
                    Email: prakash.patel310@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="card p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center">
                <MapPin className="h-6 w-6 text-orange-500 mr-3" />
                Find Us
              </h3>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6380.054449399366!2d174.83500384914345!3d-36.91361346068903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d49469b55bc6f%3A0x204e7db6f136d9da!2sJuice%20Factory!5e0!3m2!1sen!2sin!4v1757435563879!5m2!1sen!2sin"
                  width="100%"
                  height="400"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full"
                  title="Juice Factory Location - Sylvia Park Shopping Centre"
                ></iframe>
              </div>
              <div className="mt-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  <strong>Address:</strong> NK02, Juice Factory, Sylvia Park shopping centre
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                  286 Mt Wellington Highway, Mount Wellington, Auckland 1060
                </p>
                <a
                  href="https://www.google.com/maps/dir//New+Zealand,+Auckland,+Mount+Wellington,+Juice+Factory/@-36.914172,174.840822,15z/data=!4m8!4m7!1m0!1m5!1m1!1s0x6d0d49469b55bc6f:0x204e7db6f136d9da!2m2!1d174.8408216!2d-36.9141719?hl=en&entry=ttu&g_ep=EgoyMDI1MDkwMy4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-300 text-sm font-semibold mt-2"
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Get Directions on Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Order?</h2>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Don't wait! Start your healthy journey today with our fresh, organic juices and meals.
          </p>
          <Link href="/menu" className="btn-secondary bg-white text-orange-600 hover:bg-orange-50 text-lg px-8 py-4">
            View Our Menu
          </Link>
        </div>
      </section>
    </div>
  )
}
