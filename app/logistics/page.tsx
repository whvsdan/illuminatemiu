import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, MapPin, Clock, Users, Ticket } from "lucide-react"

export default function LogisticsPage() {
  return (
    <main className="w-full">
      <Navbar />

      <section className="relative pt-32 pb-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-balance leading-tight mb-6">
              Event{" "}
              <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">Logistics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl">
              Everything you need to know to prepare for an unforgettable day of learning, networking, and
              transformation.
            </p>
          </div>

          {/* Venue Image */}
          <div className="relative h-96 md:h-[500px] mb-12 rounded-2xl overflow-hidden">
            <Image src="/images/img-1436.jpeg" alt="Event venue" fill className="object-cover" />
          </div>

          {/* Key Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="p-8 bg-gradient-to-br from-primary/5 to-primary/10 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4 mb-4">
                <MapPin className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Venue</h3>
                  <p className="text-gray-600">
                    <strong>School Reception Hall</strong>
                    <br />
                    Mewar International University
                    <br />
                    Vasundhara, Ghaziabad
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-secondary/5 to-secondary/10 rounded-2xl border border-secondary/20">
              <div className="flex items-start gap-4 mb-4">
                <Clock className="w-8 h-8 text-secondary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Date & Time</h3>
                  <p className="text-gray-600">
                    <strong>Thursday, November 13, 2025</strong>
                    <br />
                    8:00 AM - 4:30 PM
                    <br />
                    Registration opens at 7:30 AM
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl border border-accent/20">
              <div className="flex items-start gap-4 mb-4">
                <Ticket className="w-8 h-8 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Ticket Information</h3>
                  <p className="text-gray-600">
                    <strong>Early Bird: ₦500</strong>
                    <br />
                    <strong>Regular: ₦1,000</strong>
                    <br />
                    <strong>VIP Package: ₦2,000</strong>
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-yellow-50 to-yellow-100 rounded-2xl border border-yellow-200">
              <div className="flex items-start gap-4 mb-4">
                <Users className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-bold mb-2">Target Audience</h3>
                  <p className="text-gray-600">
                    Ambitious MIU students seeking excellence, innovation, and career development beyond the classroom.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Important Details */}
          <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-gray-200 p-8 mb-12">
            <h3 className="text-2xl font-bold mb-6">What to Expect</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-secondary">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Keynote Addresses</h4>
                  <p className="text-gray-600">Inspiring talks from industry leaders and thought pioneers</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-secondary">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Panel Discussions</h4>
                  <p className="text-gray-600">Engage with experts on career and innovation topics</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-secondary">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Networking Opportunities</h4>
                  <p className="text-gray-600">Connect with peers, mentors, and professionals</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="text-2xl font-bold text-secondary">✓</span>
                <div>
                  <h4 className="font-bold mb-1">Refreshments</h4>
                  <p className="text-gray-600">Complimentary meals and beverages throughout the day</p>
                </div>
              </div>
            </div>
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
