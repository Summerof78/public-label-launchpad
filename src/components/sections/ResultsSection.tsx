
import React from 'react';
import CaseStudyCard from '../CaseStudyCard';
import { Card, CardContent } from '../ui/card';

const ResultsSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section className="py-24 bg-background" ref={addToRefs} id="results">
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
            title="Stonewall Kitchen"
            logo="/public/lovable-uploads/dfdec414-2fcb-44c5-969f-5288c5671f93.png"
            metric="+15% CAGR"
            description="Urban Accents Movie Night Popcorn Set Launch"
          />
          
          <CaseStudyCard 
            title="Dreyer's"
            logo="/public/lovable-uploads/eb727cad-cbad-4b44-9bf8-1ff8693dead0.png"
            metric="+8% CAGR"
            description="with Dreyer's portfolio platform"
          />
          
          <CaseStudyCard 
            title="Oreo"
            logo="/public/lovable-uploads/3f22822d-cc0d-4fcc-a31a-ce9e055f8d28.png"
            metric="$4.32 ROAS"
            description="on Oreo's national new item launch"
          />
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

