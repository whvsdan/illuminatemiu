import Image from "next/image"

export default function FlyerSection() {
  return (
    <section className="w-full py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-balance mb-4">Event Flyer</h2>
          <p className="text-lg text-muted-foreground">Save the date and share with your friends</p>
        </div>

        <div className="rounded-2xl overflow-hidden shadow-2xl border border-border">
          <Image
            src="/images/whatsapp-20image-202025-11-14-20at-202.jpeg"
            alt="IlluminateMIU Event Flyer"
            width={1200}
            height={800}
            className="w-full h-auto object-cover"
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-muted-foreground mb-6">Download and share with your network</p>
          <a
            href="/images/whatsapp-20image-202025-11-14-20at-202.jpeg"
            download
            className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Download Flyer
          </a>
        </div>
      </div>
    </section>
  )
}
