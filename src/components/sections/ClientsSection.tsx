
import React from 'react';
import ClientGrid from '../ClientGrid';

const ClientsSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section id="clients" className="py-20 bg-muted" ref={addToRefs}>
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-16">
          WITH AN EXPERIENCED TEAM<br />TO SUPPORT YOU
        </h2>
        <div className="max-w-7xl mx-auto">
          <ClientGrid section="COMPANY WE KEEP" subsection="RELEVANT PAST" />
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
