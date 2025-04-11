
import React from 'react';

const HowWeDoItSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-black text-white" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-8">DESIGNED TO DISRUPT.<br />BUILT TO PERFORM.</h2>
          <p className="text-xl mb-6">
            We don't just create—we engineer influence. Every piece of creative we develop is designed to drive action, balancing <span className="font-bold">brand equity</span> and <span className="font-bold">conversion</span> to ensure every touchpoint delivers results.
          </p>
          <p className="text-primary text-xl font-bold mt-12">HOW WE DO IT</p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                alt="Strategic Foundation Icon" 
                className="h-16"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3 mb-6">
              <h3 className="text-lg font-bold">STRATEGIC FOUNDATION</h3>
            </div>
            <p className="text-sm">
              We ground creative in insights—aligning brand truths with behavioral triggers that drive conversion.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                alt="Seamless Execution Icon" 
                className="h-16"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3 mb-6">
              <h3 className="text-lg font-bold">SEAMLESS EXECUTION</h3>
            </div>
            <p className="text-sm">
              We connect online and in-store experiences, ensuring every message supports the shopper journey across all platforms.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                alt="10-5-1 Framework Icon" 
                className="h-16"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3 mb-6">
              <h3 className="text-lg font-bold">10-5-1 FRAMEWORK</h3>
            </div>
            <p className="text-sm">
              Our in-store and retail creative follows a behavioral flow—attract from 10 ft away, engage in 5, convert in 1.
            </p>
          </div>
          
          <div className="text-center">
            <div className="mb-8 flex justify-center">
              <img 
                src="/public/lovable-uploads/590e74ee-1620-40c3-95ff-5667ccbf1636.png" 
                alt="Optimized For Attention Icon" 
                className="h-16"
              />
            </div>
            <div className="bg-primary p-3 transform -rotate-3 mb-6">
              <h3 className="text-lg font-bold">OPTIMIZED FOR ATTENTION</h3>
            </div>
            <p className="text-sm">
              We use Resonance, an AI-powered scoring tool, to test and refine creative before launch—evaluating eye tracking, clarity, emotional tone, and cognitive load to ensure maximum impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoItSection;
