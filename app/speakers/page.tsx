import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function SpeakersPage() {
  const speakers = [
    {
      name: "Distinguished Speaker 1",
      title: "Entrepreneur & Innovation Leader",
      bio: "A visionary who has transformed multiple industries through breakthrough innovation and strategic thinking.",
      topics: ["Creator Economy", "Digital Innovation", "Career Capital"],
    },
    {
      name: "Distinguished Speaker 2",
      title: "Tech Executive",
      bio: "Leading transformative projects in technology with a focus on sustainable impact and team empowerment.",
      topics: ["Future-Ready Skills", "Leadership", "Tech Trends"],
    },
    {
      name: "Distinguished Speaker 3",
      title: "Academic & Research Pioneer",
      bio: "Bridging the gap between academic excellence and practical application in today's knowledge economy.",
      topics: ["Classroom to Career", "Research Impact", "Excellence"],
    },
  ]

  return (
    <main className="w-full">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Speakers</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Learn from industry leaders and thought pioneers who are shaping the future of education, innovation, and
              career development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {speakers.map((speaker, idx) => (
              <div
                key={idx}
                className="group h-full p-8 bg-gradient-to-br from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full mb-6" />

                <h3 className="text-2xl font-bold mb-2">{speaker.name}</h3>
                <p className="text-accent font-semibold mb-4">{speaker.title}</p>
                <p className="text-gray-600 mb-6 leading-relaxed">{speaker.bio}</p>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {speaker.topics.map((topic) => (
                      <span
                        key={topic}
                        className="px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <button className="flex-1 py-2 px-4 bg-primary text-white font-bold rounded-lg hover:shadow-lg transition-all">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
            Back to Home
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
