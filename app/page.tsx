import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Speakers from "@/components/speakers"
import FlyerSection from "@/components/flyer-section"
import ProgramHighlights from "@/components/program-highlights"
import Panels from "@/components/panels"
import Logistics from "@/components/logistics"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="w-full">
      <Navbar />
      <Hero />
      <About />
      <Speakers />
      <FlyerSection />
      <ProgramHighlights />
      <Panels />
      <Logistics />
      <Footer />
    </main>
  )
}
