import { Navbar } from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'
import { HeroSection } from '@/components/home/hero-section'
import { BenefitsSection } from '@/components/home/benefits-section'
import { ServicesPreview } from '@/components/home/services-preview'
import { WhyChooseUs } from '@/components/home/why-choose-us'
import { ProcessSection } from '@/components/home/process-section'
import { StatsSection } from '@/components/home/stats-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { FAQSection } from '@/components/home/faq-section'
import { CTASection } from '@/components/home/cta-section'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <BenefitsSection />
        <ServicesPreview />
        <WhyChooseUs />
        <ProcessSection />
        <StatsSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
