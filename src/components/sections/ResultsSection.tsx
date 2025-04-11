
import React from 'react';
import CaseStudyCard from '../CaseStudyCard';

const ResultsSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-background" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="section-title mb-6">IMPACT IN ACTION</h2>
            <p className="uppercase text-lg mb-8">WORK THAT WORKS</p>
          </div>
          <div>
            <p className="text-lg">
              We don't just win awards—we win results. Our creative is made to convert. Here's a quick snapshot of the performance we've driven:
            </p>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <CaseStudyCard 
            title="Dreyer's"
            logo="/public/lovable-uploads/951ee33b-a36d-465a-8632-a67fb15b7dc7.png"
            metric="+8% CAGR"
            description="with Dreyer's portfolio platform"
          />
          
          <CaseStudyCard 
            title="Oreo"
            logo="/public/lovable-uploads/e4163406-3ecf-4fff-a5c6-937ccb6b5019.png"
            metric="$4.32 ROAS"
            description="on Oreo's national new item launch"
          />
          
          <CaseStudyCard 
            title="Stonewall Kitchen"
            logo="/public/lovable-uploads/5b9739b7-5f17-4e02-b3a7-0a825cd6a530.png"
            metric="+15% CAGR"
            description="on Amazon for Stonewall Kitchen"
          />
          
          <CaseStudyCard 
            title="Hoover"
            logo="/public/lovable-uploads/9f695f62-6a6f-4959-bbf9-3fd763d49fac.png"
            metric="+52% revenue growth"
            description="for Hoover through DTC creative optimization"
          />
          
          <CaseStudyCard 
            title="Evolve"
            logo="/public/lovable-uploads/20316ce9-1f00-4776-996b-58ca066760aa.png"
            metric="+3pts penetration"
            description="with Meijer's new millennial target"
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
