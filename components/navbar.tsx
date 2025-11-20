"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Speakers", href: "/speakers" },
    { label: "Program", href: "/program" },
    { label: "Panels", href: "/panels" },
    { label: "Logistics", href: "/logistics" },
  ]

  const handleRegister = () => {
    window.open("https://forms.gle/AZYuhxy1mc6RKXen9", "_blank")
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src="/images/illuminate-1-removebg-preview.png"
              alt="Illuminate MIU"
              width={200}
              height={50}
              className="h-12 w-auto hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-primary hover:bg-yellow-50 rounded-lg transition-all duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex gap-3">
            <button
              onClick={handleRegister}
              className="px-6 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 animate-in slide-in-from-top-2">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-primary hover:bg-yellow-50 rounded-lg transition-all"
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleRegister}
                className="w-full mt-2 px-4 py-2.5 bg-gradient-to-r from-primary to-primary/80 text-white text-sm font-semibold rounded-lg hover:shadow-lg transition-all"
              >
                Register Now
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
