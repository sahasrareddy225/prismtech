import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import StatsBanner from '@/components/sections/StatsBanner';
import AboutSection from '@/components/sections/AboutSection';
import WhyParticipateSection from '@/components/sections/WhyParticipateSection';
import TracksSection from '@/components/sections/TracksSection';
import SchedulePreview from '@/components/sections/SchedulePreview';
import JudgingSection from '@/components/sections/JudgingSection';
import PrizesSection from '@/components/sections/PrizesSection';
import TeamSection from '@/components/sections/TeamSection';
import SponsorsSection from '@/components/sections/SponsorsSection';
import FAQSection from '@/components/sections/FAQSection';
import ContactSection from '@/components/sections/ContactSection';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <StatsBanner />
        <AboutSection />
        <WhyParticipateSection />
        <SchedulePreview />
        <TracksSection />
        <PrizesSection />
        <JudgingSection />
        <TeamSection />
        <FAQSection />
        <SponsorsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
