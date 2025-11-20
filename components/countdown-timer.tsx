"use client"

import { useState, useEffect } from "react"

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const eventDate = new Date("2025-11-22T00:00:00").getTime()
      const now = new Date().getTime()
      const difference = eventDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)
    return () => clearInterval(timer)
  }, [])

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center gap-2">
      <div className="w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
        <span className="text-2xl md:text-3xl font-bold text-white">{String(value).padStart(2, "0")}</span>
      </div>
      <span className="text-xs md:text-sm font-semibold text-gray-300 uppercase">{label}</span>
    </div>
  )

  return (
    <div className="flex gap-3 md:gap-4 items-center justify-center md:justify-start flex-wrap">
      <TimeUnit value={timeLeft.days} label="Days" />
      <span className="text-2xl md:text-3xl font-bold text-secondary/60">:</span>
      <TimeUnit value={timeLeft.hours} label="Hours" />
      <span className="text-2xl md:text-3xl font-bold text-secondary/60">:</span>
      <TimeUnit value={timeLeft.minutes} label="Minutes" />
      <span className="text-2xl md:text-3xl font-bold text-secondary/60">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
