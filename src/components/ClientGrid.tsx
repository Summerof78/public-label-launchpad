
import React from 'react';

type ClientProps = {
  section: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section }) => {
  const clients = [
    { name: "ABInBev", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 0, y: 0 },
    { name: "Moet Hennessy", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 1, y: 0 },
    { name: "Solo", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 2, y: 0 },
    { name: "Origami Sake", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 3, y: 0 },
    { name: "Colorado Wine", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 4, y: 0 },
    { name: "French Bloom", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 5, y: 0 },
    { name: "Dreyers", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 6, y: 0 },
    { name: "Virgin Hotels", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 0, y: 1 },
    { name: "Virgin Voyages", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 1, y: 1 },
    { name: "Fever Tree", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 2, y: 1 },
    { name: "Spectrum", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 3, y: 1 },
    { name: "Via Carota", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 4, y: 1 },
    { name: "Ritter Sport", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 5, y: 1 },
    { name: "Mars", logo: "/public/lovable-uploads/a9e658a5-3c78-4776-b2b9-b0f91861fa76.png", x: 6, y: 1 },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-10">
        <h3 className="text-xl font-semibold tracking-tight mb-2 uppercase">{section}</h3>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-6">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="flex items-center justify-center p-4 bg-muted/50 rounded-lg border border-border hover:shadow-md transition-shadow"
          >
            <div className="h-12 flex items-center justify-center">
              <img 
                src={client.logo} 
                alt={`${client.name} logo`} 
                className="max-h-full max-w-full object-contain opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;
