export default function Panels() {
  const panels = [
    {
      title: "Digital Leverage & The Creator Economy",
      panelists: ["Ahmed XM", "BrahamTech", "Entrepreneur (TBA)", "Student Creator"],
      goal: "A practical exploration of monetization, digital leverage, and building a sustainable presence in the creator economy.",
    },
    {
      title: "From Classroom to Career Capital",
      panelists: ["Jonathan Agbotha", "Fatima Bukar", "Product Manager (TBA)", "Entrepreneur (TBA)"],
      goal: "Practical guidance for building career-ready portfolios, accessing high-value internships, and forging powerful collaborations.",
    },
  ]

  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4">
          Collaborative <span className="text-secondary">Intelligence</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16">The Panel Sessions</p>

        {/* Panels */}
        <div className="space-y-12">
          {panels.map((panel, i) => (
            <div
              key={i}
              className="bg-background rounded-2xl border-2 border-border hover:border-secondary transition-colors p-8 md:p-12"
            >
              <h3 className="text-3xl font-bold text-foreground mb-6">{panel.title}</h3>

              <div className="mb-8">
                <p className="text-muted-foreground font-semibold mb-3">PANELISTS</p>
                <div className="flex flex-wrap gap-3">
                  {panel.panelists.map((panelist, j) => (
                    <span key={j} className="bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-medium">
                      {panelist}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-muted-foreground font-semibold mb-2">GOAL</p>
                <p className="text-lg leading-relaxed text-foreground">{panel.goal}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
