
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const CaseStudyDreyers = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      
      <main className="flex-grow">
        <div className="container mx-auto px-6 py-12">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
          
          <div className="flex flex-col gap-8">
            <img 
              src="/lovable-uploads/27e30c53-1c71-4794-959f-18668ca59eef.png" 
              alt="Dreyer's Multi-Brand Platform" 
              className="w-full rounded-lg"
            />
            
            <img 
              src="/lovable-uploads/8123df3a-a75b-4f21-b021-f9564442fd94.png" 
              alt="Dreyer's Award Winning Creative" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDreyers;
