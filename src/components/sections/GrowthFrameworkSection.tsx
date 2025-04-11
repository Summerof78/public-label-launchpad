
import React from 'react';
import { UserPlus, ShoppingCart, RefreshCcw } from 'lucide-react';

const GrowthFrameworkSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section id="growth-framework" className="py-24 bg-black text-white" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-8">GROWTH FRAMEWORK</h2>
          <p className="text-xl">WE DRIVE WHAT MATTERS: CONVERSION.</p>
          <p className="text-lg">OUR STRATEGIES FUEL <span className="text-primary font-bold">THREE KEY GROWTH DRIVERS:</span></p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary p-4 inline-block rounded-md mb-4">
              {/* New customer icon */}
              <img 
                src="/public/lovable-uploads/f36a1f0e-4aaf-45d2-b621-9aadb3fdb27d.png" 
                alt="Get New People To Buy Icon" 
                className="h-12 w-12"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3">
              <h3 className="text-xl font-bold uppercase">GET NEW PEOPLE TO BUY</h3>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary p-4 inline-block rounded-md mb-4">
              {/* Cart with dollar sign icon */}
              <img 
                src="/public/lovable-uploads/2813f202-e9ca-4714-bb3e-7805b362721a.png" 
                alt="Get Them To Buy More Often Icon" 
                className="h-12 w-12"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3">
              <h3 className="text-xl font-bold uppercase">GET THEM TO BUY MORE OFTEN</h3>
            </div>
          </div>
          
          <div className="text-center">
            <div className="bg-primary p-4 inline-block rounded-md mb-4">
              {/* Shopping basket with reload icon */}
              <img 
                src="/public/lovable-uploads/69036e8e-8aac-46e2-b3c5-bcaca52893c5.png" 
                alt="Buy More Per Trip Icon" 
                className="h-12 w-12"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3">
              <h3 className="text-xl font-bold uppercase">BUY MORE PER TRIP</h3>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <p className="text-lg">We build strategies to do all three—fueled by proprietary tools, bold creativity, and commerce-first thinking.</p>
        </div>
      </div>
    </section>
  );
};

export default GrowthFrameworkSection;
