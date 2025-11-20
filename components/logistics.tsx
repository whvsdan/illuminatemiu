import Image from "next/image"

export default function Logistics() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-background to-card">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 rounded-xl overflow-hidden shadow-xl h-96">
          <Image
            src="/images/venue-aerial.png"
            alt="Mewar International University venue"
            width={1200}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Section Header */}
        <h2 className="text-4xl md:text-6xl font-bold text-balance mb-4">
          Practical <span className="text-secondary">Information</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-16">Everything you need to attend</p>

        {/* Details Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary transition-colors">
            <p className="text-secondary font-bold text-sm mb-2">DATE</p>
            <h3 className="text-2xl font-bold text-foreground">Thursday</h3>
            <p className="text-muted-foreground">November 13, 2025</p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary transition-colors">
            <p className="text-secondary font-bold text-sm mb-2">VENUE</p>
            <h3 className="text-2xl font-bold text-foreground">School Reception</h3>
            <p className="text-muted-foreground">Mewar International University</p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary transition-colors">
            <p className="text-secondary font-bold text-sm mb-2">TARGET AUDIENCE</p>
            <h3 className="text-2xl font-bold text-foreground">Students</h3>
            <p className="text-muted-foreground">All degree levels</p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border hover:border-secondary transition-colors">
            <p className="text-secondary font-bold text-sm mb-2">TICKET PRICE</p>
            <h3 className="text-2xl font-bold text-foreground">₦500 - ₦2,000</h3>
            <p className="text-muted-foreground">Early bird available</p>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-16 bg-primary text-primary-foreground rounded-2xl p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Transform Your Future?</h3>
          <p className="text-lg mb-8 opacity-90">
            Secure your spot now and join us for an unforgettable day of growth, inspiration, and opportunity.
          </p>
          <button className="px-8 py-4 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-lg">
            Register Now
          </button>
        </div>
      </div>
    </section>
  )
}
