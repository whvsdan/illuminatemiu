import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function PanelsPage() {
  const panels = [
    {
      title: "Creator Economy: Building Digital Influence",
      description:
        "Dive deep into content creation, personal branding, monetization strategies, and building sustainable digital careers. Learn how to turn passion into profit.",
      moderator: "Industry Expert",
      topics: ["Content Creation", "Monetization", "Personal Branding", "Digital Marketing"],
      image: "/images/img-1435.jpeg",
    },
    {
      title: "Classroom to Career Capital: The Bridge",
      description:
        "Discover how academic excellence translates to real-world impact. Explore the practical skills, networking strategies, and mindset shifts needed to accelerate your career.",
      moderator: "Academic & Industry Leaders",
      topics: ["Career Planning", "Networking", "Skill Development", "Job Market Trends"],
      image: "/images/img-1433.jpeg",
    },
  ]

  return (
    <main className="w-full">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Panel{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                Discussions
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Engage in dynamic conversations with industry experts, entrepreneurs, and thought leaders on topics that
              matter to your future.
            </p>
          </div>

          <div className="space-y-12 mb-12">
            {panels.map((panel, idx) => (
              <div key={idx} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {idx % 2 === 0 ? (
                  <>
                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold">{panel.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">{panel.description}</p>

                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-widest font-bold text-gray-500">Key Topics</p>
                        <div className="flex flex-wrap gap-2">
                          {panel.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-4 py-2 bg-primary/10 text-primary font-semibold rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Moderated by</p>
                        <p className="text-lg font-bold text-primary">{panel.moderator}</p>
                      </div>
                    </div>

                    <div className="relative h-96">
                      <Image
                        src={panel.image || "/placeholder.svg"}
                        alt={panel.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative h-96">
                      <Image
                        src={panel.image || "/placeholder.svg"}
                        alt={panel.title}
                        fill
                        className="object-cover rounded-2xl"
                      />
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-3xl md:text-4xl font-bold">{panel.title}</h2>
                      <p className="text-lg text-gray-600 leading-relaxed">{panel.description}</p>

                      <div className="space-y-3">
                        <p className="text-sm uppercase tracking-widest font-bold text-gray-500">Key Topics</p>
                        <div className="flex flex-wrap gap-2">
                          {panel.topics.map((topic) => (
                            <span
                              key={topic}
                              className="px-4 py-2 bg-secondary/10 text-secondary font-semibold rounded-full text-sm"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Moderated by</p>
                        <p className="text-lg font-bold text-primary">{panel.moderator}</p>
                      </div>
                    </div>
                  </>
                )}
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
