"use client"

import { useEffect, useState } from "react"
import { Zap, Shield, Users, Smartphone, Cloud, BarChart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Cepat & Efisien",
    description: "Solusi yang dirancang untuk memberikan hasil maksimal dalam waktu minimal",
  },
  {
    icon: Shield,
    title: "Aman & Terpercaya",
    description: "Keamanan data dan privasi klien adalah prioritas utama kami",
  },
  {
    icon: Users,
    title: "Tim Profesional",
    description: "Didukung oleh tim ahli berpengalaman di bidang teknologi digital",
  },
  {
    icon: Smartphone,
    title: "Mobile-First",
    description: "Semua solusi dioptimalkan untuk pengalaman mobile yang sempurna",
  },
  {
    icon: Cloud,
    title: "Cloud-Based",
    description: "Infrastruktur cloud yang scalable dan reliable untuk bisnis Anda",
  },
  {
    icon: BarChart,
    title: "Analytics",
    description: "Dashboard analytics lengkap untuk monitoring performa bisnis",
  },
]

export function FeaturesSection() {
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

    const element = document.getElementById("features")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Mengapa Pilih BuatGampang?
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Kami memberikan nilai lebih untuk setiap solusi digital yang kami tawarkan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}