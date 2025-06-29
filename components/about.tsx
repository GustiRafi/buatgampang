"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"
import Image from "next/image"

const achievements = [
  "Tim berpengalaman 5+ tahun di industri teknologi",
  "Telah menangani 50+ proyek dari berbagai industri",
  "Menggunakan teknologi terdepan dan best practices",
  "Komitmen pada kualitas dan kepuasan klien",
  "Support 24/7 untuk semua klien",
]

export function AboutSection() {
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

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2
              className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              Tentang BuatGampang
            </h2>
            <p
              className={`text-lg text-gray-600 mb-8 leading-relaxed transition-all duration-1000 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              BuatGampang adalah partner digital terpercaya yang membantu bisnis bertransformasi dengan teknologi. Kami
              percaya bahwa setiap bisnis berhak mendapatkan solusi digital yang berkualitas, mudah digunakan, dan
              terjangkau.
            </p>

            <div className="space-y-4 mb-8">
              {achievements.map((achievement, index) => (
                <div
                  key={achievement}
                  className={`flex items-start space-x-3 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${index * 100 + 400}ms` }}
                >
                  <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{achievement}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className={`bg-primary hover:bg-primary/90 text-white transition-all duration-1000 delay-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
              }`}
            >
              Hubungi Kami
            </Button>
          </div>

          {/* Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Tim BuatGampang"
                width={600}
                height={500}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary mb-1">100%</div>
              <div className="text-sm text-gray-600">Client Satisfaction</div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-accent mb-1">24/7</div>
              <div className="text-sm text-gray-600">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
