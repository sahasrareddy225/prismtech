"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    if (!localStorage.getItem("username")) router.replace("/");
  }, [router]);

  return (
    <>
      <Navbar />
      <HeroSection />
      <Footer />
    </>
  );
}
