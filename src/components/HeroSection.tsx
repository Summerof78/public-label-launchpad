
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{ 
          backgroundImage: "url('/lovable-uploads/90822740-9b69-4502-a064-a1bb02d3f8ad.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-6 relative z-20 text-white">
        <div className="flex flex-col items-center justify-center text-center">
          <img
            src="/lovable-uploads/805585be-5b17-45e5-8558-16bef169ff09.png"
            alt="Public Label"
            className="h-12 md:h-16 mb-8 md:mb-12"
          />
          
          <h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-black tracking-tight text-white">
            COMMERCE<br />IN MOTION
          </h1>
          
          <div className="max-w-2xl mx-auto mt-6 md:mt-8">
            <p className="text-lg md:text-xl">Driving growth through commerce innovation and strategically engineered creativity</p>
          </div>
          
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <p className="text-sm mb-1">Scroll to explore</p>
            <svg className="w-6 h-6 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
