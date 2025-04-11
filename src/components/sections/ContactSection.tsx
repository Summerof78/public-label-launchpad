
import React from 'react';
import ContactForm from '../ContactForm';

const ContactSection = ({ addToRefs }: { addToRefs: (el: HTMLDivElement) => void }) => {
  return (
    <section id="contact" className="py-24" 
      style={{ backgroundImage: "url('/public/lovable-uploads/78b093b5-f73b-4ced-a399-de405a325443.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
      ref={addToRefs}
    >
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="bg-background/90 backdrop-blur-sm p-8 md:p-12 rounded-lg shadow-xl">
            <div className="text-center mb-10">
              <h2 className="section-title mb-6">
                READY TO MOVE?<br />LET'S TALK.
              </h2>
              <p className="text-xl">COMMERCE DOESN'T WAIT. NEITHER SHOULD YOU.</p>
            </div>
            
            <ContactForm />
            
            <div className="mt-10 text-center">
              <p className="text-muted-foreground">
                Morgan McAlenney, VP Business Development | Mobile: 720-878-5176 | Morgan.McAlenney@publiclabelagency.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
