
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from './ui/card';

interface CaseStudyProps {
  title: string;
  logo: string;
  metric: string;
  description: string;
  link: string;
}

const CaseStudyCard: React.FC<CaseStudyProps> = ({ title, logo, metric, description, link }) => {
  return (
    <Link to={link} className="block h-full">
      <Card className="bg-white dark:bg-muted transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg overflow-hidden h-full cursor-pointer">
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
    </Link>
  );
};

export default CaseStudyCard;
