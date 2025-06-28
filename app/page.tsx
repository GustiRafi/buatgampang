import Image from "next/image";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
     <div className="min-h-screen bg-white">
     <Header />
     <Hero />
     <Footer />
    </div>
  );
}
