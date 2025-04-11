
import React from 'react';

const PerformanceSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-black text-white" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              REAL-TIME RESULTS.<br />ALIGNED INCENTIVES.
            </h2>
            <p className="uppercase text-lg mb-8">PERFORMANCE + PARTNERSHIP</p>
            
            <p className="text-2xl text-primary font-bold mb-6">
              We don't hide behind vague metrics. We measure. We iterate. We grow.
            </p>
            
            <p className="mb-6">
              And we put skin in the game with a Pay-for-Performance model.
            </p>
            
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Real-time insights in 6–8 weeks</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Predictive tools to forecast success</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p>Flexible scopes with performance bonuses</p>
              </li>
            </ul>
            
            <p className="text-2xl text-primary font-bold mt-8">
              When you win, we win.<br />Simple as that.
            </p>
          </div>
          
          <div className="relative">
            <img 
              src="/public/lovable-uploads/bd29c930-b437-425d-a673-e219f59f4dc0.png" 
              alt="Public Label neon sign" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
