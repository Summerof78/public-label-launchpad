
import React from 'react';
import { Card, CardContent } from './ui/card';

interface CaseStudyProps {
  title: string;
  logo: string;
  metric: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, logo, metric, description }) => {
  return (
    <Card className="bg-white dark:bg-muted transition-transform duration-300 hover:-translate-y-1 overflow-hidden h-full">
      <CardContent className="p-6 flex flex-col items-center">
        <div className="flex justify-center mb-8 h-24 flex-shrink-0">
          <img src={logo} alt={`${title} logo`} className="h-full object-contain" />
        </div>
        
        <div className="text-center mt-auto">
          <h3 className="text-4xl font-bold text-black dark:text-white mb-2">{metric}</h3>
          <p className="text-lg text-muted-foreground">{description}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default CaseStudyCard;
