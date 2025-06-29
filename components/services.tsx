"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Smartphone, Database, Palette, Headphones } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Website Development",
    description: "Website profesional yang responsif dan SEO-friendly untuk meningkatkan online presence bisnis Anda",
    features: ["Responsive Design", "SEO Optimized", "Fast Loading", "CMS Integration"],
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    description: "Platform e-commerce lengkap dengan sistem pembayaran terintegrasi dan manajemen inventory",
    features: ["Payment Gateway", "Inventory Management", "Order Tracking", "Multi-vendor Support"],
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Aplikasi mobile native dan cross-platform untuk iOS dan Android dengan performa optimal",
    features: ["Native & Cross-platform", "Push Notifications", "Offline Support", "App Store Optimization"],
  },
  {
    icon: Database,
    title: "System Integration",
    description: "Integrasi sistem bisnis untuk otomatisasi proses dan peningkatan efisiensi operasional",
    features: ["API Integration", "Data Migration", "Process Automation", "Real-time Sync"],
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Desain antarmuka yang menarik dan user experience yang optimal untuk produk digital Anda",
    features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
  },
  {
    icon: Headphones,
    title: "Digital Consulting",
    description: "Konsultasi strategis untuk transformasi digital dan optimasi proses bisnis perusahaan",
    features: ["Digital Strategy", "Technology Audit", "Process Optimization", "Training & Support"],
  },
]

export function ServicesSection() {
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

    const element = document.getElementById("services")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl sm:text-4xl font-bold text-gray-900 mb-4 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Layanan Kami
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Solusi digital komprehensif untuk semua kebutuhan bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:shadow-lg transition-all duration-500 group ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 100 + 400}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5">
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}