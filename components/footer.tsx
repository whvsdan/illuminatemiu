"use client"

export default function Footer() {
  const handleRegister = () => {
    window.open("https://forms.gle/AZYuhxy1mc6RKXen9", "_blank")
  }

  return (
    <footer className="w-full py-16 md:py-20 px-4 md:px-8 bg-primary text-primary-foreground border-t border-primary/20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-bold mb-2">Illuminate</h3>
            <p className="text-primary-foreground/70">Transforming academic culture</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Event</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Speakers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Logistics
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-primary-foreground/70">
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary-foreground transition-colors">
                  Terms
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact</h4>
            <p className="text-primary-foreground/70 mb-2">Precious Elusakin</p>
            <a href="mailto:contact@illuminatemiu.com" className="text-secondary hover:underline">
              contact@illuminatemiu.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-primary-foreground/70 text-sm">© 2025 IlluminateMIU. All rights reserved.</p>

          <button
            onClick={handleRegister}
            className="px-6 py-2 bg-secondary text-secondary-foreground font-bold rounded-lg hover:shadow-lg hover:shadow-secondary/30 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Register Now
          </button>

          {/* Social Links */}
          <div className="flex gap-6">
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <span className="sr-only">Twitter</span>𝕏
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <span className="sr-only">Instagram</span>📸
            </a>
            <a href="#" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <span className="sr-only">LinkedIn</span>💼
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
