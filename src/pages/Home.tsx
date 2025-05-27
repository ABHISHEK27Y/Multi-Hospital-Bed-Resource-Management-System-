import React, { useEffect } from 'react';
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import AvailabilitySection from '../components/sections/AvailabilitySection';
import DashboardPreviewSection from '../components/sections/DashboardPreviewSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CtaSection from '../components/sections/CtaSection';

const Home: React.FC = () => {
  // Update page title
  useEffect(() => {
    document.title = 'MedBedTrack - Hospital Resource Management System';
  }, []);

  return (
    <>
      <HeroSection />
      <FeaturesSection />
      <AvailabilitySection />
      <DashboardPreviewSection />
      <TestimonialsSection />
      <CtaSection />
    </>
  );
};

export default Home;