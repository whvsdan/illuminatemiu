import Image from "next/image"

export default function About() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-balance mb-6">
            The Vision: From <span className="text-secondary">Local</span> Ambition to{" "}
            <span className="text-accent">Global</span> Impact
          </h2>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          <div>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              In a rapidly evolving world, students need more than just good grades; they need a clear direction,
              genuine exposure, and practical empowerment.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-muted-foreground mb-6">
              <strong className="text-foreground">IlluminateMIU</strong> is a pivotal one-day event engineered to bridge
              the gap between classroom learning and real-world readiness.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-foreground font-semibold">
              This is where academic excellence meets professional pathways, where we inspire you to see yourself as a
              builder of purpose, not just a learner.
            </p>

            <div className="mt-12 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/images/event-attendees-2.png"
                alt="Students at IlluminateMIU event"
                width={500}
                height={350}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Objectives */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-primary">We Aim To:</h3>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: "✨",
                  title: "Inspire",
                  desc: "Real-world success stories in technology, science, and entrepreneurship.",
                },
                {
                  icon: "⚡",
                  title: "Equip",
                  desc: "Strategies for academic mastery, leadership, and proactive growth.",
                },
                {
                  icon: "🔍",
                  title: "Expose",
                  desc: "Essential opportunities in research, scholarship, and innovation.",
                },
                { icon: "🌱", title: "Nurture", desc: "Holistic personal development from first year to graduation." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-3xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h4 className="font-bold text-lg text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
