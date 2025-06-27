import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import TeamSection from '@/components/sections/TeamSection';
import MarathonSection from '@/components/sections/MarathonSection';
import WhySponsorSection from '@/components/sections/WhySponsorSection';
import CostsSection from '@/components/sections/CostsSection';
import SponsorshipSection from '@/components/sections/SponsorshipSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';
import FloatingActionButton from '@/components/ui/FloatingActionButton';
import SmoothScrolling from '@/components/ui/SmoothScrolling';
export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <HeroSection />
      <TeamSection />
      <MarathonSection />
      <WhySponsorSection />
      <CostsSection />
      <SponsorshipSection />
      <ContactSection />
      <Footer />
      <FloatingActionButton />
      <SmoothScrolling />
    </div>
  );
}