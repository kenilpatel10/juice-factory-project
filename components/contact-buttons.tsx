"use client"

import { MessageCircle, Mail, Package, ShoppingCart } from "lucide-react"

interface ContactButtonsProps {
  productName: string
  productPrice: string
}

export default function ContactButtons({ productName, productPrice }: ContactButtonsProps) {
  const whatsappNumber = "64212076556" // WhatsApp business number (format: country code + number without +)
  const contactEmail = "prakash.patel310@gmail.com" // Juice Factory contact email

  const handleOrderOnline = () => {
    const message = `Hi! I'd like to order: ${productName} (${productPrice}). Please let me know the availability and delivery details.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleBulkOrder = () => {
    const message = `Hi! I'm interested in placing a bulk order for: ${productName}. Please provide bulk pricing and minimum order quantities.`
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  const handleEmailContact = () => {
    const subject = `Order Inquiry - ${productName}`
    const body = `Hi,\n\nI'm interested in ordering: ${productName} (${productPrice}).\n\nPlease provide more details about:\n- Availability\n- Delivery options\n- Payment methods\n\nThank you!`
    const mailtoUrl = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.open(mailtoUrl)
  }

  return (
    <div className="space-y-4">
      {/* Primary Action Buttons */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={handleOrderOnline}
          className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <ShoppingCart className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Order Online
        </button>

        <button
          onClick={handleBulkOrder}
          className="flex items-center justify-center px-6 py-4 bg-gradient-to-r from-purple-500 to-purple-600 text-white font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 group"
        >
          <Package className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
          Bulk Order
        </button>
      </div>

      {/* Secondary Contact Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <button
          onClick={handleOrderOnline}
          className="flex items-center justify-center px-4 py-3 bg-white border-2 border-green-500 text-green-600 font-medium rounded-xl hover:bg-green-50 transition-all duration-300 hover:scale-105 group"
        >
          <MessageCircle className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          WhatsApp
        </button>

        <button
          onClick={handleEmailContact}
          className="flex items-center justify-center px-4 py-3 bg-white border-2 border-purple-500 text-purple-600 font-medium rounded-xl hover:bg-purple-50 transition-all duration-300 hover:scale-105 group"
        >
          <Mail className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" />
          Email Us
        </button>
      </div>
    </div>
  )
}
