import { Header } from "@/components/tour/header"
import { HeroSection } from "@/components/tour/hero-section"
import { SolutionSection } from "@/components/tour/solution-section"
import { TestimonialsSection } from "@/components/tour/testimonials-section"
import { TourStepsSection } from "@/components/tour/tour-steps-section"
import { FinalCtaSection } from "@/components/tour/final-cta-section"
import { Footer } from "@/components/tour/footer"

export default function TourPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SolutionSection />
        <TestimonialsSection />
        <TourStepsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  )
}
