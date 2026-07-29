"use client";

import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AboutSection from "@/components/sections/AboutSectionSPA";
import TracksSection from "@/components/sections/TracksSectionSPA";
import ScheduleSection from "@/components/sections/ScheduleSectionSPA";
import RulesSection from "@/components/sections/RulesSectionSPA";
import TeamSection from "@/components/sections/TeamSectionSPA";
import SponsorsSection from "@/components/sections/SponsorsSectionSPA";
import ContactSection from "@/components/sections/ContactSectionSPA";
import VenueSection from "@/components/sections/VenueSectionSPA";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <TracksSection />
      <ScheduleSection />
      <RulesSection />
      <TeamSection />
      <SponsorsSection />
      <ContactSection />
      <VenueSection />
      <Footer />
    </>
  );
}
