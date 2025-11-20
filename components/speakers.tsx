"use client"

import { useState } from "react"
import Image from "next/image"

export default function Speakers() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const speakers = [
    {
      name: "Dr. Shari Babajide",
      title: "Keynote Speaker",
      topic: "Breaking Out of the Local-Champion Mindset: Reaching for Global Excellence",
      angle:
        "Learn how to compete internationally through disciplined learning, publishing, and securing grants or scholarships.",
    },
    {
      name: 'Abraham "BrahamTech" Oguwche',
      title: "Keynote Speaker",
      topic: "Turning Your Creativity into Career Capital in the Digital Age",
      angle:
        "Discover how skills like writing, storytelling, and personal branding can open global doors right from campus.",
    },
    {
      name: "Fatima Bukar",
      title: "Keynote Speaker",
      topic: "Redefining Northern Narratives through Leadership, Collaboration and Advocacy",
      angle:
        "An empowering call for civic participation and self-worth, demonstrating how one voice can drive institutional and cultural change.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-balance">
            The Lineup: <span className="text-secondary">Mentors</span> & <span className="text-accent">Mindsets</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            Learn from industry leaders and thought pioneers shaping the future.
          </p>
        </div>

        <div className="mb-12 rounded-xl overflow-hidden shadow-xl h-80 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <Image
            src="/images/event-dining.png"
            alt="Event networking and dining experience"
            width={1200}
            height={400}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {speakers.map((speaker, i) => (
            <div
              key={i}
              className="group cursor-pointer h-full animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${i * 100}ms` }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative h-full bg-background rounded-xl overflow-hidden border border-border hover:border-secondary transition-all duration-300 hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-2">
                {/* Default State */}
                <div
                  className={`p-8 h-full flex flex-col justify-between transition-all duration-500 ${
                    hoveredCard === i ? "opacity-0 absolute pointer-events-none" : "opacity-100"
                  }`}
                >
                  <div>
                    <div className="h-32 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg mb-6 group-hover:shadow-lg transition-all duration-300" />
                    <h3 className="text-2xl font-bold text-foreground mb-1">{speaker.name}</h3>
                    <p className="text-secondary font-semibold mb-4">{speaker.title}</p>
                  </div>
                  <p className="text-xs text-muted-foreground font-medium">Hover to reveal insights</p>
                </div>

                {/* Hover State */}
                <div
                  className={`absolute inset-0 p-8 h-full flex flex-col justify-center bg-gradient-to-br from-secondary/15 to-accent/15 backdrop-blur-sm transition-all duration-500 ${
                    hoveredCard === i ? "opacity-100" : "opacity-0 pointer-events-none"
                  }`}
                >
                  <h4 className="text-lg font-bold text-foreground mb-3">{speaker.topic}</h4>
                  <p className="text-muted-foreground leading-relaxed text-sm">{speaker.angle}</p>
                  <div className="mt-6 flex items-center gap-2 text-secondary font-semibold text-xs">
                    <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
                    Click to learn more
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Fireside Chat Card */}
        <div className="mt-12 bg-gradient-to-r from-accent to-accent/70 rounded-xl p-8 md:p-12 text-accent-foreground hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300 hover:scale-105 transform animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <h3 className="text-3xl font-bold mb-3">Fireside Chat</h3>
          <p className="text-xl font-semibold mb-2">Product Manager (TBA)</p>
          <p className="text-lg mb-4">Turning Everyday Campus Problems into Market-Creating Solutions</p>
          <p className="opacity-90">
            A deep dive into design thinking and local innovation—learning to see challenges as entrepreneurial
            opportunities.
          </p>
        </div>
      </div>
    </section>
  )
}
