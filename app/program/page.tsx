import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"

export default function ProgramPage() {
  const sessions = [
    {
      time: "8:00 AM - 9:00 AM",
      title: "Opening Ceremony & Keynote",
      description: "Set the stage with inspiring words about innovation and excellence",
      type: "Keynote",
    },
    {
      time: "9:15 AM - 10:30 AM",
      title: "Creator Economy Masterclass",
      description: "Exploring opportunities in content creation, digital products, and personal branding",
      type: "Workshop",
    },
    {
      time: "10:45 AM - 12:00 PM",
      title: "Panel Discussion: Classroom to Career Capital",
      description: "How academic excellence translates to real-world impact and job market success",
      type: "Panel",
    },
    {
      time: "12:00 PM - 1:00 PM",
      title: "Networking & Lunch",
      description: "Connect with speakers, peers, and industry professionals",
      type: "Social",
    },
    {
      time: "1:00 PM - 2:15 PM",
      title: "Fireside Chat: Future-Ready Skills",
      description: "Discover the skills employers are looking for and how to develop them",
      type: "Fireside Chat",
    },
    {
      time: "2:30 PM - 3:45 PM",
      title: "Creative Showcase & Breakout Sessions",
      description: "Student projects, innovations, and interactive workshops",
      type: "Exhibition",
    },
  ]

  return (
    <main className="w-full">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Event{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Program</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              A carefully curated day of keynotes, panel discussions, workshops, and networking designed to inspire and
              transform your academic journey.
            </p>
          </div>

          <div className="space-y-4 mb-12">
            {sessions.map((session, idx) => (
              <div
                key={idx}
                className="group p-6 md:p-8 bg-gradient-to-r from-white to-gray-50 rounded-2xl border border-gray-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center gap-2 text-primary font-bold">
                      <Clock className="w-5 h-5" />
                      <span className="text-sm md:text-base">{session.time}</span>
                    </div>
                  </div>

                  <div className="flex-grow space-y-2">
                    <div className="flex items-center gap-3 flex-wrap">
                      <h3 className="text-2xl font-bold">{session.title}</h3>
                      <span className="px-3 py-1 text-xs font-bold bg-secondary/10 text-secondary rounded-full">
                        {session.type}
                      </span>
                    </div>
                    <p className="text-gray-600">{session.description}</p>
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
