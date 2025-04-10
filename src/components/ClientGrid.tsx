
import React from 'react';

type ClientProps = {
  section: string;
  subsection?: string;
};

const ClientGrid: React.FC<ClientProps> = ({ section, subsection }) => {
  const clients = [
    // Row 1
    { name: "ABInBev", logo: "/public/lovable-uploads/fb6d0a03-1299-48d2-b359-a3fbe61c5c45.png", x: 0, y: 0 },
    { name: "Moët Hennessy", logo: "/public/lovable-uploads/2e41868e-67ca-48fa-a041-be4e8c1bd897.png", x: 1, y: 0 },
    { name: "SOLO", logo: "/public/lovable-uploads/573cf981-28ed-4ad2-9515-9cf691bd2edc.png", x: 2, y: 0 },
    { name: "ORIGAMI SAKE", logo: "/public/lovable-uploads/b989fbb4-042f-4c24-96b2-2c27a6c38444.png", x: 3, y: 0 },
    { name: "COLORADO Wine Industry", logo: "/public/lovable-uploads/98da8aad-06c9-4dc1-92a3-5379e50bcfce.png", x: 4, y: 0 },
    { name: "FRENCH BLOOM", logo: "/public/lovable-uploads/10b22ba4-5275-43a3-a1c4-6e908a397359.png", x: 5, y: 0 },
    { name: "Dreyer's", logo: "/public/lovable-uploads/a6365dc6-73aa-43fd-9b2d-e9f4e408c598.png", x: 6, y: 0 },
    // Row 2
    { name: "Virgin HOTELS", logo: "/public/lovable-uploads/b2777b51-ddf6-4d0d-a2f0-df5bb6f47ed9.png", x: 0, y: 1 },
    { name: "Virgin VOYAGES", logo: "/public/lovable-uploads/c808f720-62ef-418b-8e62-4290cc1a52f6.png", x: 1, y: 1 },
    { name: "FEVER-TREE", logo: "/public/lovable-uploads/b88f3a70-427a-4582-8caf-261ea6a9220f.png", x: 2, y: 1 },
    { name: "Spectrum", logo: "/public/lovable-uploads/59aef87b-a902-4cda-be7d-326d5970504e.png", x: 3, y: 1 },
    { name: "VIA CAROTA", logo: "/public/lovable-uploads/d375c223-d63c-4d2b-9770-8c3007368e45.png", x: 4, y: 1 },
    { name: "RITTER SPORT", logo: "", x: 5, y: 1 }, // Missing logo
    { name: "MARS", logo: "", x: 6, y: 1 }, // Missing logo
    // Row 3
    { name: "WOW!", logo: "public/lovable-uploads/b2777b51-ddf6-4d0d-a2f0-df5bb6f47ed9.png", x: 0, y: 2 },
    { name: "Scotts", logo: "public/lovable-uploads/d375c223-d63c-4d2b-9770-8c3007368e45.png", x: 1, y: 2 },
    { name: "Dairy Farmers of America", logo: "public/lovable-uploads/d375c223-d63c-4d2b-9770-8c3007368e45.png", x: 2, y: 2 },
    { name: "MITSUBISHI", logo: "public/lovable-uploads/b989fbb4-042f-4c24-96b2-2c27a6c38444.png", x: 3, y: 2 },
    { name: "Hilton", logo: "", x: 4, y: 2 }, // Missing logo
    { name: "STONEWALL KITCHEN", logo: "public/lovable-uploads/d375c223-d63c-4d2b-9770-8c3007368e45.png", x: 5, y: 2 },
    { name: "GODIVA", logo: "public/lovable-uploads/98da8aad-06c9-4dc1-92a3-5379e50bcfce.png", x: 6, y: 2 },
    // Row 4
    { name: "TORO", logo: "public/lovable-uploads/d375c223-d63c-4d2b-9770-8c3007368e45.png", x: 0, y: 3 },
    { name: "WORKPLACE RESOURCE", logo: "public/lovable-uploads/10b22ba4-5275-43a3-a1c4-6e908a397359.png", x: 1, y: 3 },
    { name: "CHURCH & DWIGHT", logo: "public/lovable-uploads/59aef87b-a902-4cda-be7d-326d5970504e.png", x: 2, y: 3 },
    { name: "PROXIMO", logo: "public/lovable-uploads/b2777b51-ddf6-4d0d-a2f0-df5bb6f47ed9.png", x: 3, y: 3 },
    { name: "BRONCO", logo: "", x: 4, y: 3 }, // Missing logo
    { name: "RBC", logo: "public/lovable-uploads/59aef87b-a902-4cda-be7d-326d5970504e.png", x: 5, y: 3 },
  ];

  return (
    <div className="py-10">
      <div className="text-center mb-10">
        {section && <h3 className="text-xl font-semibold tracking-tight text-primary mb-2 uppercase">{section}</h3>}
        {subsection && <p className="text-lg uppercase tracking-wider">{subsection}</p>}
      </div>
      <div className="grid grid-cols-7 gap-0 border border-gray-200">
        {clients.map((client, index) => (
          <div 
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-gray-200 h-32 transition-opacity hover:opacity-80"
            style={{ gridColumn: client.x + 1, gridRow: client.y + 1 }}
          >
            <div className="h-16 flex items-center justify-center mb-2">
              {client.logo ? (
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-full max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <span className="text-gray-400 text-sm">{client.name}</span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientGrid;

