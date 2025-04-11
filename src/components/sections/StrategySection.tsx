
import React from 'react';
import ServiceColumn from '../ServiceColumn';

const StrategySection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-black text-white" ref={addToRefs}
      style={{ backgroundImage: "url('/lovable-uploads/ded1abae-3349-4817-b5a0-d78ba4817535.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="uppercase text-lg mb-4">STRATEGY | PLANNING | TOOLS</p>
          <h2 className="section-title">SETTING IT UP</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <ServiceColumn 
            title="Strategy"
            description="Our strategic frameworks are built to drive sales growth."
            color="primary"
            items={[
              "Brand Strategy & Positioning",
              "Growth Frameworks",
              "Shopper Journey Mapping",
              "Behavioral Science Application",
              "Category Management",
              "Audience Development"
            ]}
            tools={[
              { name: "Retail IQ", description: "Retail environment analysis tool" },
              { name: "Consumer Pulse", description: "Real-time shopper feedback system" }
            ]}
          />
          
          <ServiceColumn 
            title="Planning"
            description="Comprehensive planning across the entire shopper journey."
            color="secondary"
            items={[
              "Media Strategy & Planning",
              "Retail Media Planning",
              "Promotional Planning",
              "Content Strategy",
              "Calendar Development",
              "Budget Optimization"
            ]}
            tools={[
              { name: "Channel Optimizer", description: "Media mix modeling tool" },
              { name: "ROI Forecaster", description: "Investment planning system" }
            ]}
          />
          
          <ServiceColumn 
            title="Tools"
            description="Proprietary tools to measure, optimize and drive performance."
            color="primary"
            items={[
              "Resonance Scoring",
              "Retail Media Optimizer",
              "Retail IQ Engine",
              "Performance Dashboard",
              "Competitive Analysis Suite",
              "ROI Calculator"
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
