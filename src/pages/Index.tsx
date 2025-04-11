
import { useRef, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ClientsSection from '../components/sections/ClientsSection';
import GrowthFrameworkSection from '../components/sections/GrowthFrameworkSection';
import CapabilitiesSection from '../components/sections/CapabilitiesSection';
import StrategySection from '../components/sections/StrategySection';
import HowWeDoItSection from '../components/sections/HowWeDoItSection';
import ResultsSection from '../components/sections/ResultsSection';
import PerformanceSection from '../components/sections/PerformanceSection';
import ContactSection from '../components/sections/ContactSection';

const Index = () => {
  const animatedRefs = useRef<HTMLDivElement[]>([]);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    animatedRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      animatedRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement) => {
    if (el && !animatedRefs.current.includes(el)) {
      animatedRefs.current.push(el);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* About Section */}
      <AboutSection addToRefs={addToRefs} />
      
      {/* Clients Section */}
      <ClientsSection addToRefs={addToRefs} />
      
      {/* Growth Framework Section */}
      <GrowthFrameworkSection addToRefs={addToRefs} />
      
      {/* Capabilities Section */}
      <CapabilitiesSection addToRefs={addToRefs} />
      
      {/* Strategy Section */}
      <StrategySection addToRefs={addToRefs} />
      
      {/* How We Do It Section */}
      <HowWeDoItSection addToRefs={addToRefs} />
      
      {/* Results Section */}
      <ResultsSection addToRefs={addToRefs} />
      
      {/* Performance Section */}
      <PerformanceSection addToRefs={addToRefs} />
      
      {/* Contact Section */}
      <ContactSection addToRefs={addToRefs} />
      
      <Footer />
    </div>
  );
};

export default Index;
