import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ServicesGrid } from '@/components/ServicesGrid';
import { ProcessSection } from '@/components/ProcessSection';
import { ComparisonSection } from '@/components/ComparisonSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <ServicesGrid />
        <ProcessSection />
        <ComparisonSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
