
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { ArrowLeft } from 'lucide-react';

const CaseStudyOreo = () => {
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
              <h1 className="text-4xl font-bold mb-4">Oreo Case Study</h1>
              <p className="text-xl text-muted-foreground">New Item Launch</p>
            </div>
            <img 
              src="/lovable-uploads/3f22822d-cc0d-4fcc-a31a-ce9e055f8d28.png" 
              alt="Oreo Logo" 
              className="h-24 object-contain"
            />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h2 className="text-4xl font-black mb-8">NEW ITEM LAUNCH</h2>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">OBJECTIVE</h3>
                <ul className="list-disc pl-5 space-y-2 mb-4">
                  <li>Create fully integrated omni-plans to drive awareness, conversion and distribution</li>
                  <li>Drive early ships & displays</li>
                </ul>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">TARGET</h3>
                <p className="text-lg">Millennial families who are OREO® cookie consumers.</p>
              </div>
              
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">TACTICS</h3>
                <div className="grid grid-cols-2 gap-4">
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Retailer media</li>
                    <li>Offsite media</li>
                    <li>Influencers</li>
                    <li>Retailer events</li>
                    <li>In-store POS</li>
                    <li>Social posts</li>
                  </ul>
                  <ul className="list-disc pl-5 space-y-2">
                    <li>Search</li>
                    <li>E-mail</li>
                    <li>Couponing</li>
                    <li>Ibotta, Prodege, and Shopkick rebates</li>
                    <li>OOH</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <div className="mb-12">
                <h3 className="text-2xl font-bold mb-4">PLAN/APPROACH</h3>
                <ul className="list-disc pl-5 space-y-4">
                  <li>Activate across 20+ accounts, including Grocery, Mass, Club, C-store, Drug, and Dollar channels</li>
                  <li>Tailor all plans & creative to specific accounts where possible (channel, chain/brand, tactic, merchant requests, current distribution, seasonality, region, etc.)</li>
                  <li>Reach relevant shoppers across platforms and make conversion simple with every execution</li>
                  <li>$3.5mm investment in solo brand creative executions</li>
                  <li>$6.9mm investment in portfolio campaigns, majority featuring Oreo as lead SKU</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-4">RESULTS</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Projected ROAS = $2.93</li>
                  <li>Final ROAS = $4.32</li>
                  <li>$15.1mm attributed sales</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">PRINT & DIGITAL MEDIA</h3>
              <ul className="list-disc pl-5 space-y-2">
                <li>Print</li>
                <li>Circular Ads</li>
                <li>Direct Mail</li>
                <li>AdAdapted (add-to-list)</li>
                <li>Demos</li>
              </ul>
            </div>
            <div>
              <img 
                src="/lovable-uploads/5827e519-9f7a-4ce7-8317-3e2014bcb04b.png" 
                alt="Oreo Products" 
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CaseStudyOreo;
