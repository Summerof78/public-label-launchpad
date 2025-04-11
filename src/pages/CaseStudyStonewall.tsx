
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
          
          <div className="mb-12 flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">Stonewall Kitchen Case Study</h1>
              <p className="text-xl text-muted-foreground">Amplifying Amazon Conversion</p>
            </div>
            <img 
              src="/lovable-uploads/dfdec414-2fcb-44c5-969f-5288c5671f93.png" 
              alt="Stonewall Kitchen Logo" 
              className="h-24 object-contain"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-4xl font-black mb-4">AMPLIFYING AMAZON CONVERSION</h2>
              <p className="text-lg mb-4">Stonewall Kitchen looked to us to help drive Amazon growth, improve item content, and better manage products merchandising and buy box challenges.</p>
              <ul className="space-y-2">
                <li className="flex items-center">✓ 2,300 products</li>
                <li className="flex items-center">✓ Direct Amazon vendor relationship</li>
                <li className="flex items-center">✓ 5 Separate direct marketplace accounts</li>
                <li className="flex items-center">✓ 100+ 3<sup>rd</sup> party sellers</li>
              </ul>
            </div>
            <div className="bg-muted p-8 rounded-lg">
              <p className="text-lg mb-4">Faced struggling sales and constant content and pricing challenges on Amazon.</p>
              <p className="text-lg mb-8">Created a comprehensive marketing, merchandising, and sales program that addressed all core Amazon challenges.</p>
              <div className="text-center">
                <h3 className="text-2xl font-bold mb-2">Result:</h3>
                <p className="text-3xl font-black">Averaged +15% CAGR across all brands</p>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-6">KEY ACTIONS</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Coordinated content updates across brands</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Amazon unique content and messaging is now part of overall content plans</li>
                  <li>Retooled all brands A+ and infographics</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4 mt-6">Created performance ad strategy</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Supports all core items</li>
                  <li>Leverages all available assets</li>
                  <li>Tightly integrated with overall marketing vision</li>
                </ul>
                
                <h3 className="text-xl font-bold mb-4 mt-6">Leverages Public Label's Amazon ad model</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Consistently grows organic revenue at the same rate and pace of paid</li>
                  <li>Drives 15% growth with a 9% investment in Amazon ad spend</li>
                </ul>
              </div>
              <div>
                <img 
                  src="/lovable-uploads/099eef71-9764-4421-bb8f-b43a3f158836.png" 
                  alt="Stonewall Kitchen Amazon Store" 
                  className="w-full rounded-lg mb-6"
                />
                <div className="grid grid-cols-2 gap-4">
                  <img 
                    src="/lovable-uploads/4c2f09d7-38fd-420c-b2a5-2f3b28410f70.png" 
                    alt="Urban Accents Product" 
                    className="w-full rounded-lg"
                  />
                  <img 
                    src="/lovable-uploads/0f048ae7-ead6-469e-ae31-fa3c1ea9eee2.png" 
                    alt="Holiday Gift Collection" 
                    className="w-full rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyStonewall;
