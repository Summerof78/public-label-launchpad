
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const CaseStudyStonewall = () => {
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
              src="/lovable-uploads/9edd4f57-d60e-4e59-93c8-f4c83163dbec.png" 
              alt="Stonewall Kitchen - Amplifying Amazon Conversion" 
              className="w-full rounded-lg"
            />
            
            <img 
              src="/lovable-uploads/92cebffc-6aa9-419e-882f-1190450408d3.png" 
              alt="Stonewall Kitchen - Key Actions" 
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyStonewall;
