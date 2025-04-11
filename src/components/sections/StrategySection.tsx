
import React from 'react';

const StrategySection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-black text-white" ref={addToRefs}
      style={{ backgroundImage: "url('/public/lovable-uploads/ded1abae-3349-4817-b5a0-d78ba4817535.png')", backgroundPosition: 'center', backgroundSize: 'cover' }}
    >
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <p className="uppercase text-lg mb-4">STRATEGY | PLANNING | TOOLS</p>
          <h2 className="section-title">SETTING IT UP</h2>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
