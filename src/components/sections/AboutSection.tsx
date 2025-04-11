
import React from 'react';

const AboutSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section id="about" className="py-24 bg-background" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6">
              WE MAKE BRANDS<br />IMPOSSIBLE TO IGNORE
            </h2>
            <h3 className="text-lg uppercase mb-6">WHO WE ARE</h3>
            <p className="text-xl font-semibold text-primary mb-6">
              A full-service commerce agency designed to fuel growth at every touchpoint.
            </p>
            <p className="mb-4">
              We create shopper-driven campaigns that <span className="font-bold">don't just engage—they convert.</span> Our approach is built on expertise, precision, and creativity engineered for results.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p><span className="font-bold">We create the spark</span> that gets consumers to act.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p><span className="font-bold">We accelerate momentum</span> by closing the gap between awareness and purchase.</p>
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <p><span className="font-bold">We design for impact</span>, ensuring every execution leads to measurable conversion.</p>
              </li>
            </ul>
          </div>
          <div className="relative">
            <img 
              src="/lovable-uploads/81555fb6-be8a-469c-b7e0-76f5d8c8613e.png" 
              alt="Public Label neon sign" 
              className="rounded-lg shadow-xl w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
