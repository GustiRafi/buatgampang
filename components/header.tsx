"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Beranda", href: "#home" },
    { name: "Layanan", href: "#services" },
    { name: "Tentang", href: "#about" },
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 transition-all duration-300">
      <div
        className={cn(
          "mx-auto flex items-center justify-between px-6 py-3 transition-all duration-300",
          "w-full",
          isScrolled
            ? "mt-4 bg-white/70 backdrop-blur-md shadow-md border border-gray-200 rounded-full w-[90%] md:max-w-5xl"
            : "border-transparent bg-transparent rounded-none"
        )}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">BG</span>
          </div>
          <div className="flex flex-col">
              <span className="font-bold text-lg text-gray-900 leading-none">BuatGampang</span>
              <span className="text-xs text-gray-500 leading-none">Solusi Digital</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "text-gray-600 hover:text-primary transition-colors font-medium",
                pathname === item.href && "text-primary font-semibold"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button className="bg-highlight hover:bg-highlight/90">Konsultasi Gratis</Button>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="h-6 w-6 text-gray-700" />
          ) : (
            <Menu className="h-6 w-6 text-gray-700" />
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-[72px] w-full px-4 z-40">
          <div className="bg-white border border-gray-200 shadow-md rounded-xl px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block text-gray-700 hover:text-primary transition-colors font-medium",
                  pathname === item.href && "text-primary font-semibold"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button className="w-full bg-highlight hover:bg-highlight/90">
              Konsultasi Gratis
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}