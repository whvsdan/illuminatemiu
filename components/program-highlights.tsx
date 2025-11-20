export default function ProgramHighlights() {
  const highlights = [
    {
      title: "Future-Ready Conversations",
      description: "Exploring the frontiers of AI, research, and innovation.",
      icon: "🚀",
    },
    {
      title: "Academic Comeback Talks",
      description: "Hear top students share the strategies and mindset required for academic success.",
      icon: "📚",
    },
    {
      title: "The Creative Showcase",
      description: "Featuring a powerful spoken word performance by Abdulrazaq Salihu.",
      icon: "🎭",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-balance mb-16">
          Beyond the Session: <span className="text-secondary">The IlluminateMIU</span> Experience
        </h2>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, i) => (
            <div key={i} className="group">
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4 group-hover:text-secondary transition-colors">
                {highlight.title}
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
