import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Footer } from "@/components/footer";
import { FeaturesSection } from "@/components/features";
import { ServicesSection } from "@/components/services";
import { AboutSection } from "@/components/about";

export default function Home() {
  return (
     <div className="min-h-screen bg-white">
     <Header />
     <main>
      <Hero />
      <FeaturesSection />
      <ServicesSection />
      <AboutSection />
      {/* <CTASection /> */}
      <Footer />
     </main>
    </div>
  );
}
