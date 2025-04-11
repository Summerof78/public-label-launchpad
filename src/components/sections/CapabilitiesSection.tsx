
import React from 'react';
import ServiceColumn from '../ServiceColumn';

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
          <ServiceColumn
            title="BRICK & CLICK COMMERCE"
            description="WINNING AT THE INTERSECTION OF ONLINE & IN-STORE."
            color="secondary"
            items={[
              "Retailer-specific strategy & execution",
              "Data-driven shopper insights & category growth planning",
              "Retail media & omnichannel campaign integration",
              "High-impact content syndication & marketplace SEO",
              "Dynamic creative built for conversion"
            ]}
            tools={[
              { name: "5t", description: "Custom, retailer-specific omni-plan builder" },
              { name: "AIM", description: "Monthly share of voice tracking" },
              { name: "Category Roadmap", description: "Shopper-led forecasting & growth mapping" },
              { name: "RADaR", description: "Performance analytics & competitive war gaming" }
            ]}
          />
          
          <ServiceColumn
            title="ON-DEMAND COMMERCE"
            description="CAPTURING DEMAND, DRIVING REPEAT PURCHASE."
            color="primary"
            items={[
              "E-commerce ecosystem optimization",
              "Amazon, Instacart, TikTok Shop",
              "SEO strategy & paid media acceleration",
              "AI-driven creative & product listing optimization",
              "DTC demand generation & social commerce consulting"
            ]}
            tools={[
              { name: "PMR", description: "Precision marketplace refinement" },
              { name: "Resonance", description: "AI-powered message optimization" }
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
