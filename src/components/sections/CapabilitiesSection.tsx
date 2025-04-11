
import React from 'react';

const CapabilitiesSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section id="capabilities" className="py-24 bg-background" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
            <div>
              <h2 className="section-title mb-6">
                WHERE COMMERCE<br />MEETS MOMENTUM
              </h2>
              <p className="uppercase text-lg mb-6">OUR CAPABILITIES</p>
            </div>
            <div>
              <p className="text-lg">
                We create <span className="font-bold">commerce strategies that drive real business results</span> across two high-impact verticals:
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* First image - replaced with new Brick & Click Commerce image */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/40be9247-eeb9-4979-ba78-0e96e3a583d2.png" 
              alt="Brick & Click Commerce" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Second image */}
          <div className="w-full">
            <img 
              src="/lovable-uploads/1845cb7c-7785-4b48-80d0-05ed7065a75e.png" 
              alt="On-Demand Commerce" 
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
