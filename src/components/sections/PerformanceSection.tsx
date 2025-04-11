
import React from 'react';

const PerformanceSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section 
      className="relative h-screen flex items-center bg-black text-white" 
      ref={addToRefs}
      id="performance"
    >
      <div className="absolute inset-0 w-full h-full">
        <img 
          src="/public/lovable-uploads/0aab589a-501e-457e-8b39-8babdb875416.png" 
          alt="Real-time results. Aligned incentives." 
          className="w-full h-full object-contain bg-black"
        />
      </div>
      {/* Empty container just to maintain section structure */}
      <div className="container mx-auto px-6 relative z-10 hidden">
        {/* Content is now in the image */}
      </div>
    </section>
  );
};

export default PerformanceSection;
