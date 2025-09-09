import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo.png"
                alt="Juice Factory"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-xl font-bold">Juice Factory</span>
            </Link>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Delivering fresh, healthy juices and food made with organic ingredients. Nourish your body with nature's
              best from Juice Factory.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors touch-manipulation" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors touch-manipulation" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-white cursor-pointer transition-colors touch-manipulation" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/menu"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 block"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 block"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base py-1 block"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300 text-sm sm:text-base">
              <p>NK02, Juice Factory, Sylvia Park shopping centre</p>
              <p>286 Mt Wellington Highway, Auckland</p>
              <p>
                <a href="tel:+642120765" className="hover:text-white transition-colors">
                  Phone: +64 21 207 6556
                </a>
              </p>
              <p>
                <a href="mailto:prakash.patel310@gmail.com" className="hover:text-white transition-colors">
                  Email: prakash.patel310@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 sm:pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 Juice Factory. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
