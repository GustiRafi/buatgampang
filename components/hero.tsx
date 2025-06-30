"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-20 md:pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-white to-accent/5" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div
            className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            🚀 Solusi Digital Terdepan untuk Bisnis Anda
          </div>

          {/* Main Heading */}
          <h1
            className={`text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            BuatGampang:{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Solusi Digital
            </span>{" "}
            yang Bikin Bisnis Jadi Gampang
          </h1>

          {/* Subtitle */}
          <p
            className={`text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Transformasi digital yang mudah, cepat, dan terpercaya. Kami membantu bisnis Anda berkembang dengan
            teknologi terdepan.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <Button size="lg" className="bg-highlight hover:bg-highlight/90 text-white px-8 py-3 text-lg">
              Order Sekarang
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            {/* <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary/5 px-8 py-3 text-lg"
            >
              <Play className="mr-2 h-5 w-5" />
              Lihat Demo
            </Button> */}
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 transition-all duration-1000 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100+</div>
              <div className="text-gray-600">Klien Puas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent mb-2">50+</div>
              <div className="text-gray-600">Proyek Selesai</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-highlight mb-2">24/7</div>
              <div className="text-gray-600">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}