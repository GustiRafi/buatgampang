'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"


export function Hero() {
    return(
        <section id='home' className="relative bg-white py-20 items-center flex justify-center overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <Badge className="bg-primary/10 text-primary text-sm font-medium px-2.5 py-0.5 mb-8">🚀 Solusi Digital Terdepan untuk Bisnis Anda</Badge>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                       BuatGampang: Solusi Digital yang Bikin Bisnis Jadi Gampang
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Transformasi digital yang mudah, cepat, dan terpercaya. Kami membantu bisnis Anda berkembang dengan
                        teknologi terdepan.
                    </p>
                    <Button className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
                        Mulai Transformasi <ArrowRight className="ml-2" />
                    </Button>
                    <Button className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200 ml-4">
                        <Play className="mr-2" />
                        Tonton Video
                    </Button>
                </div>
                <div className="mt-16 grid grid-cols-3 sm:grid-cols-3 ">
                     <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Klien Puas</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Klien Puas</div>
                    </div>
                    <div className="text-center">
                        <div className="text-3xl font-bold text-primary mb-2">100+</div>
                        <div className="text-gray-600">Klien Puas</div>
                    </div>
                </div>
            </div>
        </section>
    )
}