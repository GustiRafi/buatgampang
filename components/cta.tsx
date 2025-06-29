"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Mail, Phone } from "lucide-react"

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("contact")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary to-accent relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="w-full h-full opacity-10 bg-white bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-white mb-6 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Siap Memulai Transformasi Digital?
          </h2>
          <p
            className={`text-xl text-white/90 mb-12 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Konsultasi gratis untuk mengetahui solusi digital terbaik untuk bisnis Anda. Tim ahli kami siap membantu
            mewujudkan visi digital Anda.
          </p>

          {/* Contact Form */}
          <div
            className={`bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <Input
                placeholder="Nama Lengkap"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
              <Input
                placeholder="Email"
                type="email"
                className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30"
              />
            </div>
            <Input
              placeholder="Ceritakan tentang proyek Anda..."
              className="bg-white/20 border-white/30 text-white placeholder:text-white/70 focus:bg-white/30 mb-6"
            />
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white w-full md:w-auto">
              Konsultasi Gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Info */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="flex items-center justify-center space-x-4 text-white">
              <Mail className="h-6 w-6" />
              <span className="text-lg">hello@buatgampang.id</span>
            </div>
            <div className="flex items-center justify-center space-x-4 text-white">
              <Phone className="h-6 w-6" />
              <span className="text-lg">+62 812-3456-7890</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}