"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import CountdownTimer from "./countdown-timer"

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleRegisterClick = () => {
    window.open("https://forms.gle/AZYuhxy1mc6RKXen9", "_blank")
  }

  return (
    <section className="relative w-full min-h-screen pt-24 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/whatsapp-20image-202025-11-14-20at-202.jpeg"
          alt="IlluminateMIU Event Flyer"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(26,51,101,.05)_25%,rgba(26,51,101,.05)_50%,transparent_50%,transparent_75%,rgba(26,51,101,.05)_75%,rgba(26,51,101,.05))] bg-[length:40px_40px]" />
      </div>

      <div className="absolute right-0 top-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
        <Image src="/images/img-1437.jpeg" alt="Event atmosphere" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/30 to-white" />
      </div>

      <div className="relative z-10 text-left px-4 md:px-8 max-w-6xl mx-auto py-20 w-full">
        <div className="mb-16 flex animate-in fade-in slide-in-from-left-4 duration-700">
          <Image
            src="/images/illuminate-1-removebg-preview.png"
            alt="Illuminate MIU Logo"
            width={280}
            height={70}
            className="w-56 h-auto md:w-72 md:h-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        <div className="space-y-8 mb-12 max-w-3xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/15 backdrop-blur-md rounded-full border border-white/30 animate-in fade-in slide-in-from-top-4 duration-700">
            <span className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
            <span className="text-xs md:text-sm font-semibold text-white uppercase tracking-widest">
              Saturday, 22 Nov 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white text-balance leading-[1.1] drop-shadow-lg animate-in fade-in slide-in-from-left-4 duration-700 delay-100">
            Transform the <span className="text-yellow-400">Academic Culture</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-md max-w-2xl animate-in fade-in slide-in-from-left-4 duration-700 delay-200">
            Join the movement shaping student creativity, innovation, and the future of work on campus. Beyond lectures.
            Beyond grades.
          </p>

          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20 mt-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
            <p className="text-white/80 text-sm font-semibold mb-6 uppercase tracking-widest">Event starts in</p>
            <CountdownTimer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 py-8 px-8 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300 hover:bg-white/15 transition-all">
          <div className="space-y-2 group cursor-pointer">
            <p className="text-xs uppercase tracking-widest text-white/70 font-bold">Event Date</p>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
              Saturday 22nd
            </p>
            <p className="text-sm text-white/70">November 2025</p>
          </div>
          <div className="space-y-2 group cursor-pointer">
            <p className="text-xs uppercase tracking-widest text-white/70 font-bold">Venue</p>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
              MIU Reception Hall
            </p>
            <p className="text-sm text-white/70">Mewar International University</p>
          </div>
          <div className="space-y-2 group cursor-pointer">
            <p className="text-xs uppercase tracking-widest text-white/70 font-bold">Ticket Price</p>
            <p className="text-2xl md:text-3xl font-bold text-yellow-400 group-hover:scale-110 transition-transform">
              FREE
            </p>
            <p className="text-sm text-white/70">Limited spots available</p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <button
            onClick={handleRegisterClick}
            className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-bold rounded-xl hover:shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center gap-2 transform"
          >
            Secure Your Spot
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
          <button
            onClick={handleRegisterClick}
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-110 active:scale-95 transform"
          >
            Register Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center gap-2">
            <span className="text-xs uppercase tracking-widest text-white/50 font-semibold">Scroll to explore</span>
            <svg className="w-6 h-6 text-white/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
