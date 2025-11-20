import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function AboutPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
                  About{" "}
                  <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
                    IlluminateMIU
                  </span>
                </h1>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Illuminate is a groundbreaking initiative designed to bridge the gap between academic excellence and
                  real-world career capital. We believe that true education transcends lecture halls and grades.
                </p>
              </div>

              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Our Vision</h3>
                  <p className="text-gray-600">
                    To create a community of ambitious students who understand that career success is built on
                    innovation, purpose-driven excellence, and continuous learning beyond the classroom.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-primary">Our Mission</h3>
                  <p className="text-gray-600">
                    To empower MIU students with practical insights, industry connections, and the confidence to
                    navigate their path to global excellence and meaningful impact.
                  </p>
                </div>
              </div>

              <Link
                href="/"
                className="inline-flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all"
              >
                Back to Home
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <div className="relative h-96 md:h-[500px]">
              <Image src="/images/img-1438.jpeg" alt="Event participants" fill className="object-cover rounded-2xl" />
            </div>
          </div>

          {/* Key Points */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
            <div className="p-8 bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl border border-secondary/20">
              <div className="text-4xl font-bold text-secondary mb-4">01</div>
              <h3 className="text-xl font-bold mb-3">Career Capital</h3>
              <p className="text-gray-600">
                Build meaningful connections, gain industry insights, and develop skills that matter in today's
                competitive landscape.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl border border-accent/20">
              <div className="text-4xl font-bold text-accent mb-4">02</div>
              <h3 className="text-xl font-bold mb-3">Innovation Focus</h3>
              <p className="text-gray-600">
                Learn from thought leaders about emerging technologies, creative problem-solving, and future-ready
                careers.
              </p>
            </div>

            <div className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl border border-primary/20">
              <div className="text-4xl font-bold text-primary mb-4">03</div>
              <h3 className="text-xl font-bold mb-3">Community</h3>
              <p className="text-gray-600">
                Connect with like-minded ambitious peers, mentors, and professionals shaping the future across
                industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
