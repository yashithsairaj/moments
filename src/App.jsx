import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DownloadButtons from "./components/DownloadButtons";
import FloatingHero from "./components/FloatingHero";
import { HeroDescription } from "./components/HeroDescription";
import Features from "./components/Features";
import StepsCards from "./components/StepsCards";
import GalleryCarousel from "./components/GalleryCarousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Import custom carousel styles
import "./index.css";
import NavigationDemo from "./components/NavigationDemo";
import FAQ from "./components/FAQ";
import SupportSection from "./components/SupportSection";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <Hero />
        <main className="container mx-auto px-1 py-12">
          <div className="py-10 px-4 md:px-4">
            <FloatingHero />
            <HeroDescription />
          </div>
          <Features />
          <StepsCards />
          <GalleryCarousel />
          <NavigationDemo />
          <FAQ />
          <SupportSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
