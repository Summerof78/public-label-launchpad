
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
          
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Dreyer's Case Study</h1>
              <p className="text-xl text-muted-foreground">Multi-Brand Platform Success</p>
            </div>
            <img 
              src="/lovable-uploads/eb727cad-cbad-4b44-9bf8-1ff8693dead0.png" 
              alt="Dreyer's Logo" 
              className="h-24 object-contain"
            />
          </div>
          
          <div className="mb-12">
            <h2 className="text-4xl font-black mb-6">MULTI-BRAND PLATFORM</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-black mb-6 text-secondary">HAVE HAPPY ON HAND!</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-5xl font-bold text-orange-500">5</p>
                    <p className="text-xl font-bold">BRANDS</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-5xl font-bold text-orange-500">3</p>
                    <p className="text-xl font-bold">PERSONAS</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-5xl font-bold text-orange-500">10+</p>
                    <p className="text-xl font-bold">MOTIVATIONS</p>
                  </div>
                  <div className="bg-muted p-6 rounded-lg text-center">
                    <p className="text-5xl font-bold text-orange-500">26</p>
                    <p className="text-xl font-bold">RETAILERS</p>
                  </div>
                </div>
                
                <div className="bg-muted p-6 rounded-lg text-center mb-8">
                  <p className="text-5xl font-bold text-orange-500">250+</p>
                  <p className="text-xl font-bold">CREATIVE VERSIONING</p>
                </div>
              </div>
              
              <div>
                <p className="text-lg mb-6">
                  Dreyer's sought our help in marketing five brands across 26 retailers. We created the 'Happy on Hand' shopper platform, using insights to deliver flexible, tailored messaging by shopper motivation, brand, and retailer.
                </p>
                <p className="text-lg mb-6">
                  The result: amplified conversion across all brands while delivering portfolio share and category growth.
                </p>
                
                <h3 className="text-xl font-bold mb-4">MOTIVATIONS</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <img 
                    src="/lovable-uploads/5827e519-9f7a-4ce7-8317-3e2014bcb04b.png" 
                    alt="Mom's Summer Getaway" 
                    className="w-full rounded-lg"
                  />
                  <img 
                    src="/lovable-uploads/206927ed-c0f6-4ad6-9a81-a3decbd706c3.png" 
                    alt="Happy On Hand Promotion" 
                    className="w-full rounded-lg"
                  />
                </div>
                
                <div className="grid grid-cols-2 gap-8">
                  <div>
                    <p className="font-bold">Occasions:</p>
                    <p>Last day of school</p>
                    <p className="font-bold mt-2">Holidays:</p>
                    <p>4 summer holidays</p>
                  </div>
                  <div>
                    <p className="font-bold">Entertain:</p>
                    <p>Unique usage ideas</p>
                    <p className="font-bold mt-2">Reward:</p>
                    <p>Mom "Me Time"</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <h3 className="text-3xl font-bold mb-6">AWARD WINNING CREATIVE</h3>
              <p className="text-lg mb-6">
                'Have Happy On Hand' continued to amplify brand and category growth for 5 years. In 2023, this shopper campaign was recognized for its strategic approach and impact it's had on the brand and category by Chief Marketer's PRO Award for best shopper marketing campaign. The breadth of execution, strategic planning, consistent messaging, tailored creative, and digital shelf optimization were core pillars of the truly omnichannel, conversion-focused program.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4">
                <img 
                  src="/lovable-uploads/5827e519-9f7a-4ce7-8317-3e2014bcb04b.png" 
                  alt="Campaign Creative 1" 
                  className="w-full rounded-lg"
                />
                <img 
                  src="/lovable-uploads/206927ed-c0f6-4ad6-9a81-a3decbd706c3.png" 
                  alt="Campaign Creative 2" 
                  className="w-full rounded-lg"
                />
                <img 
                  src="/lovable-uploads/5827e519-9f7a-4ce7-8317-3e2014bcb04b.png" 
                  alt="Campaign Creative 3" 
                  className="w-full rounded-lg"
                />
                <img 
                  src="/lovable-uploads/206927ed-c0f6-4ad6-9a81-a3decbd706c3.png" 
                  alt="Campaign Creative 4" 
                  className="w-full rounded-lg"
                />
              </div>
            </div>
          </div>
          
          <div className="bg-muted p-6 rounded-lg text-center mb-8">
            <p className="text-3xl font-bold">5 Years Running, +8% CAGR, Took #1 Category Share Position From Unilever</p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyDreyers;
