
import React from 'react';

const HeroSection = () => {
  return (
    <section 
      className="h-screen flex items-center justify-center bg-gray-800 pt-16"
      style={{ 
        backgroundImage: "url('/lovable-uploads/4932971c-9636-445b-8e5b-97bd2a8deaea.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="container mx-auto px-6 relative text-white text-center">
        <h1 className="hero-text mb-6">
          COMMERCE<br />IN MOTION
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-xl">Driving growth through commerce innovation and strategically engineered creativity</p>
        </div>
        <div className="mt-10 flex justify-center gap-4">
          <a href="#contact" className="bg-primary text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-primary/90">Contact Us</a>
          <a href="#about" className="border border-white/70 text-white px-6 py-3 rounded-md font-medium transition-colors hover:bg-white/10">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
