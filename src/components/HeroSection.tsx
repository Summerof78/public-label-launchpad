
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/7e45122f-bca3-4316-afca-145261060b8f.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Overlay gradient for better text readability if needed */}
      <div className="absolute inset-0 bg-black/30 z-10"></div>
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="flex flex-col items-center justify-center text-center space-y-6">
          <img
            src="/lovable-uploads/805585be-5b17-45e5-8558-16bef169ff09.png"
            alt="Public Label"
            className="h-8 md:h-10 mb-8"
          />
          <h1 className="hero-text text-5xl md:text-7xl lg:text-8xl font-black">
            COMMERCE<br />IN MOTION
          </h1>
          <div className="max-w-2xl mx-auto mt-4">
            <p className="text-xl md:text-2xl">Driving growth through commerce innovation and strategically engineered creativity</p>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <p className="text-sm mb-2">Scroll to explore</p>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
