
import React from 'react';

interface CaseStudyProps {
  title: string;
  logo: string;
  metric: string;
  description: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, logo, metric, description }) => {
  return (
    <div className="bg-white dark:bg-muted p-6 rounded-lg shadow-md transition-transform duration-300 hover:-translate-y-1">
      <div className="flex justify-center mb-6">
        <img src={logo} alt={`${title} logo`} className="h-16 object-contain" />
      </div>
      
      <div className="text-center mb-4">
        <h3 className="text-3xl font-bold text-primary">{metric}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
