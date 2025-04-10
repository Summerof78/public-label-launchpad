
import React from 'react';

interface ServiceColumnProps {
  title: string;
  description: string;
  color: 'primary' | 'secondary';
  items: string[];
  tools?: { name: string; description: string }[];
}

const ServiceColumn: React.FC<ServiceColumnProps> = ({ title, description, color, items, tools }) => {
  const bgColor = color === 'primary' ? 'bg-primary' : 'bg-secondary';
  
  return (
    <div className="flex flex-col">
      <div className={`${bgColor} p-6 text-white`}>
        <h3 className="text-xl md:text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
      
      <div className="bg-muted p-6 flex-1">
        <ul className="space-y-4 mb-8">
          {items.map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        
        {tools && tools.length > 0 && (
          <>
            <h4 className="font-bold mb-4">DIFFERENTIATED TOOLS:</h4>
            <ul className="space-y-3">
              {tools.map((tool, index) => (
                <li key={index}>
                  <span className="font-semibold">{tool.name}: </span>
                  <span className="text-muted-foreground">{tool.description}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default ServiceColumn;
